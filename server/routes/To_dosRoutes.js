const express = require('express');

const { To_dosController } = require('../controllers');

const router = express.Router();

// CRUD REST API FRUITS ROUTES
// CREATE - post
router.post('/', To_dosController.create);

// READ - get
// Read All
router.get('/', To_dosController.getAll);

// Read One
router.get('/:id', To_dosController.getById);

// UPDATE - put
router.put('/:id', To_dosController.update);

// DELETE - delete
router.delete('/:id', To_dosController.remove);

module.exports = router;
