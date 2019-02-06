import React, { Component } from 'react';
import './App.css';
import MovieList from "./components/MovieList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MovieList />
      </div>
    );
  }
}

export default App;
