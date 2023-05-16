const mongoose = require('mongoose');
const URI = process.env.MONGO_URI_ONLINE || process.env.MONGO_URI;


const conncectDB = async()=>{
   await mongoose
    .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res) =>
      console.log(`> Connected successfully...${res.connection.host}`)
    )
    .catch((err) =>
     {
      console.log(`> Error while connecting to mongoDB : ${err.message}`) 
        process.exit(1);
     }
    );
}

module.exports = conncectDB;

/* in server.js file u have to write down below code:

const connectDB = require('./server/database/connection_alt');
connectDB();

*/