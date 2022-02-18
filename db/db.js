const MongoClient = require("mongodb").MongoClient;

//Establishing a Database Connection using MongoDB...
const uri = "mongodb+srv://anika123:anika123@cluster0.vxql7.mongodb.net/project-pitch?retryWrites=true&w=majority";
const client = new MongoClient(
  uri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  { connectTimeoutMS: 30000 },
  { keepAlive: 1 }
);

//Creating a collection for our MongoDB...
let submitCollection;

client.connect((err, db) => {
  //projectsCollection = client.db("RoboticsHut").collection("projects");
  if (!err) {
    console.log("DB Connected");
  } else {
    console.log("ERROR: ", err);
  }
});

module.exports = client;
