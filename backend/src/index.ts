import express from "express";

const app = express();

app.use(express.json());

app.delete("/user/:id", (req, res, next) => {
  console.log(req.params.id);

  return res.send("Hello");
});

app.listen(5001, () => console.log("Server Open"));