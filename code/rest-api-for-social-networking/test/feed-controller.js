const { expect } = require('chai');
const sinon = require('sinon');
const mongoose = require('mongoose');

const User = require('../models/user');
const FeedController = require('../controllers/feed');

describe('Feed Controller', () => {
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

  it('should add a created post to the posts of the creator', (done) => {
    const req = {
      body: {
        title: 'Test Post',
        content: 'A Test Post Content',
      },
      file: {
        path: 'test-post-image-path',
      },
      userId: '5c0f66b979af55031b34728a',
    };

    const res = {
      status: function () {
        return this;
      },
      json: () => {},
    };

    FeedController.createPost(req, res, () => {})
      .then((savedUser) => {
        expect(savedUser).to.have.property('posts');
        expect(savedUser.posts).to.have.length(1);
        done();
      })
      .catch((err) => {
        done(err);
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
