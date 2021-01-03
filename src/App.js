import './App.css';
import Header from './components/layout/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './components/pages/About';
import Products from './components/pages/Products';
import Cart from './components/pages/Cart';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { createRef } from 'react';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div ref={createRef()}>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/products' component={Products} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/cart' component={Cart} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
