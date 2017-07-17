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

    this.state = {
      points: 99
    }

    this.makeRequest = this.makeRequest.bind(this)
// this.points=this.props.points.bind(this)
  }

  makeRequest(arg) {
    const xhr = new XMLHttpRequest();
    const url = 'http://10.8.80.153:8000/displayparams'
    //
    let formdata = new FormData()
    formdata.append('watershed', arg)
    xhr.open('POST', url)
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          this.setState({points: xhr.response})
          // console.log(this.state.points);
        }
      }
    }

    xhr.send(formdata)
    // return this.points
  }




  render() {
    return (
      <div className="App">
        <Header />
        <Button makeRequest={this.makeRequest} />
        <Austinmap mapData={this.state.points} />
        <Footer />
      </div>
    );
  }
}

export default App;
