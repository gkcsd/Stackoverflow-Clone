const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//bring all the routes
const auth = require("./routes/api/auth");
const profile = require("./routes/api/profile");
const questions = require("./routes/api/questions");

//APP
const app = express();

//Middleware for body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//mongoDB configuration
const db = require("./setup/myurl").mongoURL;

//Attempt to connect DATABASE
mongoose
    .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("MongoDB connected successfully.."))
    .catch(err => console.log(err))


//@route    -   GET /
//@desc     -   just for testing
//@access   -   PUBLIC
app.get("/", (req,res) => {
    res.send("Hello World!");
});

//actual routes
app.use("/api/auth", auth);
app.use("/api/profile", profile);
app.use("/api/questions", questions);

//PORT
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server is running at ${port}...`));