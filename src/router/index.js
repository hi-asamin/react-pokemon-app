import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Pokemon } from '../components/pages/pokemon';
import { PokemonList } from '../components/pages/pokemon-list';
import { NotFound } from '../components/pages/not-found';

import Container from '@material-ui/core/Container';
import { Header } from '../components/util/header';

export const AppRoute = () => {
  return (
    <Router>
      <Header />
      <Container maxWidth="md" style={{ paddingTop: "1rem" }}>
        <Switch>
        <Redirect exact path="/" to={"/pokemon"} />
          <Route exact path="/pokemon" component={PokemonList} />
          <Route exact path="/pokemon/:pokemon" component={Pokemon} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </Container>
    </Router>
  );
}