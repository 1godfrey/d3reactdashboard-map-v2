import React, { Component } from "react";
import "./view4.css";
import LineChart from "../../charts/LineChart";
import { Avatar } from "antd";

/* eslint-disable react/prop-types */

export default class View4 extends Component {
  render() {
    // console.log(this.props);
    const { user } = this.props,
      width = 2000,
      height = 250;
    return (
      <div id="view4" className="pane">
        <div className="header">
          Reported Deaths vs. Year for each State (hover for details)
        </div>
        <div style={{ overflowX: "hidden", overflowY: "hidden" }}>
          <LineChart data={user} width={width} height={height} />
        </div>
        <div className={"avatar-view3"}>
        <a
            href="https://gist.githubusercontent.com/1godfrey/cc1a979c2a1820ab1a66b6224c4a69cd/raw/0b0cc6cf3dbc40409da679f04d8608bd5179169a/CDC-opioiddeathsbystate"
            download={true}
          >
            <Avatar
              shape="square"
              size={32}
              src="https://cdn3.iconfinder.com/data/icons/buttons/512/Icon_34-512.png"
            />
          </a>
        </div>
      </div>
    );
  }
}
