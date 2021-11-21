const express = require('express');
const router = express.Router();
const walletController = require('./../controller/walletController');


/**
 * Get Wallets
 */

router.get('/', walletController.getWallets);

/**
 * Get wallet details by id
 */
router.get('/:id', walletController.getWalletById);

/**
 * Create a wallet
 */
router.post('/setup', walletController.createWallet);

module.exports = router;