const express = require('express');

const { GuestsController } = require('../controllers');

const router = express.Router();

// CRUD REST API FRUITS ROUTES
// CREATE - post
router.post('/', GuestsController.create);

// READ - get
// Read All
router.get('/', GuestsController.getAll);

// Read One
router.get('/:id', GuestsController.getById);

// UPDATE - put
router.put('/:id', GuestsController.update);

// DELETE - delete
router.delete('/:id', GuestsController.remove);

module.exports = router;
