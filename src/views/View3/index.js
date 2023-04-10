import React, { Component } from "react";
import { Slider, Checkbox, Divider } from "antd";
import "./view3.css";

/* eslint-disable react/prop-types */

const CheckboxGroup = Checkbox.Group;

const plainOptions = ["West", "Southwest", "Southeast", "Midwest", "Northeast"]; //, "Southeast", "Northeast"
const defaultCheckedList = ["West", "Southwest", "Southeast", "Midwest", "Northeast"];

export default class View3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedList: defaultCheckedList,
      indeterminate: true,
      checkAll: false
    };
    // console.log(this.props.user[0].Region);
  }
  onChangeCheckbox = (checkedList) => {
    this.setState({
      checkedList,
      indeterminate:
        !!checkedList.length && checkedList.length < plainOptions.length,
      checkAll: checkedList.length === plainOptions.length
    });

    const stateMap = this.props.user
    // this.props.changeIncludedRegion(checkedList);
    const newMapState = {...stateMap}; // create a copy of the stateMap
    console.log(newMapState[1]);

    
    if (newMapState[0].Region === "West") {
      for (let i = 0; i < newMapState.length; i++) {
        if (newMapState[i].Region === "West") {
          newMapState[i].fill = "red";
        }
      }
    }
    

    this.setState({ stateMap: newMapState });
  };


  onCheckAllChange = (e) => {
    const checkedList = e.target.checked ? plainOptions : [];
    this.setState({
      checkedList: checkedList,
      indeterminate: false,
      checkAll: e.target.checked
    });
    // this.props.changeIncludedRegion(checkedList);
  };

  onChangeSilder = (value) => {
    // this.props.changeGreaterThenAge(value);
  };


  render() {
    return (
      <div id="view3" className="pane">
         <div className="header">Stats</div>
        <h3 style={{ fontSize: "12px", paddingLeft: "7px", paddingTop: "2px", height: "64px" }}>Widget 1</h3>

        <Divider style={{ borderWidth: "12px" }}  /> 
         <h3 style={{ fontSize: "12px", paddingLeft: "7px", paddingTop: "-10px", height: "64px" }}>Widget 2</h3>

         <Divider style={{ borderWidth: "12px" }} /> 

         <h3 style={{ fontSize: "12px", paddingLeft: "7px", paddingTop: "-10px", height: "64px" }}>Widget 3</h3>

          <Divider style={{ borderWidth: "12px" }} />
     </div>
    );
  }
}
