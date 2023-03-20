let express = require("express");
let mongoose = require("mongoose");
let bodyparser = require("body-parser");
let app = express();

const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(bodyparser.json());

// sample db on our local docker network
const mongoURI = "mongodb://172.17.0.2:27017/btcDB";
mongoose.connect(mongoURI);

let mySchema = new mongoose.Schema({
  name: String,
  department: String,
  salary: Number,
});

let employees = mongoose.model("employees", mySchema);

async function showRecords(req, res) {
  try {
    let listOfEmployees = await employees.find().where("salary").gte(1700);
    console.log(listOfEmployees);
    res.send(listOfEmployees);
  } catch (err) {
    res.send(500, err);
  }
}

async function showRecords5(req, res) {
  try {
    let listOfEmployees = await employees.find({ name: req.params.name });
    console.log(listOfEmployees);
    res.send(listOfEmployees);
  } catch (err) {
    res.send(500, err);
  }
}

async function allRecords(req, res) {
  try {
    let listOfEmployees = await employees.find();
    console.log(listOfEmployees);
    res.send(listOfEmployees);
  } catch (err) {
    res.send(500, err);
  }
}

async function saveRecord(req, res) {
  console.log(req.body);
  employees.create(req.body);
  res.send("done");
}

async function deleteRecord(req, res) {
  try {
    await employees.deleteOne({ name: req.params.name });
    res.send("ok");
  } catch (err) {
    res.send(500, err);
  }
}

app.get("/allRecords", allRecords);
app.get("/showRecords", showRecords);
app.get("/showRecords5/:name", showRecords5);
app.post("/saveRecord", saveRecord);
app.delete("/deleteRecord/:name", deleteRecord);

app.listen(8009);
