const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.status(200).json({ message: "hi from sqweek" });
});

app.listen(3000, () => console.log(`app is listening on port 3000!`));
