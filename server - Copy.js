const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const { MongoClient, ServerApiVersion } = require('mongodb');
//const bodyParser = require("body-parser");
//app.use(bodyParser.json({limit: '100kb'}));

//require('dotenv').config();
const uri = "mongodb+srv://vbdb:tetraxi123@cluster0.rsagvma.mongodb.net/?retryWrites=true&w=majority";

require('dotenv').config({ path: './.env' });

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({limit: '500kb'}));

//const uri = process.env.ATLAS_URI;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true,});


const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

//async function run() {
//  try {
//    // Connect the client to the server	(optional starting in v4.7)
//    await client.connect();
//    // Send a ping to confirm a successful connection
//    await client.db("Cluster0").command({ ping: 1 });
//    console.log("MongoDB database connection established successfully");
//  } finally {
//    // Ensures that the client will close when you finish/error
//    await client.close();
//  }
//}
//run().catch(console.dir);



const user = require('./user');
const admin = require('./admin');
const weed = require('./weed');

app.use('/user',user);
app.use('/admin',admin);
app.use('/weed',weed);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

//----------------------------------------------------

//const bodyParser = require("body-parser");
//app.use(bodyParser.json({limit: '100kb'}));

//require('dotenv').config({ path: './.env' });

/* old
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({limit: '500kb'}));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true,});


const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const user = require('./user');


app.use('/user', user);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
*/

