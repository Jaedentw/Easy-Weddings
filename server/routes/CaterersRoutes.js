const express = require('express');

const { CaterersController } = require('../controllers');

const router = express.Router();

// CRUD REST API FRUITS ROUTES
// CREATE - post
router.post('/', CaterersController.create);

// READ - get
// Read All
router.get('/', CaterersController.getAll);

// Read One
router.get('/:id', CaterersController.getById);

// UPDATE - put
router.put('/:id', CaterersController.update);

// DELETE - delete
router.delete('/:id', CaterersController.remove);

module.exports = router;
