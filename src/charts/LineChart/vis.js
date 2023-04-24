import * as d3 from "d3";
import _ from "lodash";
import "./style.css";
import { select } from 'd3-selection';


const draw = (props) => {
  let data = [];
  if (props.data !== null) {
    data = _.cloneDeep(props.data.opioidDeaths);
  }
  d3.select(".vis-linechart > *").remove();
  let margin = { top: 20, right: 50, bottom: 50, left: 80 }; // Adjusted margins
  const width = 1100 - margin.left - margin.right;
  const height = props.height - margin.top - margin.bottom;
  let svg = d3
    .select(".vis-linechart")
    .append("svg")
    .attr("width", 1100)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")").classed("chart-svg", true);

  data.forEach(function (d) {
    d.date = d3.timeParse("%Y-%m-%d")(d.date);
    d.count = +d.count;
  });

  // Add X axis --> it is a date format
  let x = d3
    .scaleTime()
    .domain(
      d3.extent(data, function (d) {
        return d.date;
      })
    )
    .range([0, (width*0.95)]);
    svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
    .style("fill", "white")
    .style("font-size", "16px");


  // Add Y axis
  var y = d3
    .scaleLinear()
    .domain([
      0,
      d3.max(data, function (d) {
        return +d.count;
      })
    ])
    .range([height, 10]);
    svg.append("g")
    .call(d3.axisLeft(y).ticks(5))
    .selectAll("text")
    .style("fill", "white")
    .style("font-size", "14px");


  // Add x axis label
  svg
    .append("text")
    .attr("class", "axis-label")
    .attr(
      "transform",
      "translate(" + width / 2 + " ," + (height + margin.top + 20) + ")"
    )
    .attr("y", 10)
    .attr("font-size", 40)
    .style("text-anchor", "middle")
    .style("fill", "white")
    .text("Year");

  // Add y axis label
  svg
    .append("text")
    .attr("class", "axis-label")
    .attr("transform", "rotate(-90)")
    .attr("y", (0 - margin.left)-5)
    .attr("x", -18 - height / 2)
    .attr("dy", "1em")
    .attr("stroke-width", 1.5)
    .style("fill", "white")
    .style("text-anchor", "middle")
    .text("Reported Deaths");

  // Add the line
  let line = svg
    .append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "white")
    .attr("stroke-width", 1.5)
    .attr(
      "d",
      d3
        .line()
        .x(function (d) {
          return x(d.date);
        })
        .y(function (d) {
          return y(d.count);
        })
    );

  let circles = svg
    .selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", function (d) {
      return x(d.date);
    })
    .attr("cy", function (d) {
      return y(d.count);
    })
    .attr("r", 8)
    .style("cursor", "pointer")
    .attr("fill", "#FB2576")
    .on("mouseover", function (d, i, data) {
      d3.select(this).transition()
      .duration(150).attr("r", 14).attr("fill", "#FFCCBB");
      // Define tooltip
      let tooltip = d3
        .select(".vis-linechart")
        .append("div")
        .classed("tooltip", true); // Add tooltip class
      tooltip
        .html(
          `<div><strong>Year:</strong> ${i.date.getFullYear()}</div> <div><strong>Deaths:</strong> ${
            i.count
          }</div>`
        )
        .style("left", d.pageX + 10 + "px")
        .style("top", d.pageY - 30 + "px")
        .attr("fill", "#EA6A47")
        .style("opacity", 1);
    })

    .on("mousemove", function (event, d) {
      // Move tooltip with mouse
      const [x, y] = d3.pointer(event);
      d3.select(".tooltip")
        .style("left", d.pageX + 10 + "px")
        .style("top", d.pageY - 30 + "px");
    })

    .on("mouseout", function (d) {
      d3.select(this).transition()
      .duration(150).attr("r", 8).attr("fill", "#FB2576");
      // Hide tooltip
      d3.select(".tooltip").style("opacity", 0).remove();
    });
};

export default draw;
