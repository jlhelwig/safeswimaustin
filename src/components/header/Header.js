import React, { Component } from 'react';

import './Header.css';
import eColi from '../../images/e_coli.jpg';
// import greenbelt from '../../images/greenbelt.jpg';

class Header extends Component {
  constructor(props) {
    super()

  }

  render() {
    return (
      <div className='Header'>

        <section className="Header__banner">
        </section>

        <h1>Is it Safe <br/>
          <span className="Header__second-line">to Swim in the Greenbelt?</span>
        </h1>

        <img className="Header__ecoli" src={eColi} alt="people swimming at the greenbelt"/>

        <div className="Header__info-text">
          <p>The City of Austin Watershed Department collects <a href="">water quality data</a> on local streams, creeks, and lakes. We've visualized this data onto a map with a focus on the dangerous e.coli bacteria which has a history of causing illness in swimmers.</p>
        </div>

      </div>
    );
  }
}


export default Header;
