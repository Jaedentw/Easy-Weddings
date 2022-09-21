const { BusinessesModel } = require('../models');

const create = (req, res) => {
  const { userId } = req.session;
  if (!userId) {
    return res.status(401).send({ message: 'User is not logged in' });
  }

  const { name, color, emoji } = req.body;
  if (!name || !color || !emoji) {
    return res
      .status(400)
      .send({ message: 'Provide name, color and emoji to create a fruit' });
  }

  BusinessesModel.create(userId, name, color, emoji)
    .then(fruit => {
      res.status(201).send({ message: 'Created!', fruit });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error creating fruit', error: error.message });
    });
};

const getAll = (req, res) => {
  BusinessesModel.getAll()
    .then(businesses => {
      if (businesses.length === 0) {
        return res.status(200).send({ message: 'No businesses available!' });
      }

      res.status(200).send({ message: 'List of all businesses!', businesses });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error reading businesses', error: error.message });
    });
};

const getById = (req, res) => {
  const { id } = req.params;

  BusinessesModel.getById(id)
    .then(fruit => {
      if (!fruit) {
        return res.status(404).send({ message: 'Fruit not found!' });
      }

      res.status(200).send({ message: 'Here is your fruit!', fruit });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error reading fruit', error: error.message });
    });
};

const update = (req, res) => {
  const { userId } = req.session;
  if (!userId) {
    return res.status(401).send({ message: 'User is not logged in' });
  }

  const { name, color, emoji } = req.body;
  if (!name || !color || !emoji) {
    return res
      .status(400)
      .send({ message: 'Provide name, color and emoji to update a fruit' });
  }

  const { id } = req.params;

  BusinessesModel.update(name, color, emoji, id)
    .then(fruit => {
      if (!fruit) {
        return res.status(404).send({ message: 'Fruit not found!' });
      }

      res.status(201).send({ message: 'Updated!', fruit });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error updating fruit', error: error.message });
    });
};

const remove = (req, res) => {
  const { userId } = req.session;
  if (!userId) {
    return res.status(401).send({ message: 'User is not logged in' });
  }

  const { id } = req.params;

  BusinessesModel.remove(id)
    .then(() => {
      res.status(204).send();
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error deleting fruit', error: error.message });
    });
};

module.exports = { create, getAll, getById, update, remove };