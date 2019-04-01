// Import stylesheets
import "./styles.css";
import { select, symbolSquare } from "d3";
import { chartAxis, svgArea, svgLine, svgScatter } from "d2b";

// Creates the axis chart object
var axis = chartAxis();

// Div selection from index.html
// Creating the data for the sankey chart to be generated
var chart = select("#chart")
  .datum({
    // The chart's inner padding (not the legend)
    // If you do not specify each of the properties in the padding/margin object
    // It will apply the number to all four sides
    chartPadding: {
      bottom: 25,
      left: 15,
      right: 15,
      top: 25
    },
    padding: {
      bottom: 25,
      left: 15,
      right: 15,
      top: 25
    },
    // The padding (inner) between the chart and the legend
    planePadding: {
      bottom: 50,
      left: 25,
      right: 15,
      top: 50
    },
    // The margin (outer) between the chart and the legend
    planeMargin: {
      bottom: 25,
      left: 15,
      right: 15,
      top: 25
    },
    // These are the different data sets that will be displayed in the chart
    sets: [
      {
        // The types of graphs that can be generated
        generators: [{types:["area", "line", "scatter"]}],
        // The actual data sets for the graphs 
        graphs: [
          {
            label: "Area 1",
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
