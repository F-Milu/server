import dotenv from "dotenv";
dotenv.config();

import express from "express";
let app = express();

app.get("/" , (req, res) => {
    res.send("Működik");
});

app.listen(8080, () => {
    console.log("Listening on port 8080");
});



