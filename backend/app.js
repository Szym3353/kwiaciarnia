const express = require("express");
const fs = require("fs");
const cors = require("cors"); // Zainstaluj: npm install cors
const app = express();

app.use(cors());
app.use(express.json());

// Endpoint pobierający dane z "bazy"
app.get("/api/products", (req, res) => {
  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) return res.status(500).send("Błąd bazy");
    res.send(JSON.parse(data));
  });
});

app.listen(3000, () => console.log("Backend kwiaciarni na porcie 3000"));
