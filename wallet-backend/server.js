const express = require("express");
const cors = require("cors");
const walletRouter = require('./app/routes/wallets');
const transactionsRouter = require('./app/routes/transactions');

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use('/wallet', walletRouter);
app.use('/transaction', transactionsRouter);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Wallet application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});