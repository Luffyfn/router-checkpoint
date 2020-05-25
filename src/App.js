import React from 'react';
import NavContainer from './NavContainer';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './NavList/Home';
import Category from './NavList/Category';
import Products from './NavList/Products';
import AdminArea,{fakeAuth} from './NavList/AdminArea';
import Admin from './NavList/Admin';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        
        <NavContainer/>
        
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/Category" component={Category}/>
            <Route path="/Products" component={Products}/>
            <Route path="/AdminArea" component={AdminArea}/>
            <Admin authentification ={fakeAuth.isAuthenticated} path="/admin" component={Admin}/>
          </Switch>
          
      </BrowserRouter>

    </div>
  );
}

export default App;
