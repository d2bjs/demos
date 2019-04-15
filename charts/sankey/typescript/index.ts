import './styles.css';
import { select, nest } from 'd3';
import { chartSankey } from 'd2b';

// Import the sankey data interface from d2b +1.0.0.
import { ChartSankeyData } from 'd2b/src/types';

// Generators are not typed yet, for now refer to the api docs.
const sankey: any = chartSankey();

const chart = select('#chart');

// Strictly type the sankey data.
const datum: ChartSankeyData = {
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
};

chart
    .datum(datum)
    .call(sankey.advanced);

window.onresize = function () { chart.call(sankey.advanced); };
