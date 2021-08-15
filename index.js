const express = require('express');
const mongoose = require('mongoose');


//APP
const app = express();

//mongoDB configuration
const db = require("./setup/myurl").mongoURL;

//Attempt to connect DATABASE
mongoose
    .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("MongoDB connected successfully.."))
    .catch(err => console.log(err))


//@route    -   GET /
//@desc     -   a route to home page
//@access   -   PUBLIC
app.get("/", (req,res) => {
    res.send("Hello World!");
});

//PORT
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server is running at ${port}...`));