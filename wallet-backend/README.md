# Wallet Backend - High Level

This project consist of all api's to perform CRUD operations related to wallets and transactions

---

## Local Set up

* Clone the repo on local
* npm install
* npm start

> **_NOTE:_** Make sure you have the MY SQL database setup on your local and then you can change the credentials in this [file](/app/config/db.config.js), will add a mysql-dump file as well for make it easy to setup
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

---

# Database
Dropped a [file](Dump20211122.sql) for mysql dump of the database used by me to work on the app.

One can use any GUI tool like `mysql workbench` to import the same database on the local and get started with the working.

Reference video -> https://www.youtube.com/watch?v=uyP46E0UA9I&ab_channel=CodeJava

# Postman Collection
https://www.getpostman.com/collections/2a7a5f0e88641858c7e3

# Heroku Url
https://wallet-db-heroku.herokuapp.com/

# Demo-Video

https://user-images.githubusercontent.com/12258467/142848320-937b618f-83e1-44d5-970d-1b3f7b50bf76.mp4



