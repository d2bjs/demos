import "./styles.css";
import { select } from "d3";
import { chartSankey } from "d2b";

const sankey = chartSankey();

const chart = select('#chart');

const click = document.getElementById("transition");
click.addEventListener("click", function() {
  changeChart();
});

var transition = false;

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

function changeChart() {
  if(transition)
  {
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
    .transition()
    .duration(2000)
    .call(sankey.advanced);
    transition = false;
  }

  else 
  {
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
        {source: 'Node A', target: 'Node C', value: 4},
        {source: 'Node A', target: 'Node D', value: 1},
        {source: 'Node A', target: 'Node E', value: 1},
        {source: 'Node B', target: 'Node C', value: 1},
        {source: 'Node B', target: 'Node D', value: 3},
        {source: 'Node B', target: 'Node E', value: 4},
        {source: 'Node C', target: 'Node E', value: 1},
      ]
    })
    .transition()
    .duration(2000)
    .call(sankey.advanced);
    transition = true;
  }
}

window.onresize = function () { chart.call(sankey.advanced); };