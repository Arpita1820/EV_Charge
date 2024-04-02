const express = require("express");
const app = express();
const DbURL = "mongodb+srv://arpita:wWeTvNlQMdIbalA9@cluster0.mo7m6bf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

app.listen(3000, () => {
    console.log("app running on port 3000");
})