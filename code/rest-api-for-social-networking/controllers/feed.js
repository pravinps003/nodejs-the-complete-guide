const { validationResult } = require('express-validator');

const Post = require('../models/post');

exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: '1',
        title: 'First Post',
        content: 'This is the first post!',
        imageUrl: 'images/karma.jpg',
        creator: { name: 'Pravin' },
        createdAt: new Date(),
      },
    ],
  });
};

exports.createPost = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      message: 'Validation failed, entered data is incorrect',
      errors: errors.array(),
    });
  }
  const { title, content } = req.body;
  const post = new Post({
    title,
    imageUrl: 'images/karma.jpg',
    content,
    creator: { name: 'Pravin' },
  });
  post
    .save()
    .then((post) => {
      res.status(201).json({
        message: 'Post created successfully',
        post,
      });
    })
    .catch((err) => console.log(err));
};
