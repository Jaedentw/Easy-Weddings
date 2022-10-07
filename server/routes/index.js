/* eslint-disable camelcase */
const express = require('express');

const IndexRoutes = require('./IndexRoutes');
const AuthRoutes = require('./AuthRoutes');
const BusinessesRoutes = require('./BusinessesRoutes');
const CaterersRoutes = require('./CaterersRoutes')
const DecoratorsRoutes = require ('./DecoratorsRoutes')
const PersonnelsRoutes = require ('./PersonnelsRoutes')
const To_dosRoutes = require ('./To_dosRoutes')
const UsersRoutes = require ('./UsersRoutes')
const VendorsRoutes = require ('./VendorsRoutes')
const VenuesRoutes = require ('./VenuesRoutes')
const WeddingsRoutes = require ('./WeddingsRoutes')
const GuestsRoutes = require ('./GuestsRoutes')

const router = express.Router();

// RENDERING ROUTES
router.use('/', IndexRoutes);

// AUTHENTICATION ROUTES
router.use('/api/auth', AuthRoutes);

// CRUD REST API businesses ROUTES
router.use('/api/businesses', BusinessesRoutes);

// CRUD REST API caterers ROUTES
router.use('/api/caterers', CaterersRoutes);

// CRUD REST API decorators ROUTES
router.use('/api/decorators', DecoratorsRoutes);

// CRUD REST API personnels ROUTES
router.use('/api/personnels', PersonnelsRoutes);

// CRUD REST API to_dos ROUTES
router.use('/api/to_dos', To_dosRoutes);

// CRUD REST API users ROUTES
router.use('/api/users', UsersRoutes);

// CRUD REST API vendors ROUTES
router.use('/api/vendors', VendorsRoutes);

// CRUD REST API venues ROUTES
router.use('/api/venues', VenuesRoutes);

// CRUD REST API weddings ROUTES
router.use('/api/weddings', WeddingsRoutes);

// CRUD REST API guests ROUTES
router.use('/api/guests', GuestsRoutes);

// Catch all route
router.use((req, res) => {
  res.status(404).send({ message: 'URL Not found' });
});

module.exports = router;
