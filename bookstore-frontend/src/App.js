import React, { Component } from 'react'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BooksContainer from './containers/BooksContainer'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/"> <BooksContainer/> </Route>
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
