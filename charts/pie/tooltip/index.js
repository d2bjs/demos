// Import stylesheets
import "./styles.css";
import { select } from "d3";
import { format } from "d3";
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
      {label: 'Arc label', value: 23},
      // Tooltip is the box that pops up upon hovering over the pie slice
      {tooltip: "Tooltip text here", label: 'arc 2', value: 31},
      {label: 'arc 3', value: 80},
      {label: 'arc 4', value: 8}
    ],
    // Tooltip is the box that pops up upon hovering over the pie slice
    tooltip:
    {
      // You can change the position of the tooltip
      at: "top right",
      // You can toggle the movement of the tooltip with the mouse
      followMouse: false,
      // Orientation of the tooltip
      my: "top",
      // This formats the string within the tooltip box
      // Anything enclosed in ticks represents the string
      // Anything enclosed in ticks AND "${}" will be computed
      html: (d, percent) => `<b>Pie slice label:</b> ${d.label}. <b>Pie slice value:</b> ${d.value} (${format('.0%')(percent)})`
    } 
  })
	.call(pie.advanced);

window.addEventListener('resize', function(){
	chart.call(pie.advanced);
});