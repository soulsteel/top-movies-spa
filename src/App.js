import React, { Component } from 'react';
import './App.css';
import MovieList from "./components/MovieList";
import Pagination from "./components/Pagination";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Yet another Movie <span className="strike">Searcher</span> List SPA</h1>
          <h2>Built with<span className="heart">&#x2665;</span> &#38; <span className="about-react"><a href="https://reactjs.org/">React</a></span></h2>
        </header>
        <MovieList />
        <footer>
          Copyright &#169; 2019
        </footer>
      </div>
    );
  }
}

export default App;
