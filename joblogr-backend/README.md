# JobLogr Backend API

Backend server for the JobLogr application, providing RESTful APIs for job application tracking and management.

## Current Status ✅

### Completed
- Basic project setup
- Database configuration
- Core dependencies installation
- Authentication system
- Models implementation
- API routes implementation

### Next Steps
- Set up testing framework
- Add input validation middleware
- Implement email notifications
- Add file upload functionality
- Set up CI/CD pipeline

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- Express Validator

## Project Structure

```
joblogr-backend/
├── src/
│   ├── config/         # Configuration files
│   ├── middleware/     # Custom middleware
│   ├── models/        # Database models
│   │   ├── User.js
│   │   ├── Application.js
│   │   └── Interview.js
│   ├── routes/        # API routes
│   │   ├── auth.js
│   │   ├── users.js
│   │   ├── applications.js
│   │   ├── interviews.js
│   │   └── analytics.js
│   ├── services/      # Business logic
│   ├── utils/         # Helper functions
│   └── server.js      # Main application file
├── .env               # Environment variables
└── package.json
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/user` - Get user data (protected)

### User Management
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile
- `PUT /api/users/settings` - Update user settings

### Applications
- `GET /api/applications` - Get all applications
- `POST /api/applications` - Create new application
- `GET /api/applications/:id` - Get specific application
- `PUT /api/applications/:id` - Update application
- `DELETE /api/applications/:id` - Delete application

### Interviews
- `GET /api/interviews` - Get all interviews
- `POST /api/interviews` - Create new interview
- `GET /api/interviews/:id` - Get specific interview
- `PUT /api/interviews/:id` - Update interview
- `DELETE /api/interviews/:id` - Delete interview

### Analytics
- `GET /api/analytics/overview` - Get application statistics
- `GET /api/analytics/timeline` - Get application timeline data
- `GET /api/analytics/applications/monthly` - Get monthly statistics

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up MongoDB:
   - Make sure MongoDB is installed and running on your system
   - Default connection URL: mongodb://localhost:27017/joblogr

4. Configure environment variables:
   Create a `.env` file in the root directory with:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/joblogr
   JWT_SECRET=your_jwt_secret_here
   NODE_ENV=development
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with hot reload

## Data Models

### User
- Email (unique)
- Password (hashed)
- Name
- Profile (title, location, skills, experience, education)
- Settings (notifications, darkMode)

### Application
- Job Title
- Company
- Status (pending, interview, accepted, rejected)
- Location
- Salary Range
- Description
- Timeline
- Interview References

### Interview
- Type (phone, video, onsite, technical)
- Date and Duration
- Location
- Contact Person
- Notes
- Status
- Reminders

## Security Features
- JWT Authentication
- Password Hashing
- Protected Routes
- Request Validation

## Development Progress
- [x] Project Setup
- [x] Database Models
- [x] Authentication System
- [x] User Routes
- [x] Application Routes
- [x] Interview Routes
- [x] Analytics Routes
- [ ] Email Notifications
- [ ] File Upload System
- [ ] Testing Suite
- [ ] Documentation
- [ ] Deployment Configuration

## Development

Run the development server with hot reload:
```bash
npm run dev
```

## Production

Start the production server:
```bash
npm start
```
