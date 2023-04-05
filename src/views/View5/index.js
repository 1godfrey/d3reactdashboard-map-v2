import React, { Component } from "react";
import BarChart from "../../charts/BarChart";
import "./view5.css";
import { Avatar } from "antd";
import { USMap } from "../../charts/BarChart/vis.js";

/* eslint-disable react/prop-types */


export default class View5 extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedState: "California" };
  }

  select = (data) => {
    this.props.changeSelectState(data);
    if (this.props.onStateChange) {
      this.props.onStateChange(data);
    }
  };

  handleClick = (data) => {
    this.select(data);
    this.setState({ selectedState: data });
  };

  

  render() {
    const { selectedState, setSelectedState } = this.props;
    return (
      <div id="view5" className="pane">
        <div className="header">
          Reported Deaths vs State (hover for details)
        </div>


        <div className="bar-chart">
          <BarChart
            data={this.props.data}
            selectedState={this.state.selectedState}
          />
        </div>
      </div>
    );
  }
}
