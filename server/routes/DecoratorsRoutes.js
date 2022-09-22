const express = require('express');

const { DecoratorsController } = require('../controllers');

const router = express.Router();

// CRUD REST API FRUITS ROUTES
// CREATE - post
router.post('/', DecoratorsController.create);

// READ - get
// Read All
router.get('/', DecoratorsController.getAll);

// Read One
router.get('/:id', DecoratorsController.getById);

// UPDATE - put
router.put('/:id', DecoratorsController.update);

// DELETE - delete
router.delete('/:id', DecoratorsController.remove);

module.exports = router;
