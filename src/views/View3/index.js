import React, { Component } from "react";
import { Slider, Checkbox, Divider } from "antd";
import "./view3.css";

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
  }

  onChangeCheckbox = (checkedList) => {
    this.setState({
      checkedList,
      indeterminate:
        !!checkedList.length && checkedList.length < plainOptions.length,
      checkAll: checkedList.length === plainOptions.length
    });
    // this.props.changeIncludedRegion(checkedList);
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
        <div className="header">Region Filter</div>
        <h3 style={{ fontSize: "20px", paddingLeft: "7px" }}>Region</h3>
        <div style={{ width: 275, marginLeft: 10, alignItems: "baseline" }}>
          <Checkbox
            style={{ fontSize: "16px" }}
            indeterminate={this.state.indeterminate}
            onChange={this.onCheckAllChange}
            checked={this.state.checkAll}
          >
            Check all
          </Checkbox>
        </div>
        <br />
        <div style={{ width: 275, margin: 5, display: "flex", alignItems: "center", fontSize: "36px"  }}>
  <CheckboxGroup
    options={plainOptions}
    value={this.state.checkedList}
    onChange={this.onChangeCheckbox}
    style={{ display: "flex", flexDirection: "column", alignItems: "baseline"}}
    className="checkbox-group"
  />
</div>
        <Divider />
        {/* <h3>Age</h3>
        <Slider defaultValue={0} onChange={this.onChangeSilder} /> */}
      </div>
    );
  }
}
