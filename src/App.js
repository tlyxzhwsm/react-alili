import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/popular.js';
import Catalog from './pages/catalog.js';
import Latest from './pages/latest.js';
import User from './pages/user.js';
import Login from './pages/login.js';

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/catalog" component={Catalog} />
        <Route path="/latest" component={Latest} />
        <Route path="/user" component={User} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
