import './App.css';
import React from 'react';
import Header from './components/header';
import WalletDetails from './components/walletDetails';
import CreateWallet from './components/createWallet';
import WalletList from './components/walletList';
import CreateTransaction from './components/createTransaction';
import ErrorPage from './components/errorPage';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <section className="high-level">
      <Router>
        <Header />
        <div className="main-content">
          <Switch>
            <Route path="/" exact >
              <Redirect to="/wallet" />
            </Route>
            <Route path="/wallet" exact component={WalletList} />
            <Route path="/wallet/create" exact component={CreateWallet} />
            <Route path="/wallet/:walletId" exact component={WalletDetails} />
            <Route path="/wallet/transact/:walletId" exact component={CreateTransaction} />
            <Route component={ErrorPage} />
          </Switch>
        </div>
      </Router>
    </section>
  );
}

export default App;
