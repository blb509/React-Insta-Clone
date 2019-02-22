import React from 'react';

const Authenticate = App => Login => 
  class extends React.Component {
      constructor(){
        super();
        this.state = {
            loggedIn: false
        };
      }

      componentDidMount() {
        if (localStorage.getItem('user')) {
          this.setState({ loggedIn: true });
        } 
      }

      render() {
        if (this.state.loggedIn) {
        window.onload = window.localStorage.clear();
        return <App />;
        }
        return <Login />;
      }
    
  };

export default Authenticate;