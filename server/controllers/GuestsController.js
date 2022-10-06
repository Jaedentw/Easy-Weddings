const { GuestsModel } = require('../models');

const create = (req, res) => {
  const { userId } = req.session;
  if (!userId) {
    return res.status(401).send({ message: 'User is not logged in' });
  }

  const { wedding_id, name, value} = req.body;
  if (!wedding_id || name === null || !value ) {
    return res
      .status(400)
      .send({ message: 'Please provide all details to create a guest service' });
  }

  GuestsModel.create(wedding_id, name, confirmed, value, plus_one )
    .then(guest => {
      res.status(201).send({ message: 'Created!', guest });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error creating decorator', error: error.message });
    });
};

const getAll = (req, res) => {
  GuestsModel.getAll()
    .then(guests => {
      if (guests.length === 0) {
        return res.status(200).send({ message: 'No guests available!' });
      }

      res.status(200).send({guests});
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error reading guests', error: error.message });
    });
};

const getById = (req, res) => {
  const { id } = req.params;

  GuestsModel.getById(id)
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
        .send({ message: 'Error reading guest', error: error.message });
    });
};

const update = (req, res) => {
  const { userId } = req.session;
  if (!userId) {
    return res.status(401).send({ message: 'User is not logged in' });
  }

  const { wedding_id, name, value, confirmed, plus_one } = req.body;
  if (!wedding_id || !value || name === null) {
    return res
      .status(400)
      .send({ message: 'Provide all details to update a guest' });
  }

  const { id } = req.params;

  GuestsModel.update(wedding_id, name, confirmed, value, plus_one, id)
    .then(guest => {
      if (!guest === {wedding_id, name, confirmed, value, plus_one, id}) {
        return res.status(404).send({ message: 'guest not found!' });
      }
      res.status(201).send({ message: 'Updated!', guest });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error updating guest', error: error.message });
    });
};

const remove = (req, res) => {
  const { userId } = req.session;
  if (!userId) {
    return res.status(401).send({ message: 'User is not logged in' });
  }

  const { id } = req.params;

  GuestsModel.remove(id)
    .then(() => {
      res.status(204).send();
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error deleting guest', error: error.message });
    });
};

module.exports = { create, getAll, getById, update, remove };
