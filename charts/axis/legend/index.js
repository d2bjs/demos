// Import stylesheets
import "./styles.css";
// Import a symbol for the legend icon
import { select, symbolSquare } from "d3";
import { chartAxis } from "d2b";

// Creates the axis chart object
var axis = chartAxis();

// Div selection from index.html
// Creating the data for the sankey chart to be generated
var chart = select("#chart")
  .datum({
    // The legend object and its properties
    legend: {
      // Toggles the click-ability of the legend icons
      clickable: false,
      // Toggles the double click-ability of the legend icons
      dblclickable: false,
      // This changes all the icons in the legend, imported from d3 above
      icon: symbolSquare,
      // This changes the orientation of the lengend in relation to the axis chart
      orient: "top",
    },
    // These are the different data sets that will be displayed in the chart
    sets: [
      {
        // The types of graphs that can be generated
        generators: [{types:["area", "line", "scatter"]}],
        // The actual data sets for the graphs 
        graphs: [
          {
            // The title for an area graph
            label: "Area 1",
            // The data points that will be used to generate the area graph
            values: [
              { x: 1, y: 15 },
              { x: 2, y: 18 },
              { x: 3, y: 14 },
              { x: 4, y: 10 },
              { x: 5, y: 12 }
            ]
          },
          {
            label: "Area 2",
            values: [
              { x: 1, y: 11 },
              { x: 2, y: 10 },
              { x: 3, y: 18 },
              { x: 4, y: 1 },
              { x: 5, y: 12 }
            ]
          }
        ]
      }
    ]
  })
  .call(axis.advanced);

window.addEventListener("resize", function() {
  chart.call(axis.advanced);
});
