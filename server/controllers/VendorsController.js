const { VendorsModel } = require('../models');

const create = (req, res) => {
  const { userId } = req.session;
  if (!userId) {
    return res.status(401).send({ message: 'User is not logged in' });
  }

  const { name, color, emoji } = req.body;
  if (!name || !color || !emoji) {
    return res
      .status(400)
      .send({ message: 'Provide name, color and emoji to create a vendor' });
  }

  VendorsModel.create(userId, name, color, emoji)
    .then(vendor => {
      res.status(201).send({ message: 'Created!', vendor });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error creating vendor', error: error.message });
    });
};

const getAll = (req, res) => {
  VendorsModel.getAll()
    .then(vendors => {
      if (vendors.length === 0) {
        return res.status(200).send({ message: 'No vendors available!' });
      }

      res.status(200).send({vendors});
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error reading vendors', error: error.message });
    });
};

const getById = (req, res) => {
  const { id } = req.params;

  VendorsModel.getById(id)
    .then(vendor => {
      if (!vendor) {
        return res.status(404).send({ message: 'vendor not found!' });
      }

      res.status(200).send({ message: 'Here is your vendor!', vendor });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error reading vendor', error: error.message });
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
      .send({ message: 'Provide name, color and emoji to update a vendor' });
  }

  const { id } = req.params;

  VendorsModel.update(name, color, emoji, id)
    .then(vendor => {
      if (!vendor) {
        return res.status(404).send({ message: 'vendor not found!' });
      }

      res.status(201).send({ message: 'Updated!', vendor });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error updating vendor', error: error.message });
    });
};

const remove = (req, res) => {
  const { userId } = req.session;
  if (!userId) {
    return res.status(401).send({ message: 'User is not logged in' });
  }

  const { id } = req.params;

  VendorsModel.remove(id)
    .then(() => {
      res.status(204).send();
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error deleting vendor', error: error.message });
    });
};

module.exports = { create, getAll, getById, update, remove };
