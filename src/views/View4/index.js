import React, { Component } from "react";
import "./view4.css";
import LineChart from "../../charts/LineChart";
import { Avatar } from "antd";
import { AiOutlineCloudDownload } from "react-icons/ai";

/* eslint-disable react/prop-types */

export default class View4 extends Component {
  render() {
    const selectedState = this.props.selectedState;

    const { user } = this.props;

    let indexHold = 0;
                                                                                                                                                    
    for (var i = 0; i < user.length; i++) {
      if (user[i].State === selectedState) {
        indexHold = i;
        break;
      }
    }
    
      const width = 2000;
      const height = 250;
    return (
      <div id="view4" className="pane">
        <div className="header">
          Reported Deaths vs. Year for each State (hover for details)
        </div>
        <div style={{ overflowX: "hidden", overflowY: "hidden" }}>
         <LineChart data={user[i]} width={width} height={height} />
        </div>
        <div className={"avatar-view3"}>
        <a
            href="https://gist.githubusercontent.com/1godfrey/cc1a979c2a1820ab1a66b6224c4a69cd/raw/0b0cc6cf3dbc40409da679f04d8608bd5179169a/CDC-opioiddeathsbystate"
            download={true}
          >
<AiOutlineCloudDownload size={30} style={{ position: 'absolute', transform: 'translate(190%, -190%)' }} 
/>

          </a>
        </div>
      </div>
    );
  }
}
