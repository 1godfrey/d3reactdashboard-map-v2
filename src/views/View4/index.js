import React, { Component } from "react";
import "./view4.css";
import LineChart from "../../charts/LineChart";
import { Avatar } from "antd";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { BsDatabaseAdd } from "react-icons/bs";
import CDC_opioid_deaths_by_state from "./CDC_opioid_deaths_by_state.csv";

/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-target-blank */

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
        <div style={{ overflowX: "scroll", scrollbarWidth: "thin", scrollbarColor: "white", transform: "translate(0%, -5%)"}}>
          <LineChart data={user[indexHold]} width={width} height={height} />  
                <div className={"avatar-view3"}>
        <a href={CDC_opioid_deaths_by_state} download="CDC_opioid_deaths_by_state.csv" target="_blank">
            <BsDatabaseAdd
              size={30}
              className="download-icon"
              style={{ position: "absolute", transform: "translate(650%, -145%)" }}
            />
          </a>
        </div>
        </div>

      </div>
    );
  }
}
