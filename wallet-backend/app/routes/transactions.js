var express = require('express');
var router = express.Router();
const transactController = require('./../controller/transactionController');


/**
 * Create transaction
 */
router.post('/:id', transactController.createTransaction);

/**
 * Fetch transactions
 */
router.get('/fetch', transactController.fetchTransactions);

module.exports = router;