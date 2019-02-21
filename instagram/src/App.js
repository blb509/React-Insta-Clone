import React from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './components/Authentication/Authenticate';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dummy: [],
      newPosts: []
    };
  }

  render() {
    return (
      <div className="App">
        <PostsPage />
      </div>
    );
  }
}

export default Authenticate(App);
