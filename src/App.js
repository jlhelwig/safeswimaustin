import React, { Component } from 'react';
import './App.css';
import { Router, Route, Switch, hashHistory } from 'react-router';
import { Link } from 'react-router'
import Footer from './components/footer/Footer.js';
import Header from './components/header/Header.js';
import Button from './components/button/Button'
// import Layout from './pages/Layout.js';
class App extends Component {
  constructor(){
    var date = new Date()

    super();
    this.changeDate = this.changeDate.bind(this)
    this.state = {
      date: date.toLocaleDateString()
    }

  }

  changeDate() {
    var date = new Date()
    this.setState({
      date: date.toLocaleDateString()
    })
  }


  render() {
    // var date = new date()
    const name = 'jeff'
    return (
      <div className="App">
        <Header date={this.state.date} />
        <Button />
        <Footer />
      </div>
    );
  }






}


export default App;
