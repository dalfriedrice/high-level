const db = require("./../config/db.config");

function getLatestTransaction(walletId) {
    const sql = `Select current_bal from transaction  where wallet_id = ${walletId} ORDER BY t_date DESC LIMIT 1`
    return new Promise((resolve, reject) => {
        db.query(sql, (err, data) => {
            if (data && data.length) {
                resolve(data[0].current_bal);
            } else {
                resolve(0);
            }
            reject(err);
        })
    })

}

function getOpeningBalance(walletId) {
    const sql = `Select opening_bal from wallet where wallet_id = ${walletId}`;
    return new Promise((resolve, reject) => {
        db.query(sql, (err, data) => {
            if (data && data.length) {
                resolve(data[0].opening_bal);
            } else {
                resolve(0);
            }
            reject(err);
        })
    })

}

function createTransactionQuery (req, res, bal){
    const walletId = req.params.id;
    const amount = parseFloat(req.body.amount);
    const desc = req.body.desc;
    const tType = amount > 0 ? 'Credit' : 'Debit';
    const date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const sql = `INSERT INTO transaction (wallet_id, t_amount, current_bal, t_desc, t_date, t_type) VALUES ("${walletId}", "${amount}", "${bal}", "${desc}", "${date}", "${tType}")`;
        db.query(sql, (err, data) => {
            if (err) {
                res.status(500).send({ 'error': `OOPS! Something went wrong ${err}` });
            }
            res.json({
                "status": "Nice! Wallet balance successfully updated",
                "statusCode": 200,
                "reponse": {
                    "id" : data.insertId,
                    "current_bal" : bal
                }
            });
        });
}


exports.createTransaction = async (req, res) => {

    const walletId = req.params.id;
    const amount = parseFloat(req.body.amount);
    let updatedBal = 0;
    getLatestTransaction(walletId).then((res1) => {
        if (res1) {
            updatedBal = parseFloat(res1) + amount;
            return createTransactionQuery(req, res, updatedBal);
        } else {
            getOpeningBalance(walletId).then(res2 => {
                if (res2) {
                    updatedBal = parseFloat(res2) + amount;
                    return createTransactionQuery(req, res, updatedBal);
                }
            }).catch(err => {
                throw err;
            })
        }
    }).catch(err => {
        throw err;
    });


}

exports.fetchTransactions = (req, res) => {
    const id = req.query.walletId;
    const limit = req.query.limit;
    const sql = limit ? `Select t_id, wallet_id, t_amount, current_bal, t_date, t_type from transaction where wallet_id = ${id} LIMIT ${limit};` : `Select t_id, wallet_id, t_amount, current_bal, t_date, t_type from transaction where wallet_id = ${id}`;
    db.query(sql, (err, data) => {
        if (err) {
            res.status(500).send({ 'error': `OOPS! Something went wrong : ${err}` });
        }
        res.json(data);
    });
}
