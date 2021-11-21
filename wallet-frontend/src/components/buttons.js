import React from 'react';
import { useHistory } from 'react-router-dom';
import { Pages } from './../constants/constant';


const RenderButtons = (component, walletId) => {

    let history = useHistory();

    const redirect = (path, id) => {
        id ? history.push(`${path}/${id}`) : history.push(path);
    }

    const NewWalletBtn = () => <button onClick={() => redirect("/wallet/create")} className="redirect-btn" >New Wallet</button>
    const NewTransactionBtn = (walletId) => <button onClick={() => redirect("/wallet/transact", walletId)} className="redirect-btn">New Transaction</button>
    const HomeBtn = () => <button onClick={() => redirect("/wallet")} className="redirect-btn">Home</button>
    const WalletDetailsBtn = (walletId) => <button onClick={() => redirect("/wallet", walletId)} className="redirect-btn">Go to Transactions</button>

    switch (component) {
        case Pages.Wallet_list:
            return <div className="redirection-btns">
                {NewWalletBtn()}
            </div>
        case Pages.Create_Wallet:
            return <div className="redirection-btns">
                {HomeBtn()}
            </div>
        case Pages.Create_Transaction:
            return <div className="redirection-btns">
                {HomeBtn()}
                {WalletDetailsBtn(walletId)}
            </div>
        case Pages.Wallet_Details:
            return <div className="redirection-btns">
                {HomeBtn()}
                {NewTransactionBtn(walletId)}
            </div>
        case Pages.Error_Page:
            return <div className="redirection-btns">
                {HomeBtn()}
            </div>
    }
}

export default RenderButtons;