import React, { Component } from 'react';


class Layout extends Component {
  render() {
    const name = 'jeff'
    return (
      <div className="App">
        <div >
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React {name}!!!</h2>
        </div>
        <p className="App-intro">
          To get started, edit and save to reload.
        </p>
        <Footer />
      </div>
    );
  }
}
