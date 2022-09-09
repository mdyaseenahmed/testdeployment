const express = require('express');

const app = express();
var cors = require('cors');
const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use(cors());

app.use(express.static("public"))
app.get("/", function (req, res) {
    res.send("Hello World.!");
})

app.listen(PORT, function (req, res) {
    console.log("listening on port"+PORT);
})