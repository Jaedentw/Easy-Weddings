/* eslint-disable camelcase */
const { VenuesModel } = require('../models');

const create = (req, res) => {
  const { userId } = req.session;
  if (!userId) {
    return res.status(401).send({ message: 'User is not logged in' });
  }

  const { name, city, website_url, capacity, theme, image_url, description, features } = req.body;
  if (!name || !city || !website_url || !capacity || !image_url || !description) {
    return res
      .status(400)
      .send({ message: 'Please provde all details to make a Venue service' });
  }

  VenuesModel.create(name, city, website_url, capacity, theme, image_url, description, features, userId)
    .then(venue => {
      res.status(201).send({ message: 'Created!', venue });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error creating venue', error: error.message });
    });
};

const getAll = (req, res) => {
  VenuesModel.getAll()
    .then(venues => {
      if (venues.length === 0) {
        return res.status(200).send({ message: 'No venues available!' });
      }

      res.status(200).send({ venues });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error reading venues', error: error.message });
    });
};

const getById = (req, res) => {
  const { id } = req.params;

  VenuesModel.getById(id)
    .then(venue => {
      if (!venue) {
        return res.status(404).send({ message: 'venue not found!' });
      }

      res.status(200).send({ message: 'Here is your venue!', venue });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error reading venue', error: error.message });
    });
};

const update = (req, res) => {
  const { userId } = req.session;
  if (!userId) {
    return res.status(401).send({ message: 'User is not logged in' });
  }

  const { name, city, website_url, capacity, theme, image_url, description, features } = req.body;
  if (!name || !city || !website_url || !capacity || !image_url || !description) {
    return res
      .status(400)
      .send({ message: 'Provide name, color and emoji to update a venue' });
  }

  const { id } = req.params;

  VenuesModel.update(name, city, website_url, capacity, theme, image_url, description, features, userId, id)
    .then(venue => {
      if (!venue) {
        return res.status(404).send({ message: 'venue not found!' });
      }

      res.status(201).send({ message: 'Updated!', venue });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error updating venue', error: error.message });
    });
};

const remove = (req, res) => {
  const { userId } = req.session;
  if (!userId) {
    return res.status(401).send({ message: 'User is not logged in' });
  }

  const { id } = req.params;

  VenuesModel.remove(id)
    .then(() => {
      res.status(204).send();
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error deleting venue', error: error.message });
    });
};

module.exports = { create, getAll, getById, update, remove };
