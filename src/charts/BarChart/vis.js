import React, { useEffect, useState, Component } from "react";
import * as d3 from "d3";
import * as topojson from "topojson-client";
import "./style.css";
import PropTypes from "prop-types";
import { List } from "antd";

/* eslint-disable react/prop-types */

const USMap = ({ selectedState, onStateChange }) => {
  const [svgNode, setSvgNode] = useState(10);
  const [clickedState, setClickedState] = useState(null);

  const handleClick = (d) => {
    const state = d.srcElement.__data__.properties.name;
    if (state !== selectedState) {
      onStateChange(state);
    }
    setClickedState(state);
  };
  
  useEffect(() => {
    if (!svgNode) return;

    const margin = { top: 0, left: 0, right: 0, bottom: 0 },
      height = 560 - margin.top - margin.bottom,
      width = 1000 - margin.left - margin.right;

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
    const projection = d3.geoAlbersUsa().translate([width / 2, height / 2]).scale(1200);
      
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
        const stateIndexMatcher = {
          AK: 160,
          DE: 444,
          DC: 300,
          IL: 3549,
          ND: 114,
          WY: 99,
          SC: 1739,
          CT: 1371,
          RI: 397,
          VT: 190,
          CO: 1492,
          NV: 832,
          NH: 393,
          AZ: 2550,
          AL: 1029,
          PA: 5168,
          AR: 546,
          CA: 8908,
          FL: 7231,
          NJ: 2840,
          KS: 490,
          GA: 1916,
          HI: 274,
          IA: 432,
          NM: 784,
          ID: 287,
          IN: 2321,
          KY: 2083,
          MD: 2771,
          ME: 496,
          LA: 1896,
          MA: 2302,
          MN: 1050,
          MO: 1875,
          MI: 2759,
          MS: 586,
          UT: 622,
          NE: 214,
          MT: 162,
          OK: 762,
          NC: 3146,
          OR: 803,
          NY: 4965,
          OH: 5204,
          SD: 83,
          TN: 3034,
          TX: 4172,
          VA: 2240,
          WV: 1330,
          WA: 1733,
          WI: 1531
        };


        var states = topojson.feature(data[0], data[0].objects.us_states)
          .features;




          const colorScale = d3
          .scaleLinear()
          .domain([0, d3.max(Object.values(stateIndexMatcher))])
          .range(["#add8e6", "#00008b"]);
       
        const legendWidth = 200;
        const legendHeight = 20;
       
     const legend = svg
  .append("g")
  .attr("transform", "translate(650, 40)")
  .append("svg")
  .attr("class", "legend")
  .attr("width", legendWidth)
  .attr("height", legendHeight);


       
        const legendScale = d3
          .scaleLinear()
          .domain([0, d3.max(Object.values(stateIndexMatcher))])
          .range([0, legendWidth]);
       
        const legendAxis = d3.axisBottom(legendScale).ticks(5);
       
        legend
          .append("g")
          .attr("transform", "translate(420," + legendHeight / 2 + ")")
          .call(legendAxis);
       
        legend
          .append("rect")
          .attr("x", 0)
          .attr("y", 0)
          .attr("width", legendWidth)
          .attr("height", legendHeight)
          .attr("fill", "url(#legendGradient)");
       
        const gradient = legend
          .append("defs")
          .append("linearGradient")
          .attr("id", "legendGradient")
          .attr("x1", "0%")
          .attr("y1", "0%")
          .attr("x2", "100%")
          .attr("y2", "0%");
       
        gradient
          .append("stop")
          .attr("offset", "0%")
          .attr("stop-color", "#add8e6");
       
        gradient
          .append("stop")
          .attr("offset", "100%")
          .attr("stop-color", "#00008b");


          const scaleWidth = 200;
const scaleHeight = 20;


const scale = svg
  .append("g")
  .attr("transform", "translate(650, 55)");


const scaleScale = d3
  .scaleLinear()
  .domain([0, d3.max(Object.values(stateIndexMatcher))])
  .range([0, scaleWidth]);


const scaleAxis = d3.axisBottom(scaleScale).ticks(5);


scale
  .append("g")
  .attr("transform", "translate(0," + scaleHeight / 2 + ")")
  .call(scaleAxis).style("font-size", "16px");


scale
  .append("text")
  .attr("x", scaleWidth / 2)
  .attr("y", 57)
  .attr("font-size", "24px")
  .attr("text-anchor", "middle")
  .text("Deaths");



scale
  .append("rect")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", scaleWidth)
  .attr("height", scaleHeight)
  .attr("fill", "none")
  .attr("stroke", "none");


       

          svg
          .selectAll(".state")
          .data(states)
          .enter()
          .append("path")
          .attr("class", "state")
          .attr("d", path).style("cursor", "pointer")
          .attr("fill", (d) => colorScale(stateIndexMatcher[d.properties.postal])).on("mouseover", function(d, i, data) {
            d3.select(this).classed("selected", true)
              .raise()
              .transition()
              .duration(2000)
              .attr("transform", "translate(-0, 0) scale(1.05)")
              .attr("fill", "#FFCCBB")
              .attr("stroke-width", "20px");
              
              tooltip
              .style("opacity", 1)
              .style("background-color", "#7E909A") // set background color to light blue
              .style("color", "#DCEFFB") // set text color to gray
              .html(
                i.properties.name + " reported " + stateIndexMatcher[i.properties.postal] + " deaths in 2020")
              .style("left", d.pageX + "px")
              .style("top", d.pageY - 28 + "px"); 



          })
          .on("mouseout", function(d, i) {
            d3.select(this).classed("selected", false)
              .lower()
              .transition()
              .duration(200)
              .attr("transform", "scale(1)")
              .attr("fill", (d) => colorScale(stateIndexMatcher[d.properties.postal]))
              .attr("stroke-width", "1px");

              tooltip.style("opacity", 0);

          });
        
          var tooltip = d3.select("body").append("div").attr("class", "tooltip");


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
         
         });
     }, [svgNode]);
   
     
       return (
        <div className="vis-barchart">
        <div id="map">
          <svg ref={(node) => setSvgNode(node)} height="800" width="1200"></svg>
          <div>
            <br />
            <br />
          </div>
          <div>
            <br />
          </div>
          {/* <div>Current state: {selectedState}</div> */}
        </div>
      </div>
       );
     }
     
     export { USMap };
   