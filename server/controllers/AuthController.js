const bcrypt = require('bcryptjs');

const { AuthModel, UsersModel } = require('../models');

const register = (req, res) => {
  const { first_name, last_name, country, province, city, address, postal_code, email, phone, password } = req.body;
  if (!email || !password || !first_name || !last_name, !country || !province || !city || !address || !postal_code || !phone) {
    return res
      .status(400)
      .send({ message: 'Please provide all details requierd!' });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);

  AuthModel.register(first_name, last_name, country, province, city, address, postal_code, email, phone, hashedPassword)
    .then(user => {
      res.status(201).send({ message: 'User registered successfully!', user });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error creating user', error: error.message });
    });
};

const login = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send({ message: 'Provide email and password' });
  }

  AuthModel.login(email)
    .then(user => {
      if (user) {
        const passwordsMatch = bcrypt.compareSync(password, user.password);
        if (!passwordsMatch) {
          return res.status(401).send({ message: 'Invalid credentials!' });
        }


        req.session.userId = user.id;
        delete user.password;
        res.status(200).send({ message: 'User logged in successfully!', user });
      }
      
      else {
        AuthModel.businessLogin(email)
          .then(user => {
            const passwordsMatch = bcrypt.compareSync(password, user.password);
            if (!passwordsMatch) {
              return res.status(401).send({ message: 'Invalid credentials!' });
            }


            req.session.userId = user.id;
            delete user.password;
            user.isBusiness = true;
            console.log('user object for business: ',user)
            res.status(200).send({ message: 'User logged in successfully!', user });
          });
      }
      
    });


};

const logout = (req, res) => {
  req.session = null;
  res.status(200).send({ message: 'User successfully logged out' });
};

module.exports = { register, login, logout };
