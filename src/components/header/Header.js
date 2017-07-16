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

        <img className="Header__bgimage--right" src={eColi} alt="people swimming at the greenbelt"/>

      </div>
    );
  }
}


export default Header;
