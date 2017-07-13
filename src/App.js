import React, { Component } from 'react';
import './App.css';
// import { Router, Route, Switch, hashHistory } from 'react-router';
import { Link } from 'react-router';
// import { render } from 'react-dom';
import Footer from './components/footer/Footer.js';
import Header from './components/header/Header.js';
import Button from './components/button/Button';
import Austinmap from './components/map/Austinmap';
// import Layout from './pages/Layout.js';
class App extends Component {
  constructor(){
    super();
this.makeRequest = this.makeRequest.bind(this)

  }
  makeRequest(arg) {
    const xhr = new XMLHttpRequest();
    const url = arg
    xhr.open('GET', url)
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log(xhr.response);
        }
      }
    }
    xhr.send()
  }




  render() {
    return (
      <div className="App">
        <Header />
        <Button makeRequest={this.makeRequest} />
        <Austinmap />
        <Footer />
      </div>
    );
  }
}

export default App;
