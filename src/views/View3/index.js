import React, { Component } from "react";
import { Slider, Checkbox, Divider } from "antd";
import "./view3.css";
import { AiOutlinePercentage } from "react-icons/ai";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { BsFillPeopleFill } from "react-icons/bs";

/* eslint-disable react/prop-types */

export default class View3 extends Component {

  calculateDecadeTotal = (data) => {
    return data.reduce((total, current) => total + current.count, 0);
  }
  

  render() {
    const { selectedState, user } = this.props;
    let Trend = 0;
    let Decade_Total = 0;
    let Average_Population = 0;
   

    for (let i = 0; i < user.length; i++) {
      if (user[i].State === selectedState) {
        // console.log(user[i].Average_Population);
        // console.log(user[i].opioidDeaths[0].count);
        // console.log(user[i].Decade_Total);
        // console.log(user[i].Average_Population);
        // console.log(user[i].Trend);
        Trend = ((user[i].opioidDeaths[6].count.toFixed(2) - user[i].opioidDeaths[0].count.toFixed(2)) / user[i].opioidDeaths[0].count.toFixed(2));
        Decade_Total = user[i].opioidDeaths[0].count + user[i].opioidDeaths[1].count + user[i].opioidDeaths[2].count + user[i].opioidDeaths[3].count + user[i].opioidDeaths[4].count + user[i].opioidDeaths[5].count + user[i].opioidDeaths[6].count;
        Average_Population = user[i].Average_Population;
      }

    }



    // const Decade_Total = calculateDecadeTotal(opioidDeaths);

    return (
      <div id="view3" className="pane">
         <div className="header">Stats</div>
        <h3 style={{ fontSize: "18px", paddingLeft: "7px", paddingTop: "2px", height: "64px", color: "#FFCCBB" }}>
          Decade Total <BsFillPeopleFill style={{ fontSize:"40px", position: 'absolute', top: 615, left: 25}} />
          <div style={{fontSize: "54px", color: "white", marginLeft: "-18px", marginTop: "7px", display: "flex", justifyContent: "center", gap: "10px" }}>
            {Decade_Total} <div style={{fontSize: "22px", color: "white", position: "absolute", marginLeft: "190px"}}>Deaths</div>
            </div>
            </h3>

        <Divider style={{ borderWidth: "12px" }}  /> 
         <h3 style={{ fontSize: "18px", paddingLeft: "7px", paddingTop: "-10px", height: "64px", color: "#6EB5C0" }}>
          Average Population <BsFillPeopleFill style={{ fontSize:"40px", position: 'absolute', top: 745, left: 25}} />
          <div style={{fontSize: "54px", color: "white", marginLeft: "15px", marginTop: "7px", display: "flex", justifyContent: "center", gap: "10px" }}>
            {(Average_Population/1000000).toFixed(2)} <div style={{fontSize: "22px", color: "white"}}>M</div>
            </div>
            </h3>

         <Divider style={{ borderWidth: "12px" }} /> 

         <h3 style={{ fontSize: "18px", paddingLeft: "7px", paddingTop: "-10px", height: "64px", color: "green" }}>
  % Trend {(Trend.toFixed(2)*100) < 0 ? <IoIosArrowDown style={{ fontSize:"50px", position: 'absolute', top: 855, left: 20, color: "red"}} /> : <IoIosArrowUp style={{ fontSize:"50px", position: 'absolute', top: 855, left: 20}} />}
  <div style={{fontSize: "54px", color: "white", marginLeft: "15px", marginTop: "7px", display: "flex", justifyContent: "center", gap: "10px" }}>
    {Trend.toFixed(2)*100}
    <AiOutlinePercentage style={{fontSize: "22px", color: "white"}}/>
  </div>
</h3>

          <Divider style={{ borderWidth: "12px" }} />
     </div>
    );
  }
}
