const express = require('express');

const { BusinessesController } = require('../controllers');

const router = express.Router();

// CRUD REST API FRUITS ROUTES
// CREATE - post
router.post('/', BusinessesController.create);

// READ - get
// Read All
router.get('/', BusinessesController.getAll);

// Read One
router.get('/:id', BusinessesController.getById);

// UPDATE - put
router.put('/:id', BusinessesController.update);

// DELETE - delete
router.delete('/:id', BusinessesController.remove);

module.exports = router;
