import React from 'react';
import './App.css';
import CustomLayout from './containers/Layout'
import {Switch, Route } from 'react-router-dom'
import MoviesList from './components/MoviesList'
import Movie from './components/Movie';

function App() {
  return (
    <div className="App">
      <CustomLayout>
        <Switch>
          <Route exact path='/' component={MoviesList}/>
          <Route exact path='/details' component={Movie}/>
        </Switch>
      </CustomLayout>
    </div>
  );
}

export default App;
