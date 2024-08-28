const express = require('express');
const connectDB = require('./config/db'); // Ensure the path is correct
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/courses', require('./routes/course'));
app.use('/api/projects', require('./routes/project'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/job-portals', require('./routes/jobPortal'));
app.use('/api/community-chat', require('./routes/communityChat'));
app.use('/api/contact-details', require('./routes/contactDetail'));

// Add a route for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

