const Stripe = require("stripe");
const stripe = Stripe("TWÓJ_SECRET_KEY");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let state = {
  energy: 287,
  logs: ["artifact initialized"],
};

app.get("/state", (req, res) => {
  res.json(state);
});

app.post("/donation", (req, res) => {
  const amount = req.body.amount || 1;

  state.energy += amount;
  state.logs.unshift(`donation received +${amount}`);

  res.json({ ok: true });
});

app.listen(3001, () => {
  console.log("Artifact backend running on http://localhost:3001");
});