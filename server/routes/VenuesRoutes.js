const express = require('express');

const { VenuesController } = require('../controllers');

const router = express.Router();

// CRUD REST API FRUITS ROUTES
// CREATE - post
router.post('/', VenuesController.create);

// READ - get
// Read All
router.get('/', VenuesController.getAll);

// Read One
router.get('/:id', VenuesController.getById);

// UPDATE - put
router.put('/:id', VenuesController.update);

// DELETE - delete
router.delete('/:id', VenuesController.remove);

module.exports = router;
