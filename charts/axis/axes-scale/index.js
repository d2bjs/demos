// Import stylesheets
import "./styles.css";
import { select } from "d3";
import { chartAxis, format } from "d2b";

// Creating the axis object
var axis = chartAxis();

// Div selection from index.html
// Creating the data for the axis chart to be generated
var chart = select('#chart')
  .datum({
    // This is the top x-axis
    // These properties apply to the rest of the axes (x2, y, y2)
    x: {
      scale: 
        {
          // log base
          //base: 5,
          //clamp: true,
          //constant: 2,
          // Max and min bounds along the axis
          forceBounds: {
            max: 30,
            min: 1
          },
          //nice: true ,
        // The type of axis, how the axis data is represented
        //type: "log"
        }
      , 
    },
    // These are the different data sets that will be displayed in the chart
    sets: [
      {
        generators: [{types:["area", "line", "scatter"]}],
        graphs: [
          {
            label: "Area 1",
            values: [
              { x: 1, y: 1 },
              { x: 4, y: 2 },
              { x: 8, y: 3 },
              { x: 16, y: 4 },
              { x: 32, y: 5 }
            ]
          },
          {
            label: "Area 2",
            values: [
              { x: 1, y: 11 },
              { x: 2, y: 10 },
              { x: 3, y: 18 },
              { x: 22, y: 1 },
              { x: 35, y: 12 }
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
