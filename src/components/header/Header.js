import React, { Component } from 'react';

import './Header.css';

class Header extends Component {
  constructor(props) {
    super()

  }

  render() {
    return (
      <div className='Header'>

        <section>
          <h1>Recent E. Coli Levels In Austin's Springs Streams and Lakes{this.changeDate}</h1>

        </section>

      </div>
    );
  }
}


export default Header;
