import React, { Component } from "react";
import { List } from "antd";
import "./view6.css";

/* eslint-disable react/prop-types */

export default class View6 extends Component {
  select = (data) => {
    this.props.changeSelectState(data);
  };

  handleClick = (data) => {
    this.select(data);
  };

  render() {
    const { data, selectedState } = this.props;
   

    return (selectedState);





      // <div id="view6" className="pane">
      //   <div className="header">Choose a state (click to change):</div>
      //   <List size="small" bordered dataSource={data} className="list-container" renderItem={(data) => (
      //       <List.Item
      //         key={data.key}
      //         onClick={() => {
      //           this.handleClick(data);
      //         }}
      //         className={data === selectedState ? "selected" : ""}
      //         data-key={data.key}
      //       >
      //          <div style={{ fontFamily: "Audiowide" }}>{data.State}</div>
      //       </List.Item>
      //     )}
      //   />
      // </div>
    

// ADD THESE BACK
   }
 }