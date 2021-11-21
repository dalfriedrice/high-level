# Wallet Backend - High Level

This project consist of all api's to perform CRUD operations related to wallets and transactions

---

## Local Set up

* Clone the repo on local
* npm install
* npm start

> **_NOTE:_** Make sure you have the MY SQL database setup on your local and then you can change the credentials in this [file](/app/config/db.config.js).
> Also please have nodejs & npm installed on your local

---

## Api's

There are total of 5 api's that are used here in this app
| Api Endpoints | Method        |Description  |
| :------------- |:-------------| :-----|
| /wallet      | GET | Get all the wallets |
| /wallet/{:id}      | GET      |   Get all the details of wallet for the wallet id |
| /wallet/setup | POST      |    Creates a new wallet in the wallet table |
| /transaction/{:id}      | POST      |   Create a new transaction for the wallet id |
| /transaction/fetch?walletId={id}&limit={limit} | GET | Get all the transactions related to given wallet id