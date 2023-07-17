const mongoose = require("mongoose");


module.exports=()=> {
  console.log(process.env.connectionString)
  return mongoose.connect(process.env.connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((error) => {
    console.log('error in MongoDB Atlas');
    throw error;
  })
  
}
