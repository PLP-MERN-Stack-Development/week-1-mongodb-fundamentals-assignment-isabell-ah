const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/plp_bookstore';

const connectDb = async () => {
  try {
    await mongoose.connect(uri);
    console.log('MongoDb connected successfully');
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDb;
