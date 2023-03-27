exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: '1',
        title: 'First Post',
        content: 'This is the first post!',
        imageUrl: 'images/karma.jpg',
        creator: {
          name: 'Pravin',
        },
        createdAt: new Date(),
      },
    ],
  });
};

exports.createPost = (req, res, next) => {
  const { title, content } = req.body;
  // Create Post in DB
  res.status(201).json({
    message: 'Post created successfully',
    post: { id: new Date().toISOString(), title, content },
  });
};
