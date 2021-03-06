import React from 'react';
import Provider from './context/Provider';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import HeroesList from './pages/HeroesList';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import AddHero from './pages/AddHero';
import Loading from './components/Loading';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/home" component={Home} />
          <Route path="/details/:id" component={Details} />
          <Route path="/heroes-list" component={HeroesList} />
          <Route path="/profile" component={Profile} />
          <Route path="/add-hero" component={AddHero} />
          <Route path="/loading" component={Loading} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
