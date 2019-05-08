// Import stylesheets
import "./styles.css";
import { select } from "d3";
import { chartPie } from "d2b";

// Creating the pie object
const pie = chartPie();

// Div selection from index.html
// Creating the data for the pie chart to be generated
const chart = select('#chart')
	.datum({
    // The values property can manipulate the actual pie slice data
    // Each item in the array represents an individual pie slice
    values: 
    [
      // The label (name) of the arc with a value (size) of the pie slice
      {label: 'arc 1', value: 23},
      {label: 'arc 2', value: 31},
      {label: 'arc 3', value: 80},
      {label: 'arc 4', value: 8}
    ],
    // This changes the padding angle between pie slices in radians.
    padAngle: 0.5
  })
	.call(pie.advanced);

window.addEventListener('resize', function(){
	chart.call(pie.advanced);
});