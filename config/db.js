// const mongoose = require("mongoose")

// const connectToDataBase = async() => {
// mongoose.connect(`${process.env.MONGODB_URL}`)

// .then(() => console.log('MongoDB Connected..!'))
// }


// module.exports = connectToDataBase


const mongoose = require('mongoose');
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected...!');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
