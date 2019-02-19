import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dummy: dummyData
    };
  }

  render() {
    return (
      <div className="App">
        <SearchBar/>
        <PostContainer dummy={this.state.dummy} />
      </div>
    );
  }
}

export default App;
