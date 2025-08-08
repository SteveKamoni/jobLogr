const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Application = require('../models/Application');
const { check, validationResult } = require('express-validator');

// @route   GET api/applications
// @desc    Get all applications for a user
// @access  Private
router.get('/', auth, async (req, res) => {
    try {
        const applications = await Application.find({ userId: req.user.id })
            .sort({ createdAt: -1 });
        res.json(applications);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST api/applications
// @desc    Create a new application
// @access  Private
router.post('/', [auth, [
    check('jobTitle', 'Job title is required').not().isEmpty(),
    check('company', 'Company name is required').not().isEmpty(),
    check('location', 'Location is required').not().isEmpty(),
    check('level', 'Job level is required').not().isEmpty()
]], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const newApplication = new Application({
            userId: req.user.id,
            ...req.body,
            timeline: [{
                status: req.body.status || 'pending',
                date: Date.now(),
                notes: 'Application created'
            }]
        });

        const application = await newApplication.save();
        res.json(application);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   GET api/applications/:id
// @desc    Get application by ID
// @access  Private
router.get('/:id', auth, async (req, res) => {
    try {
        const application = await Application.findById(req.params.id);
        
        if (!application) {
            return res.status(404).json({ msg: 'Application not found' });
        }

        // Make sure user owns application
        if (application.userId.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        }

        res.json(application);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Application not found' });
        }
        res.status(500).send('Server Error');
    }
});

// @route   PUT api/applications/:id
// @desc    Update application
// @access  Private
router.put('/:id', auth, async (req, res) => {
    try {
        let application = await Application.findById(req.params.id);
        
        if (!application) {
            return res.status(404).json({ msg: 'Application not found' });
        }

        // Make sure user owns application
        if (application.userId.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        }

        // If status is being updated, add to timeline
        if (req.body.status && req.body.status !== application.status) {
            application.timeline.push({
                status: req.body.status,
                date: Date.now(),
                notes: req.body.notes || `Status updated to ${req.body.status}`
            });
        }

        // Update fields
        application = await Application.findByIdAndUpdate(
            req.params.id,
            { $set: { ...req.body, updatedAt: Date.now() } },
            { new: true }
        );

        res.json(application);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Application not found' });
        }
        res.status(500).send('Server Error');
    }
});

// @route   DELETE api/applications/:id
// @desc    Delete application
// @access  Private
router.delete('/:id', auth, async (req, res) => {
    try {
        const application = await Application.findById(req.params.id);
        
        if (!application) {
            return res.status(404).json({ msg: 'Application not found' });
        }

        // Make sure user owns application
        if (application.userId.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        }

        await application.remove();
        res.json({ msg: 'Application removed' });
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Application not found' });
        }
        res.status(500).send('Server Error');
    }
});

module.exports = router;
