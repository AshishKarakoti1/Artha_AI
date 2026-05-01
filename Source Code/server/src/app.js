const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
const routes = require('./routes');

// Use routes
app.use('/api', routes);

// Health check route
app.get('/', (req, res) => {
  res.send('ArthaAI API Running');
});

module.exports = app;

const errorHandler = require('./middleware/error.middleware');
app.use(errorHandler);