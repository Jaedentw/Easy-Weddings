const express = require('express');

const { WeddingsController } = require('../controllers');

const router = express.Router();

// CRUD REST API FRUITS ROUTES
// CREATE - post
router.post('/', WeddingsController.create);

// READ - get
// Read All
router.get('/', WeddingsController.getAll);

// Read One
router.get('/:id', WeddingsController.getById);

// UPDATE - put
router.put('/:id', WeddingsController.update);

// DELETE - delete
router.delete('/:id', WeddingsController.remove);

module.exports = router;
