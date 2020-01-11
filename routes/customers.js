const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const customers = [
    { id: 1, name: "Jabran" },
    { id: 2, name: "Hamzah" },
    { id: 3, name: "Saif" }
  ];

  res.json(customers);
});

module.exports = router;
