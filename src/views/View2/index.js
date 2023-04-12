import React, { Component } from "react";
import "./view2.css";
import PieChart from "../../charts/PieChart";
import { Avatar } from "antd";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { BsDatabaseAdd } from "react-icons/bs";
import haha from "./haha.csv";


/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-target-blank */


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
        <a href={haha} download="2020_Gender_Demographics_Opioid_Deaths_By_State.csv" target="_blank">
  <BsDatabaseAdd size={30}/>
</a>



  

        </div>
      </div>
    );
  }
}
