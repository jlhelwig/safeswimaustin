import React, { Component } from 'react';

import './Button.css';

class Button extends Component {

  constructor() {
    super();

  }



  render() {
    return (
    <div>
      <button className="btn btn-success" onClick={this.props.makeRequest.bind(this, "/")}>This is a special button You can Press</button>
      <button className="btn btn-success" onClick={this.props.makeRequest.bind(this,'Barton Creek')}>Barton Creek</button>
      <button className="btn btn-success" onClick={this.props.makeRequest.bind(this,'Blunn Creek')}>Boggy Creek</button>
      <button className="btn btn-success" onClick={this.props.makeRequest.bind(this, '')}>Lady Bird Lake</button>
      <button className="btn btn-success" onClick={this.props.makeRequest}>Walter E. Long Lake</button>
      <button className="btn btn-success" onClick={this.props.makeRequest}>Waller Creek (just for fun)</button>
      <button className="btn btn-success" onClick={this.props.makeRequest.bind(this, '')}>Lady Bird Lake</button>

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
