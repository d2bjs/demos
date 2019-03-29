// Import stylesheets
import "./styles.css";
import { select } from "d3";
import {chartPie} from "d2b";

var pie = chartPie();

var chart = select('#chart')
	.datum({
    values: 
    [
      {label: 'arc 1', value: 23, tooltip: "hello!"},
      {label: 'arc 2', value: 31},
      {label: 'arc 3', value: 80},
      {label: 'arc 4', value: 8}
    ] 
  })
	.call(pie.advanced);

window.addEventListener('resize', function(){
	chart.call(pie.advanced);
});