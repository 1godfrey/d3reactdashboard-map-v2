import React, { Component } from "react";
import data from "./data";
import { Layout } from "antd";
import View1 from "./views/View1";
import View2 from "./views/View2";
import View3 from "./views/View3";
import View4 from "./views/View4";
import View5 from "./views/View5";
import View6 from "./views/View6";
import { USMap } from "../src/charts/BarChart/vis.js";
import "./dashboard.css";

const { Sider, Content, Footer } = Layout;

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedState: "Alaska",
      greaterThenAge: 0,
      includedRegion: ["Male", "Female", "Unknown"],
      highlightedState: null // new state property
    };
  }

  onStateChange = (state) => {
    this.setState({
      selectedState: state
    });
  };

  changeMapState = (state) => {
    this.setState({
      mapState: state
    });
  };

  highlightState = (user) => {
    this.setState({ highlightedState: user });
  };

  changeGreaterThenAge = (value) => {
    this.setState({
      greaterThenAge: value
    });
  };

  changeIncludedRegion = (value) => {
    this.setState({
      includedRegion: value
    });
  };

  calculateDecadeTotal = (data) => {
    return data.reduce((total, current) => total + current.count, 0);
  }
  

  render() {
    const { selectedState, greaterThenAge, includedRegion, mapState } = this.state;
    const filteredData = data;
    // .filter((user) => includedRegion.indexOf(user.Region) !== -1)
  
    // .filter((user) => user.fips > greaterThenAge);

    // OG background color: #E2E8E4
    return (
      <div style={{ height: "920px", overflowY: "hidden", backgroundColor: "#000000" }}>
    <h1 style={{ textAlign: 'center', fontFamily: 'Audiowide', color: 'gray', fontSize: "29px", marginBottom: "35px"}}>Opioid-Related Deaths in the United States, CDC </h1>

    <Layout style={{ height: "100%", transform: "scale(0.60)", marginTop: -210 }}>
          <Sider width={300} style={{ backgroundColor: "#000000" }}>
            <Content style={{ height: 200, width: 300 }}>
              <View1 selectedState={selectedState} user={filteredData} />
            </Content>
            <Content style={{ height: 300 }}>
              <View2 user={filteredData} selectedState={selectedState} />
            </Content>
            <Content style={{ height: 400 }}>
              <View3
                user={filteredData}
                selectedState={selectedState}
      
              />
            </Content>
          </Sider>
          <Layout style={{ width: 100 }}>
            <Content style={{ height: 300 }}>
              <View4 user={filteredData} selectedState={selectedState} />
            </Content>
            <Layout style={{ height: 560}}>
              <Content style={{  backgroundColor: "#150050", marginTop: -20 }}>
                <div style={{marginTop:-20}}>
                <USMap selectedState={selectedState} onStateChange={this.onStateChange}/></div>
              </Content>
              <Sider width={5} style={{ backgroundColor: "#150050" }}>
                {/* <View6 /> */}
              </Sider>
            </Layout>
          </Layout>
        </Layout>

      </div>
    );
  }
}
