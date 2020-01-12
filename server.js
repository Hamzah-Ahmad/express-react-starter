const express = require("express");
const app = express();
const config = require("config");
const bodyParser = require("body-parser");

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

//The following code block can be used to connect to a mongoDB database. The URI is saved in the default.json file inside the config folder
//const mongoURI = config.get("mongoURI");
// mongoose
// .connect(mongoURI, {
//   useNewUrlParser: true,
//   useCreateIndex: true
// })
// .then(() => console.log("Connected to MongoDB"))
// .catch(err => console.log("Error in connecting to DB: " + err));

app.use("/customers", require("./routes/customers"));

app.get("/", (req, res) => {
  res.send("Root path");
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
