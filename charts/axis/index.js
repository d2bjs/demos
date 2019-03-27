// Import stylesheets
import "./styles.css";
import { select } from "d3";
import { chartAxis, svgArea, svgLine, svgScatter } from "d2b";

var axis = chartAxis();

var chart = select("#chart")
  .datum({
    sets: [
      {
        generators: [svgArea(), svgLine(), svgScatter()],
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
  .call(axis);

window.addEventListener("resize", function() {
  chart.call(axis);
});
