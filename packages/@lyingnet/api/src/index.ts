import express from "express";

const app = express();

app.get("/rest", (req, res) => {
  res.status(200).json({
    sup: "playa",
  });
});

app.listen({ port: 3000 });
