const { PersonnelsModel } = require('../models');

const create = (req, res) => {
  const { userId } = req.session;
  if (!userId) {
    return res.status(401).send({ message: 'User is not logged in' });
  }

  const { name, color, emoji } = req.body;
  if (!name || !color || !emoji) {
    return res
      .status(400)
      .send({ message: 'Please provide all details to create a personnel service' });
  }

  PersonnelsModel.create(userId, name, color, emoji)
    .then(personnel => {
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
  PersonnelsModel.getAll()
    .then(Personnels => {
      if (Personnels.length === 0) {
        return res.status(200).send({ message: 'No Personnels available!' });
      }

      res.status(200).send({Personnels});
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error reading Personnels', error: error.message });
    });
};

const getById = (req, res) => {
  const { id } = req.params;

  PersonnelsModel.getById(id)
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
        .send({ message: 'Error reading personnel', error: error.message });
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
      .send({ message: 'Provide name, color and emoji to update a personnel' });
  }

  const { id } = req.params;

  PersonnelsModel.update(name, color, emoji, id)
    .then(personnel => {
      if (!personnel) {
        return res.status(404).send({ message: 'personnel not found!' });
      }

      res.status(201).send({ message: 'Updated!', personnel });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error updating personnel', error: error.message });
    });
};

const remove = (req, res) => {
  const { userId } = req.session;
  if (!userId) {
    return res.status(401).send({ message: 'User is not logged in' });
  }

  const { id } = req.params;

  PersonnelsModel.remove(id)
    .then(() => {
      res.status(204).send();
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error deleting personnel', error: error.message });
    });
};

module.exports = { create, getAll, getById, update, remove };
