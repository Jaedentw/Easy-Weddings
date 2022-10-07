/* eslint-disable camelcase */
const { CaterersModel } = require('../models');

const create = (req, res) => {
  const { userId } = req.session;
  if (!userId) {
    return res.status(401).send({ message: 'User is not logged in' });
  }

  const { name, city, image_url, capacity, cuisine, menu_url, description, alternatives } = req.body;
  if (!name || !city || !image_url || !capacity || !cuisine || !menu_url || !description) {
    return res
      .status(400)
      .send({ message: 'Please provide all details to create a Caterer service' });
  }

  CaterersModel.create(name, city, image_url, capacity, cuisine, menu_url, description, alternatives, userId)
    .then(caterer => {
      res.status(201).send({ message: 'Created!', caterer });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error creating caterer', error: error.message });
    });
};

const getAll = (req, res) => {
  CaterersModel.getAll()
    .then(Caterers => {
      if (Caterers.length === 0) {
        return res.status(200).send({ message: 'No Caterers available!' });
      }

      res.status(200).send({ Caterers });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error reading Caterers', error: error.message });
    });
};

const getById = (req, res) => {
  const { id } = req.params;

  CaterersModel.getById(id)
    .then(caterer => {
      if (!caterer) {
        return res.status(404).send({ message: 'caterer not found!' });
      }

      res.status(200).send({ message: 'Here is your caterer!', caterer });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error reading caterer', error: error.message });
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
      .send({ message: 'Provide name, color and emoji to update a caterer' });
  }

  const { id } = req.params;

  CaterersModel.update(name, color, emoji, id)
    .then(caterer => {
      if (!caterer) {
        return res.status(404).send({ message: 'caterer not found!' });
      }

      res.status(201).send({ message: 'Updated!', caterer });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error updating caterer', error: error.message });
    });
};

const remove = (req, res) => {
  const { userId } = req.session;
  if (!userId) {
    return res.status(401).send({ message: 'User is not logged in' });
  }

  const { id } = req.params;

  CaterersModel.remove(id)
    .then(() => {
      res.status(204).send();
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error deleting caterer', error: error.message });
    });
};

module.exports = { create, getAll, getById, update, remove };
