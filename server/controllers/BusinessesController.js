const { BusinessesModel } = require('../models');
const bcrypt = require('bcryptjs');

const create = (req, res) => {
  console.log('business: ', req.body);
  const { name, email, phone, country, city, province, postal_code, address, website_url, password } = req.body;
  if (!name || !email || !phone || !country || !city || !province || !postal_code || !address || !website_url || !password) {
    return res
      .status(400)
      .send({ message: 'Provide name, color and emoji to create a business' });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);

  BusinessesModel.create(name, email, phone, country, city, province, postal_code, address, website_url, hashedPassword)
    .then(business => {
      res.status(201).send({ message: 'Created!', business });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error creating business', error: error.message });
    });
};

const getAll = (req, res) => {
  BusinessesModel.getAll()
    .then(businesses => {
      if (businesses.length === 0) {
        return res.status(200).send({ message: 'No businesses available!' });
      }

      res.status(200).send({ businesses });
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
    .then(business => {
      if (!business) {
        return res.status(404).send({ message: 'business not found!' });
      }

      res.status(200).send({ message: 'Here is your business!', business });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error reading business', error: error.message });
    });
};

const update = (req, res) => {
  const { userId } = req.session;
  if (!userId) {
    return res.status(401).send({ message: 'User is not logged in' });
  }

  const { name, email, phone, country, city, province, postal_code, address, website_url, password } = req.body;
  if (!name || !email || !phone || !country || !city || !province || !postal_code || !address || !website_url || !password) {
    return res
      .status(400)
      .send({ message: 'Please provide requierd details for updating your business' });
  }

  const { id } = req.params;
  const hashedPassword = bcrypt.hashSync(password, 10);
  BusinessesModel.update(name, email, phone, country, city, province, postal_code, address, website_url, hashedPassword)
    .then(business => {
      if (!business) {
        return res.status(404).send({ message: 'business not found!' });
      }

      res.status(201).send({ message: 'Updated!', business });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error updating business', error: error.message });
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
        .send({ message: 'Error deleting business', error: error.message });
    });
};


const getProfile = (req, res) => {
  console.log('get profile controller ID')
  const { userId } = req.session;
  
  if (!userId) {
    return res.status(401).send({ message: 'User is not logged in' });
  }
  else {
    BusinessesModel.getById(userId)
      .then((user) => {
        user.isBusiness = true;
        res.send({user})
      });
  }
};

module.exports = { create, getAll, getById, update, remove, getProfile };
