import React, { Component } from "react";
import "./view2.css";
import PieChart from "../../charts/PieChart";
import { Avatar } from "antd";

/* eslint-disable react/prop-types */

export default class View2 extends Component {
  render() {
    // console.log(this.props);
    const { user } = this.props;
    // console.log(user.Gender_Demo);
    const width = 260;
    const height = 260;
    return (
      <div id="view2" className="pane">
        <div className="header">2020 Gender Demographics (hover for details)</div>
        <PieChart data={user} width={width} height={height} />
        <div className={"avatar-view2"}>
          <a
            href="https://gist.githubusercontent.com/1godfrey/9aa3bffd17bcc74fb316215bd90425cb/raw/feaddda2fd8175b1aa8daf7c9c197a166b9def34/2020genderdemographicsopioiddeathsbystate"
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
