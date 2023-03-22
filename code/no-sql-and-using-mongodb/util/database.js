const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect(
    'mongodb+srv://ps003:mongops003@cluster0.rcwfq.mongodb.net/?retryWrites=true&w=majority'
  )
    .then((client) => {
      console.log('Connected');
      callback(client);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = mongoConnect;
