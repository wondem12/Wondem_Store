import { Route, Switch } from "react-router-dom";
import React from 'react';
import NavBar from './Components/NavBar';
import Cart from "./Components/Cart/Cart";
import Footer from './Components/Footer';
import ProductList from './Components/ProductList';
import NotFound from "./Components/notFound";
import Model from "./Components/Model";
import Login from "./Components/Login";
import Register from "./Components/Register";
import About from "./Components/About";
import './App.css';

function App() {
  return (
    <React.Fragment>
    <NavBar />
    <main className="container">
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/cart" component={Cart} />
        <Route path="/About" component={About} />
        <Route path="/Login" component={Login} />
        <Route path="/Register" component={Register} />
        <Route component={NotFound} />
      </Switch>
      <Model />
    </main>
    <Footer/>
  </React.Fragment>
  );
}

export default App;
