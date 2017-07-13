import React, { Component } from 'react';

import './Button.css';

class Button extends Component {

  constructor(props) {
    super()
    this.makeRequest = this.makeRequest.bind(this)
  }

  makeRequest() {
    const xhr = new XMLHttpRequest();
    const url = '/'
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
    <div>
      <button className="btn btn-success" onClick={this.changeDate}>This is a special button You can Press</button>
      <button className="btn btn-success" onClick={this.makeRequest}>Barton Creek</button>
      <button className="btn btn-success">Barton Springs</button>
      <button className="btn btn-success">Lady Bird Lake</button>
      <button className="btn btn-success">Walter E. Long Lake</button>
      <button className="btn btn-success">Waller Creek (just for fun)</button>

    </div>
      // <div>
      //
      //   <section>
      //     Built in Cooperation with Open Austin
      //   </section>
      //
      // </div>
    );
  }
}


export default Button;
