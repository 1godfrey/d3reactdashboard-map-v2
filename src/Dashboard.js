import React, { Component } from "react";
import data from "./data";
import { Layout } from "antd";
import View1 from "./views/View1";
import View2 from "./views/View2";
import View3 from "./views/View3";
import View4 from "./views/View4";
import View5 from "./views/View5";
import View6 from "./views/View6";
import "./dashboard.css";

const { Sider, Content, Footer } = Layout;

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mapState: data[0],
      selectedState: data[0],
      greaterThenAge: 0,
      includedRegion: ["Male", "Female", "Unknown"],
      highlightedState: null // new state property
    };
  }


  changeSelectState = (value) => {
    this.setState({
      selectedState: value
    });
  };

  changeMapState = (value) => {
    this.setState({
      mapState: value
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

  render() {
    const { selectedState, greaterThenAge, includedRegion, mapState } = this.state;
    const filteredData = data;
    // .filter((user) => includedRegion.indexOf(user.Region) !== -1)
    // .filter((user) => user.fips > greaterThenAge);
    return (
      <div style={{ height: "920px", overflowY: "hidden" }}>
    <h1 style={{ textAlign: 'center', fontFamily: 'Audiowide' }}>Opioid Overdose Deaths in the United States </h1>

        <Layout style={{ height: "100%", transform: 'scale(0.60)', marginTop: -210 }}>
          <Sider width={300} style={{ backgroundColor: "#eee" }}>
            <Content style={{ height: 200, width: 300 }}>
              <View1 user={selectedState} data={mapState} />
            </Content>
            <Content style={{ height: 300 }}>
              <View2 user={selectedState} data={filteredData} />
            </Content>
            <Content style={{ height: 400 }}>
              <View3
                changeGreaterThenAge={this.changeGreaterThenAge}
                changeIncludedRegion={this.changeIncludedRegion}
              />
            </Content>
          </Sider>
          <Layout style={{ width: 100 }}>
            <Content style={{ height: 300 }}>
              <View4 user={selectedState} />
            </Content>
            <Layout style={{ height: 600 }}>
              <Content style={{ overflow: "hidden" }}>
                <View5 
                user={selectedState}
                state={data.State}
                data={filteredData}
                changeMapState={this.changeMapState}
                changeSelectState={this.changeSelectState}
                highlightedState={this.state.highlightedState}
  
      
             
                />
                
              </Content>
              <Sider width={300} style={{ backgroundColor: "#eee" }}>
                <View6
                  state={data.State}
                  data={filteredData}
                  changeSelectState={this.changeSelectState}
                  highlightedState={this.state.highlightedState} // pass highlightedUser as prop
                />
              </Sider>
            </Layout>
          </Layout>
        </Layout>
        <Layout>
          <Footer style={{ height: 20 }}>
            <div style={{ marginTop: -10 }}></div>
          </Footer>
        </Layout>
      </div>
    );
  }
}
