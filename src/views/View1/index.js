import React, { Component } from "react";
// import { Avatar } from "antd";
import "./view1.css";


/* eslint-disable react/prop-types */

// If you change data to user it should work like before

export default class View1 extends Component {
  render() {
   
    let { data, user } = this.props;
    console.log(data);
    if (data === null) {
      data = {
        State: "null",
        Region: "null",
        fips: "null"
      };


    }
    return (
      <div id="view1" className="pane">
        <div className="header">Current State</div>
        <div>
          {/* <div className={"avatar-view"}>
            <a href="https://gist.github.com/1godfrey/b80677aefad1847a1d88eaa7ac611613#file-sorteddata-csv">
              <Avatar
                shape="square"
                size={32}
                src="https://cdn3.iconfinder.com/data/icons/buttons/512/Icon_34-512.png"
              />
            </a>
          </div> */}
          <div className="info-view" style={{ fontFamily: 'Audiowide' }}>
            <div>State: {user.State}  </div>
            {/* <div>Region: {user.Region}</div> */}
        {/* <div>Fips: {user.fips}</div>*/}
            {/* <div>Postal: {user.postal}</div> */}
            {/* <div>Ending_Age: {user.Ending_Age}</div> */}
          </div>
        </div>
      </div>
    );
  }
}
