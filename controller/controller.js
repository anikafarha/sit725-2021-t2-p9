let dbo = require("../db/db");
let submitCollection;

let submission = [];
const getAllMsg = (res) => {
  //A Function to retrieve all the messagaes...
  projectsCollection.find().toArray(function (err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
  res.send(projectList);
  return projectList;
};

const createSubmit = (data, res) => {
  //Insert a project into the DB collection...
  submitCollection.insertOne(submit, (err, result) => {
    if (err) throw err;
    //Adding contents into an array...
    submission.push(data);
    console.log("Msg Inserted", result);
  });
};

module.exports = {
  getAllMsg,
  createSubmit,
};
