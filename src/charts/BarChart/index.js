import React from "react";
import { USMap } from "./vis";
import { useState } from "react";

/* eslint-disable react/prop-types */
function BarChart(props) {
  const [selectedState, setSelectedState] = useState("");

  const handleStateClick = (d, state) => {
    setSelectedState(state);
    props.changeSelectState(state);
  };
  
  return (
    <div className="vis-barchart">
    {/* <USMap onStateClick={handleStateClick} {...props} changeSelectState={props.changeSelectState} data={selectedState} /> */}

    </div>
  );
}


export default BarChart;