// Import stylesheets
import "./styles.css";
import { select } from "d3";
// Import a symbol for the legend icon
import {symbolSquare} from "d3";
import { chartPie } from "d2b";

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
      {label: 'Arc label', value: 23},
      {label: 'arc 2', value: 31},
      {label: 'arc 3', value: 80},
      {label: 'arc 4', value: 8}
    ],
    legend: 
    {
      // This will toggle the click-ability of the legend icons
      clickable: false,
      // This will toggle the double click-ability of the legend icons
      dblclickable: false,
      // This changes all the icons in the legend, imported from d3 above
      icon: symbolSquare,
      // This changes the orientation of the lengend in relation to the pie chart
      orient: "right",
      // This changes the pad angle of each pie slice in radians.
      padAngle: 10
    } 
  })
	.call(pie.advanced);

window.addEventListener('resize', function(){
	chart.call(pie.advanced);
});