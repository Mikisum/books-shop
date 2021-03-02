import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CartPage } from '../pages';
import HomePage from '../pages/home-page';
import { withBookstoreService } from '../hoc'

import './app.css';
import ShopHeader from '../shop-header';

const App = ({ bookstoreService }) => {
  return (
    <main role="main" className="container">
    <ShopHeader numItems={5} total={210}/>
    <Switch>
      <Route path = "/"
        component={HomePage}
        exact/>
      <Route 
        path="/cart"
        component={CartPage}/>
    </Switch>
    </main>
  )
}

export default withBookstoreService()(App);