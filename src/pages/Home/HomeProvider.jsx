import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';

function HomeProvider() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default HomeProvider;
