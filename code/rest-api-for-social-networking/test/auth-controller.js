const { expect } = require('chai');
const sinon = require('sinon');
const mongoose = require('mongoose');

const User = require('../models/user');
const AuthController = require('../controllers/auth');

describe('Auth Controller', () => {
  before((done) => {
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
          _id: '5c0f66b979af55031b34728a',
        });
        return user.save();
      })
      .then(() => {
        done();
      });
  });

  beforeEach(() => console.log('Running before each test case'));

  afterEach(() => console.log('Running after each test case'));

  it('should throw an error with code if accessing the database fails', (done) => {
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

  it('should send a response with a valid user status for an existing user', (done) => {
    const req = { userId: '5c0f66b979af55031b34728a' };
    const res = {
      statusCode: 500,
      userStatus: null,
      status: function (code) {
        this.statusCode = code;
        return this;
      },
      json: function (data) {
        this.userStatus = data.status;
      },
    };
    AuthController.getUserStatus(req, res, () => {}).then(() => {
      expect(res.statusCode).to.be.equal(200);
      expect(res.userStatus).to.be.equal('I am new!');
      done();
    });
  });

  after((done) => {
    User.deleteMany({})
      .then(() => {
        return mongoose.disconnect();
      })
      .then(() => {
        done();
      });
  });
});
