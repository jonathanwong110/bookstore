import React, { Component } from 'react'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BooksContainer from './containers/BooksContainer'
import MainNav from './components/navigation/MainNav'
import CartContainer from './containers/CartContainer'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <MainNav/>
          <br></br>
          <Switch>
            <Route exact path="/"> <BooksContainer/> </Route>
            <Route exact path="/books/fiction"> <BooksContainer/> </Route>
            <Route exact path="/books/nonfiction"> <BooksContainer/> </Route>
            <Route exact path="/cart"> <CartContainer/> </Route>
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
