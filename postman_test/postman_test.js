const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const fs = require("fs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Read all items
app.get("/items", (req, res) => {
  fs.readFile("./items.json", "utf-8", (err, data) => {
    res.send(JSON.parse(data));
  });
});

// Read one item
app.get("/items/:id", (req, res) => {
  fs.readFile("./items.json", "utf-8", (err, data) => {
    const items = JSON.parse(data);
    const item = items.find((i) => i.id === parseInt(req.params.id));
    res.send(item);
  });
});

// Create an item
app.post("/items", (req, res) => {
  console.log(req.body);
  fs.readFile("./items.json", "utf-8", (err, data) => {
    let items = [];
    try {
      items = JSON.parse(data);
    } catch (err) {
      console.log(err);
    }
    const item = {
      id: items.length + 1,
      name: req.body.name,
    };
    items.push(item);
    fs.writeFile("./items.json", JSON.stringify(items), "utf-8", (err) => {
      res.send(item);
    });
  });
});

// Update an item
app.put("/items/:itemId", (req, res) => {
  fs.readFile("./items.json", "utf-8", (err, data) => {
    let items = JSON.parse(data);
    const item = items.find((i) => i.id === parseInt(req.params.itemId));
    item.name = req.body.name;
    fs.writeFile("./items.json", JSON.stringify(items), "utf-8", (err) => {
      res.send(item);
    });
  });
});

// Delete an item
app.delete("/items/:id", (req, res) => {
  fs.readFile("./items.json", "utf-8", (err, data) => {
    let items = JSON.parse(data);
    items = items.filter((i) => i.id !== parseInt(req.params.id));
    fs.writeFile("./items.json", JSON.stringify(items), "utf-8", (err) => {
      res.send({ message: "Item deleted" });
    });
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
