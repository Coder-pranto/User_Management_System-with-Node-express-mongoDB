const mongoose = require('mongoose');
const URI = process.env.MONGO_URI_ONLINE || process.env.MONGO_URI;


mongoose
.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })

  .then((res) =>
    console.log(`> Database Connected successfully...${res.connection.host}`) 
  )
  .catch((err) =>
   {
    console.log(`> Error while connecting to mongoDB : ${err.message}`) 
      process.exit(1);
   }
  );
