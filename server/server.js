const express = require("express");
const app = express();

app.get("/api", (req, res) => {
    res.json({"users":["users1","user2","user3"]})
})

const PORT = 4000

app.listen (PORT, () => {
    console.log('Server started on port' + PORT)
})