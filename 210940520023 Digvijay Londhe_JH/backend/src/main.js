const express = require("express");
const app = express();
app.use(express.json());

const {addMessage} = require("./user");
app.get("/add-message", (req, res) => {
    const obj = {message : "This is get request"};
    res.json(obj); 
})

app.post("/post-message", (req, res) => {
    console.log(req.body);
})
app.listen(4000, () => {console.log("Server started....")});
