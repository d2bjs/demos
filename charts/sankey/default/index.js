import "./styles.css";
import { select } from "d3";
import { chartSankey } from "d2b";

var sankey = chartSankey();

var chart = select('#chart');

chart
    .datum({
      nodes: [
        {name: 'Node A'},
        {name: 'Node B'},
        {name: 'Node C'},
        {name: 'Node D'},
        {name: 'Node E'},
      ],
      links: [
        {source: 'Node A', target: 'Node E', value: 2},
        {source: 'Node A', target: 'Node C', value: 2},
        {source: 'Node B', target: 'Node C', value: 2},
        {source: 'Node B', target: 'Node D', value: 2},
        {source: 'Node C', target: 'Node D', value: 2},
        {source: 'Node C', target: 'Node E', value: 2},
        {source: 'Node D', target: 'Node E', value: 4},
      ]
    })
    .call(sankey.advanced);

window.onresize = function () { chart.call(sankey); };