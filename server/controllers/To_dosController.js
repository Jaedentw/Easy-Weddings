const { To_dosModel } = require('../models');

const create = (req, res) => {
  const { userId } = req.session;
  if (!userId) {
    return res.status(401).send({ message: 'User is not logged in' });
  }

  const { wedding_id, title, checked} = req.body;
  if (!wedding_id || title === null || checked === null) {
    return res
      .status(400)
      .send({ message: 'Please provide all details to create a to_do service' });
  }

  To_dosModel.create(wedding_id, title, checked)
    .then(to_do => {
      res.status(201).send({ message: 'Created!', to_do });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error creating to_do', error: error.message });
    });
};

const getAll = (req, res) => {
  To_dosModel.getAll()
    .then(To_dos => {
      if (To_dos.length === 0) {
        return res.status(200).send({ message: 'No To_dos available!' });
      }

      res.status(200).send({To_dos});
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error reading To_dos', error: error.message });
    });
};

const getById = (req, res) => {
  const { id } = req.params;

  To_dosModel.getById(id)
    .then(to_do => {
      if (!to_do) {
        return res.status(404).send({ message: 'to_do not found!' });
      }

      res.status(200).send({ message: 'Here is your to_do!', to_do });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error reading to_do', error: error.message });
    });
};

const update = (req, res) => {
  const { userId } = req.session;
  if (!userId) {
    return res.status(401).send({ message: 'User is not logged in' });
  }
  const {wedding_id, title, checked} = req.body;
  if (!wedding_id || !title || checked === null) {
    return res
      .status(400)
      .send({ message: 'Provide wedding_id, title and checked to update a to_do' });
  }

  const { id } = req.params;

  To_dosModel.update(id, wedding_id, title, checked)
    .then(to_do => {
      if (!to_do === {id, wedding_id, title, checked}) {
        return res.status(404).send({ message: 'to_do not found!' });
      }
      res.status(201).send({ message: 'Updated!', to_do });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error updating to_do', error: error.message });
    });
};

const remove = (req, res) => {
  const { userId } = req.session;
  if (!userId) {
    return res.status(401).send({ message: 'User is not logged in' });
  }

  const { id } = req.params;

  To_dosModel.remove(id)
    .then(() => {
      res.status(204).send();
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error deleting to_do', error: error.message });
    });
};

module.exports = { create, getAll, getById, update, remove };
