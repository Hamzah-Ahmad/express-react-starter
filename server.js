const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.use("/customers", require("./routes/customers"));

app.get("/", (req, res) => {
  res.send("Root path");
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
