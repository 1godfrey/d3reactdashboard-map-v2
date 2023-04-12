import React, { Component } from "react";
import "./view2.css";
import PieChart from "../../charts/PieChart";
import { Avatar } from "antd";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { BsDatabaseAdd } from "react-icons/bs";
import haha from "../../data/haha.csv";

/* eslint-disable react/prop-types */

export default class View2 extends Component {
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
    
    // console.log(user.Gender_Demo);
    const width = 260;
    const height = 260;
    return (
      <div id="view2" className="pane">
        <div className="header">2020 Gender Demographics</div>
        <PieChart data={user[i]} width={width} height={height} />
        <div className={"avatar-view2"}>
        <a
  href="https://gist.githubusercontent.com/1godfrey/9aa3bffd17bcc74fb316215bd90425cb/raw/feaddda2fd8175b1aa8daf7c9c197a166b9def34/2020genderdemographicsopioiddeathsbystate"
  target="_blank"
  rel="noopener noreferrer"
>
  <BsDatabaseAdd size={30}/>
</a>

        </div>
      </div>
    );
  }
}
