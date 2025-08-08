const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Application = require('../models/Application');
const Interview = require('../models/Interview');

// @route   GET api/analytics/overview
// @desc    Get analytics overview
// @access  Private
router.get('/overview', auth, async (req, res) => {
    try {
        // Get all applications for the user
        const applications = await Application.find({ userId: req.user.id });
        
        // Calculate statistics
        const stats = {
            total: applications.length,
            status: {
                pending: 0,
                interview: 0,
                accepted: 0,
                rejected: 0
            },
            byCompany: {},
            byLevel: {}
        };

        // Process applications
        applications.forEach(app => {
            // Count by status
            stats.status[app.status]++;
            
            // Count by company
            stats.byCompany[app.company] = (stats.byCompany[app.company] || 0) + 1;
            
            // Count by level
            stats.byLevel[app.level] = (stats.byLevel[app.level] || 0) + 1;
        });

        // Get interview statistics
        const interviews = await Interview.find({ userId: req.user.id });
        stats.interviews = {
            total: interviews.length,
            upcoming: interviews.filter(i => new Date(i.date) > new Date()).length,
            completed: interviews.filter(i => i.status === 'completed').length,
            byType: {}
        };

        // Count interviews by type
        interviews.forEach(interview => {
            stats.interviews.byType[interview.type] = 
                (stats.interviews.byType[interview.type] || 0) + 1;
        });

        res.json(stats);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   GET api/analytics/timeline
// @desc    Get application timeline data
// @access  Private
router.get('/timeline', auth, async (req, res) => {
    try {
        const applications = await Application.find({ userId: req.user.id })
            .select('timeline createdAt status')
            .sort('createdAt');

        // Process timeline data
        const timelineData = applications.map(app => ({
            id: app._id,
            events: app.timeline.map(event => ({
                date: event.date,
                status: event.status,
                notes: event.notes
            })),
            created: app.createdAt,
            currentStatus: app.status
        }));

        res.json(timelineData);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   GET api/analytics/applications/monthly
// @desc    Get monthly application statistics
// @access  Private
router.get('/applications/monthly', auth, async (req, res) => {
    try {
        const applications = await Application.find({ userId: req.user.id })
            .select('createdAt status');

        // Group applications by month
        const monthlyStats = {};
        
        applications.forEach(app => {
            const date = new Date(app.createdAt);
            const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
            
            if (!monthlyStats[monthKey]) {
                monthlyStats[monthKey] = {
                    total: 0,
                    pending: 0,
                    interview: 0,
                    accepted: 0,
                    rejected: 0
                };
            }
            
            monthlyStats[monthKey].total++;
            monthlyStats[monthKey][app.status]++;
        });

        res.json(monthlyStats);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
