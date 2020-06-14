import React, { Component } from 'react'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BooksContainer from './containers/BooksContainer'
import MainNav from './components/navigation/MainNav'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <MainNav/>
          <Switch>
            <Route exact path="/"> <BooksContainer/> </Route>
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
