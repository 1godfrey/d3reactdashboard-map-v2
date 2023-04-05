import * as d3 from "d3";
import { transition } from "d3-transition";
import { select } from "d3-selection";

const draw = (props) => {
  const data = props.data;
  
  // console.log(data.Gender_Demo);

  const Gender = ["Male", "Female", "Unknown"];
  let count = new Array(3).fill(0);
  data.Gender_Demo.forEach((d) => {
    let genderIndex = Gender.indexOf(d.Gender);
    if (genderIndex + 1) count[genderIndex] += 1;
  });

  count = [data.Gender_Demo[0], data.Gender_Demo[1], data.Gender_Demo[2]];

  const dataset = [
    { label: "Male", count: count[0] },
    { label: "Female", count: count[1] },
    { label: "Unknown", count: count[2] }
  ];

  d3.select(".vis-piechart > *").remove();
  const margin = { top: 10, right: 20, bottom: 30, left: 40 };
  const width = props.width - margin.left - margin.right;
  const height = props.height - margin.top - margin.bottom;

  let svg = d3
    .select(".vis-piechart")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .on("mousemove", function () {})
    .append("g")
    .attr(
      "transform",
      "translate(" +
        (width / 2 + margin.left) +
        "," +
        (height / 2 + margin.top) +
        ")"
    );

  let radius = Math.min(width, height) / 2;

  let color = d3
    .scaleOrdinal()
    .domain(Gender)
    .range(["#EA6A47", "#7E909A", "#A5D8DD"]);

  let arc = d3.arc().innerRadius(0).outerRadius(radius);

  let pie = d3
    .pie()
    .value(function (d) {
      return d.count;
    })
    .sort(null);

  svg
    .selectAll("path")
    .data(pie(dataset))
    .enter()
    .append("path")
    .attr("d", arc)
    .attr("fill", function (d, i) {
  
      return color(d.data.label);
    })
    .attr("stroke-width", 8)
    .on("mouseover", function (d, i, data) {
      console.log(i.data.label);
      d3.select(this).attr("fill", "steelblue");
      svg
        .append("text")
        .attr("class", "tooltip")
        .attr("text-anchor", "middle")
        .text(i.data.label + ": " + i.data.count + " Deaths")
        .attr("x", 0)
        .attr("y", -10)
        .attr("font-weight", "bold")
        .attr("font-size", "20px");
    })
    .on("mouseout", function (d, i, data) {
      d3.select(this).attr("fill", color(i.data.label));
      svg.select(".tooltip").remove();
    });
  let legendG = svg
    .selectAll(".legend")
    .data(pie(dataset))
    .enter()
    .append("g")
    .attr("transform", function (d, i) {
      return "translate(" + (i * 70 - 100) + "," + 110 + ")";
    })
    .attr("class", "legend");

  legendG
    .append("rect")
    .attr("width", 10)
    .attr("height", 10)
    .attr("fill", function (d, i) {
      return color(i);
    });

  legendG
    .append("text")
    .text(function (d) {
      return d.data.label;
    })
    .style("font-size", 12)
    .attr("fill", "#7E909A")
    .style("font-family", "Audiowide")
    .attr("y", 10)
    .attr("x", 11);
};

export default draw;
