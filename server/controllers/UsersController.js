const { UsersModel } = require('../models');

const create = (req, res) => {
  const { userId } = req.session;
  if (!userId) {
    return res.status(401).send({ message: 'User is not logged in' });
  }

  const { name, color, emoji } = req.body;
  if (!name || !color || !emoji) {
    return res
      .status(400)
      .send({ message: 'Provide name, color and emoji to create a user' });
  }

  UsersModel.create(userId, name, color, emoji)
    .then(user => {
      res.status(201).send({ message: 'Created!', user });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error creating user', error: error.message });
    });
};

const getAll = (req, res) => {
  UsersModel.getAll()
    .then(users => {
      if (users.length === 0) {
        return res.status(200).send({ message: 'No users available!' });
      }

      res.status(200).send({ users });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error reading users', error: error.message });
    });
};

const getById = (req, res) => {
  const { id } = req.params;

  UsersModel.getById(id)
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: 'user not found!!!!! Test' });
      }

      res.status(200).send({ message: 'Here is your user!', user });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error reading user', error: error.message });
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
      .send({ message: 'Provide name, color and emoji to update a user' });
  }

  const { id } = req.params;

  UsersModel.update(name, color, emoji, id)
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: 'user not found!' });
      }

      res.status(201).send({ message: 'Updated!', user });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error updating user', error: error.message });
    });
};

const remove = (req, res) => {
  const { userId } = req.session;
  if (!userId) {
    return res.status(401).send({ message: 'User is not logged in' });
  }

  const { id } = req.params;

  UsersModel.remove(id)
    .then(() => {
      res.status(204).send();
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error deleting user', error: error.message });
    });
};

const getProfile = (req, res) => {
  console.log('get profile controller ID')
  const { userId } = req.session;
  
  if (!userId) {
    return res.status(401).send({ message: 'User is not logged in' });
  }
  else {
    UsersModel.getById(userId)
      .then((user) => {
        res.send({user})
      });
  }
};

module.exports = { create, getAll, getById, update, remove, getProfile };
