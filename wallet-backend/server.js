const express = require("express");
const cors = require("cors");
const walletRouter = require('./app/routes/wallets');
const transactionsRouter = require('./app/routes/transactions');

const app = express();

var allowedDomains = ['https://wallet-frontend-heroku.herokuapp.com', 'http://localhost:8081'];

app.use(cors({
  origin: function (origin, callback) {
    // bypass the requests with no origin (like curl requests, mobile apps, etc )
    if (!origin) return callback(null, true);
 
    if (allowedDomains.indexOf(origin) === -1) {
      var msg = `This site ${origin} does not have an access. Only specific domains are allowed to access it.`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

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
