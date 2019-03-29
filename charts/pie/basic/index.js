// Import stylesheets
import "./styles.css";
import { select } from "d3";
import {chartPie} from "d2b";
// Import a symbol for the legend icon
import {symbolSquare} from "d3";

// Creating the pie object
var pie = chartPie();

// Div selection from index.html
// Creating the data for the pie chart to be generated
var chart = select('#chart')
	.datum({
    // The values property can manipulate the actual pie slice data
    // Each item in the array represents an individual pie slice
    values: 
    [
      // The label (name) of the arc with a value (size) of the pie slice
      {label: 'arc 1', value: 23},
      // The color of the pie slice
      {color: 'black', label: 'arc 2', value: 31},
      // The default visibility of the pie slice
      // You can click on the legend icon to toggle the visibility
      {empty: 'true', label: 'arc 3', value: 80},
      // The legend icon, some examples are included here: https://github.com/d3/d3-shape#symbols
      // Need to import that symbol from d3 above
      {legendIcon: symbolSquare, label: 'arc 4', value: 8}
    ] 
  })
	.call(pie.advanced);

window.addEventListener('resize', function(){
	chart.call(pie.advanced);
});