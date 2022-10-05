const { WeddingsModel } = require('../models');

const create = (req, res) => {
  const { userId } = req.session;
  if (!userId) {
    return res.status(401).send({ message: 'User is not logged in' });
  }

  const { name } = req.body;
  if (!name) {
    return res.status(400).send({ message: 'Provide name to create a wedding' });
  }

  WeddingsModel.create(userId, name)
    .then(wedding => {
      res.status(201).send({ message: 'Created!', wedding });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error creating wedding', error: error.message });
    });
};

const getAll = (req, res) => {
  WeddingsModel.getAll()
    .then(weddings => {
      if (weddings.length === 0) {
        return res.status(200).send({ message: 'No weddings available!' });
      }

      res.status(200).send({weddings});
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error reading weddings', error: error.message });
    });
};

const getById = (req, res) => {
  const { id } = req.params;

  WeddingsModel.getById(id)
    .then(wedding => {
      if (!wedding) {
        console.log("get by id", wedding)
        return res.status(404).send({ message: 'wedding not found!' });
      }

      res.status(200).send({ message: 'Here is your wedding!', wedding });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error reading wedding', error: error.message });
    });
};

const update = (req, res) => {

  console.log("req.body", req.body)

  const { userId } = req.session;
  if (!userId) {
    return res.status(401).send({ message: 'User is not logged in' });
  }

  const { name, caterers, decorators, venues, vendors, image_url } = req.body;
  console.log("caterer",caterers)
  if (!name) {
    return res
      .status(400)
      .send({ message: 'Provide name, to update a wedding' });
  }

  const { id } = req.params;

  WeddingsModel.update(id, userId, name, caterers, decorators, venues, vendors, image_url)
    .then(wedding => {
      if (!wedding) {
        return res.status(404).send({ message: 'wedding not found!' });
      }

      res.status(201).send({ message: 'Updated!', wedding });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error updating wedding', error: error.message });
    });
};

const remove = (req, res) => {
  const { userId } = req.session;
  if (!userId) {
    return res.status(401).send({ message: 'User is not logged in' });
  }

  const { id } = req.params;

  WeddingsModel.remove(id)
    .then(() => {
      res.status(204).send();
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error deleting wedding', error: error.message });
    });
};

module.exports = { create, getAll, getById, update, remove };
