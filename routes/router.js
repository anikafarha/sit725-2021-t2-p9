const express = require("express");
const router = express.Router(); //Initializes a Router...

//Importing Service Layer in Router Layer...
const projectController = require("../controller/controller");
const msgModel = require("../models/msg");

//Uploading our Project list contents on request...
router.post("/msg", (req, res) => {
  let { name, email, msg } = req.body;

  projectController.createSubmit(res);
  res.sendStatus(200);
  res.json({ result: submission });
});

//Exporting all the contents for our script...
module.exports = router;
