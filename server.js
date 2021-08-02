const express = require("express");
const app = exppress();
const port = 5000;

app.use(express.static(__dirname + "/public"))






app.listen(port,() => {
    console.log(`Server running on ${port}`)
});