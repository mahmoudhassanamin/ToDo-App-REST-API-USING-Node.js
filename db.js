const mongoose = require("mongoose");


module.exports=()=> mongoose.connect(process.env.connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((error) => {
    console.log('error in MongoDB Atlas');
    throw error;
  });
