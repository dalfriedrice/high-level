const db = require("./../config/db.config");

exports.getWallets = (_, res) => {
    const sql = "SELECT * FROM wallet";
    db.query(sql, (err, data) => {
        if (err) {
            res.status(500).send({ 'error': `OOPS! Something went wrong : ${err}` });
        }
        res.json(data);
    });
}

exports.getWalletById = (req, res) => {
    const id = req.params.id;
    const sql = `SELECT * FROM wallet WHERE wallet_id = ${id}`;
    db.query(sql, (err, data) => {
        if (err) {
            res.status(500).send({ 'error': `OOPS! Something went wrong : ${err}` });
        }
        res.json(data);
    });
}

exports.createWallet = (req, res) => {
    const name = req.body.wallet_name;
    const balance = req.body.balance;
    const date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const sql = `INSERT INTO wallet (wallet_name, opening_bal, creation_date) VALUES ("${name}", "${balance}", "${date}")`;
    db.query(sql, (err, data) => {
        console.log('Data',data, err);
        if (err) {
            res.status(500).send({ 'error': `OOPS! Something went wrong : ${err}` });
        }
        res.json({
            "status": "Nice! Wallet Successfully created",
            "statusCode": 200,
            "reponse": {
                "id" : data.insertId,
                "opening_bal" : req.body.balance,
                "name" : req.body.wallet_name,
                date
            }
        });
    });
}
