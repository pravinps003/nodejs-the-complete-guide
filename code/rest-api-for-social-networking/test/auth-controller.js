const { expect } = require('chai');
const sinon = require('sinon');
const mongoose = require('mongoose');

const User = require('../models/user');
const AuthController = require('../controllers/auth');

describe('Auth Controller - Login', () => {
  it('it should throw an error with code if accessing the database fails', (done) => {
    sinon.stub(User, 'findOne');
    User.findOne.throws();

    const req = {
      body: {
        email: 'ps003@ps003.com',
        password: 'ps003',
      },
    };

    AuthController.login(req, {}, () => {}).then((result) => {
      expect(result).to.be.an('error');
      expect(result).to.have.property('statusCode', 500);
      done();
    });

    User.findOne.restore();
  });

  it('should send a response with a valid user status for an existin user', (done) => {
    mongoose
      .connect(
        'mongodb+srv://ps003:mongops003@cluster0.rcwfq.mongodb.net/test-messages?retryWrites=true&w=majority'
      )
      .then((result) => {
        const user = new User({
          email: 'ps003@ps003.com',
          password: 'ps003',
          name: 'PS003',
          posts: [],
        });
        return user.save();
      })
      .then(() => {})
      .catch((err) => console.log(err));
  });
});
