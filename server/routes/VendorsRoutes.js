const express = require('express');

const { VendorsController } = require('../controllers');

const router = express.Router();

// CRUD REST API FRUITS ROUTES
// CREATE - post
router.post('/', VendorsController.create);

// READ - get
// Read All
router.get('/', VendorsController.getAll);

// Read One
router.get('/:id', VendorsController.getById);

// UPDATE - put
router.put('/:id', VendorsController.update);

// DELETE - delete
router.delete('/:id', VendorsController.remove);

module.exports = router;
