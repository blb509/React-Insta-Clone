import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dummy: [],
      newPosts: []
    };
  }

  componentWillMount() {
    this.setState({dummy: dummyData})
  };

  search = e => {
    const posts = this.state.dummy.filter(post => {
      if (post.username.includes(e.target.value)) {
        return post;
      }
    });
    this.setState({newPosts: posts});
  };

  render() {
    return (
      <div className="App">
        <SearchBar search={this.search}/>
        <PostContainer dummy= 
        { this.state.newPosts.length > 0 ? this.state.newPosts : this.state.dummy} />
      </div>
    );
  }
}

export default App;
