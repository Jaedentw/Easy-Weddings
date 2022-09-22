const express = require('express');

const { PersonnelsController } = require('../controllers');

const router = express.Router();

// CRUD REST API FRUITS ROUTES
// CREATE - post
router.post('/', PersonnelsController.create);

// READ - get
// Read All
router.get('/', PersonnelsController.getAll);

// Read One
router.get('/:id', PersonnelsController.getById);

// UPDATE - put
router.put('/:id', PersonnelsController.update);

// DELETE - delete
router.delete('/:id', PersonnelsController.remove);

module.exports = router;
