import React, { Component } from 'react'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BooksContainer from './containers/BooksContainer'
import MainNav from './components/navigation/MainNav'
import CartContainer from './containers/CartContainer'
import HomeContainer from './containers/HomeContainer'
const NotFound = () => (<div className="emptyPage">This page is not available</div>)

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <MainNav />
          <br></br>
          <br></br>
          <br></br>
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route exact path="/books" component={BooksContainer} />
            <Route exact path="/books/category/:category" component={BooksContainer} />
            <Route exact path="/cart" component={CartContainer} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App