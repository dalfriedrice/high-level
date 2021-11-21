# Wallet Frontend - High Level

This project is all about showing the UI to perform CRUD operations related to wallet and transaction on UI.
This is a react based project having five pages
* All the created wallets
* All the transaction related to a wallet
* Create a new wallet
* Create a new transaction for a given wallet
* An error page in case if someone enters wrong route

---

## Local Set up

* Clone the repo on local
* npm install
* npm start

> **_NOTE:_** Make sure you have the MY SQL database setup on your local and then you can change the credentials in this [file](/app/config/db.config.js).
> Also please have nodejs & npm installed on your local

---

## Additional Features

* This app has pagination enabled for a long list
* You can download a CSV for all the wallets as well as all the transactions
* Succes, error and info are displayed using toastr
* There are buttons on all the four pages for redirections
