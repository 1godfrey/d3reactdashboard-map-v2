import React, { useEffect, useState, Component } from "react";
import * as d3 from "d3";
import * as topojson from "topojson-client";
import "./style.css";
import PropTypes from "prop-types";
import { List } from "antd";

/* eslint-disable react/prop-types */

// Define a function that retrieves the state name and exports it



const USMap = () => {
  const [svgNode, setSvgNode] = useState(10);
  const [selectedState, setselectedState] = useState("California");




  const handleClick = (d) => {
    const state = d.srcElement.__data__.properties.name;
    if (state !== selectedState) {
 
      setselectedState(state);
    }
  };
  
  useEffect(() => {
    if (!svgNode) return;

    const margin = { top: 0, left: 0, right: 0, bottom: 0 },
      height = 400 - margin.top - margin.bottom,
      width = 700 - margin.left - margin.right;

    let svg = d3.select(svgNode);

    // Check if the SVG element already exists
    if (svg.empty()) {
      // If it doesn't exist, create it
      svg = d3
        .select("#map")
        .append("svg")
        .attr("height", height + margin.top + margin.bottom)
        .attr("width", width + margin.left + margin.right)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    }
    // geoAlbersUsa for US, geoMercator for World Map
    const projection = d3.geoAlbersUsa().translate([width / 2, height / 2]).scale(850);
      
    const path = d3.geoPath().projection(projection);

    Promise.all([
      d3.json(
        "https://gist.githubusercontent.com/1godfrey/16455842427d3ca3e27d08141eb57cca/raw/dd792c3830a5a29fa2252e14084e0af0fd5d591f/us-states.topojson"
      ),
      d3.csv(
        "https://gist.githubusercontent.com/1godfrey/e1e8a6d19c11b5cea20d5ff9fcb1a976/raw/2bc0a39d27de4881afff8830c04c6a3f7d2d8d33/deathsbystate2020.csv"
      ),
    ])
      .then(function (data) {
        // Do something with the loaded data here
        data.forEach(d => {
          d.radius = parseFloat(getComputedStyle(document.documentElement).fontSize) * 1.5 / 2;
        });

        const states = topojson.feature(data[0], data[0].objects.us_states)
          .features;
          
          svg
          .selectAll(".state")
          .data(states)
          .enter()
          .append("path")
          .attr("class", "state")
          .attr("d", path)
          .attr("fill", "#e3e3e3")

          svg.selectAll(".state-label")
          .data(states)
          .enter()
          .append("text")
          .attr("class", "state-label")
          .attr("transform", function(d) {
             return "translate(" + path.centroid(d) + ")";
          })
          .attr("dx", "-.8em")
          .attr("dy", ".35em")
          .text(function(d) {
             return d.properties.postal;
          })
          .style("font-family", "Audiowide");
   
     // Select all state paths
     const statePaths = d3.select(svgNode).selectAll(".state");
   
       // Add a click event listener to each state path
     statePaths.on("click", function(d) {
       handleClick(d);
     });
         })
         .catch(function (error) {
           console.log(error);
         });
     }, [svgNode]);
   
       return (
        <div className="vis-barchart">
        <div id="map">
          <svg ref={(node) => setSvgNode(node)} height="400" width="800"></svg>
          <div>
            <br />
            <br />
          </div>
          <div>
            <br />
          </div>
          <div>Current state: {selectedState}</div>
        </div>
      </div>
       );
     }
     
     export { USMap };
   