const express = require('express');

const IndexRoutes = require('./IndexRoutes');
const AuthRoutes = require('./AuthRoutes');
const BusinessesRoutes = require('./BusinessesRoutes');

const router = express.Router();

// RENDERING ROUTES
router.use('/', IndexRoutes);

// AUTHENTICATION ROUTES
router.use('/api/auth', AuthRoutes);

// CRUD REST API businesses ROUTES
router.use('/api/businesses', BusinessesRoutes);

// Catch all route
router.use((req, res) => {
  res.status(404).send({ message: 'URL Not found' });
});

module.exports = router;
