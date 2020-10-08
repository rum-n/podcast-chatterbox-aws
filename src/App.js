import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Hosts from './pages/Hosts';
import Guests from './pages/Guests';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
import Main from './pages/Main';
import Nav from './components/nav/Nav';
// import NewGuest from './components/newGuest/NewGuest';
import GuestPage from './pages/GuestPage';

function App() {

  return (
    <Router>
      <Nav/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/hosts' exact component={Hosts} />
        <Route path='/guests' exact component={Guests} />
        {/* <Route path='/login' exact component={Login} /> */}
        {/* <Route path='/signup' exact component={Signup} /> */}
        <Route path='/main' exact component={Main} />
        {/* <Route path='/add-guest' exact component={NewGuest} /> */}
        <Route path='/main/:id' component={GuestPage}/>
      </Switch>
    </Router>
  );
}

export default App;
