/* eslint-disable camelcase */
const { DecoratorsModel } = require('../models');

const create = (req, res) => {
  const { userId } = req.session;
  if (!userId) {
    return res.status(401).send({ message: 'User is not logged in' });
  }

  const { name, city, website_url, image_url, specialty, description, theme } = req.body;
  if (!name || !city || !website_url || !image_url || !specialty || !description || !theme) {
    return res
      .status(400)
      .send({ message: 'Please provide all details to create a decorator service' });
  }

  DecoratorsModel.create(name, city, website_url, image_url, specialty, description, theme, userId)
    .then(decorator => {
      res.status(201).send({ message: 'Created!', decorator });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error creating decorator', error: error.message });
    });
};

const getAll = (req, res) => {
  DecoratorsModel.getAll()
    .then(Decorators => {
      if (Decorators.length === 0) {
        return res.status(200).send({ message: 'No Decorators available!' });
      }

      res.status(200).send({ Decorators });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error reading Decorators', error: error.message });
    });
};

const getById = (req, res) => {
  const { id } = req.params;

  DecoratorsModel.getById(id)
    .then(decorator => {
      if (!decorator) {
        return res.status(404).send({ message: 'decorator not found!' });
      }

      res.status(200).send({ message: 'Here is your decorator!', decorator });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error reading decorator', error: error.message });
    });
};

const update = (req, res) => {
  const { userId } = req.session;
  if (!userId) {
    return res.status(401).send({ message: 'User is not logged in' });
  }

  const {name, city, website_url, image_url, specialty, description, theme} = req.body;
  if (!name || !city || !website_url || !image_url || !specialty || !description || !theme) {
    return res
      .status(400)
      .send({ message: 'Provide name, color and emoji to update a decorator' });
  }

  const { id } = req.params;

  DecoratorsModel.update(name, city, website_url, image_url, specialty, description, theme, userId, id)
    .then(decorator => {
      if (!decorator) {
        return res.status(404).send({ message: 'decorator not found!' });
      }

      res.status(201).send({ message: 'Updated!', decorator });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error updating decorator', error: error.message });
    });
};

const remove = (req, res) => {
  const { userId } = req.session;
  if (!userId) {
    return res.status(401).send({ message: 'User is not logged in' });
  }

  const { id } = req.params;

  DecoratorsModel.remove(id)
    .then(() => {
      res.status(204).send();
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error deleting decorator', error: error.message });
    });
};

module.exports = { create, getAll, getById, update, remove };
