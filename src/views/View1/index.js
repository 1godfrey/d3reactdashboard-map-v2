import React, { Component } from "react";
import "./view1.css";

/* eslint-disable react/prop-types */



export default class View1 extends Component {
  render() {
    const { selectedState } = this.props;




    
    return (
      <div id="view1" className="pane">
        <div className="header">Current State</div>
        <div className="info-view" style={{ fontFamily: 'Audiowide' }}>
          <div>{selectedState}  </div>
          {/* <div>Region: {selectedUser ? selectedUser.Region : ''}</div>
          <div>Fips: {selectedUser ? selectedUser.fips : ''}</div> */}
          {/* <div>Postal: {selectedUser ? selectedUser.postal : ''}</div> */}
          {/* <div>Ending_Age: {selectedUser ? selectedUser.Ending_Age : ''}</div> */}
        </div>
      </div>
    );
  }
}
