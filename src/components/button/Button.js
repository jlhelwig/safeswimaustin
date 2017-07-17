import React, { Component } from 'react';

import './Button.css';

class Button extends Component {

  constructor() {
    super();

  }



  render() {
    return (
    <div className="button-row">
      <button className="Button" onClick={this.props.makeRequest.bind(this,'Barton Creek')}>Barton Creek</button>
      <button className="Button" onClick={this.props.makeRequest.bind(this,'Blunn Creek')}>Blunn Creek</button>
      <button className="Button" onClick={this.props.makeRequest.bind(this, 'Boggy Creek')}>Boggy Creek</button>
      <button className="Button" onClick={this.props.makeRequest.bind(this, 'Bull Creek')}>Bull Creek</button>
      <button className="Button" onClick={this.props.makeRequest.bind(this, 'East Bouldin Creek')}>East Bouldin Creek</button>
      <button className="Button" onClick={this.props.makeRequest.bind(this,'Lady Bird Lake')}>Lady Bird Lake</button>
      <button className="Button" onClick={this.props.makeRequest.bind(this, 'Lake Austin')}>Lake Austin</button>
      <button className="Button" onClick={this.props.makeRequest.bind(this, 'Onion Creek')}>Onion Creek</button>
      <button className="Button" onClick={this.props.makeRequest.bind(this, 'Shoal Creek')}>Shoal Creek</button>
      <button className="Button" onClick={this.props.makeRequest.bind(this, 'Taylor Slough North')}>Taylor Slough North</button>
      <button className="Button" onClick={this.props.makeRequest.bind(this, 'Taylor Slough South')}>Taylor Slough South</button>
      <button className="Button" onClick={this.props.makeRequest.bind(this, 'Turkey Creek')}>Turkey Creek</button>
      <button className="Button" onClick={this.props.makeRequest.bind(this, 'Waller Creek')}>Waller Creek</button>
      <button className="Button" onClick={this.props.makeRequest.bind(this, 'West Bouldin Creek')}>West Bouldin Creek</button>
      <button className="Button" onClick={this.props.makeRequest.bind(this, 'Williamson Creek')}>Williamson Creek</button>



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
