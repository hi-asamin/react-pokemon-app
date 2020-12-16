import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Pokemon } from '../components/pokemon';
import { PokemonList } from '../components/pokemon-list';
import { NotFound } from '../components/not-found';

export const AppRoute = () => {
  return (
    <Router>
      <Switch>
        <Route path={"/"} exact component={PokemonList} />
        <Route path={"/:pokemon"} exact component={Pokemon} />
        <Route path={"/not-found"} exact component={NotFound} />
        <Redirect to={"/not-found"} />
      </Switch>
    </Router>
  );
}