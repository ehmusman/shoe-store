import './App.css';
import Header from './components/layout/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import StoreState from './Context/StoreState'
import Footer from './components/layout/Footer';
import ProductsData from './components/products/ProductsData';
import CartData from './components/cart/CartData';
import Rest from './Rest'
function App() {
  return (
    <StoreState>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/products' component={ProductsData} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/cart' component={CartData} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
      {/* <Rest /> */}
    </StoreState>
  );
}

export default App;
