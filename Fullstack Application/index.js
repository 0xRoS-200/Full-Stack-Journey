import express from "express";

const app = express();
const port = 3000;

// To establish client-server relation
app.get("/", (req, res) => {
    res.send("Hello Rohit!")
});



