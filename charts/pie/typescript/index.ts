import "./styles.css";
import { select } from "d3";
import { chartPie } from "d2b";

// Import the sunburst data interface from d2b +1.0.0.
import { ChartPieData } from 'd2b/src/types';

const pie: any = chartPie();

const chart = select('#chart');

const datum: ChartPieData = {


}


// [
//   {label: 'arc 1', value: 23},
//   {label: 'arc 2', value: 31},
//   {label: 'arc 3', value: 80},
//   {label: 'arc 4', value: 8}
// ];

  chart
    .datum(datum)
    .call(pie.advanced);

window.addEventListener('resize', function(){
	chart.call(pie.advanced);
});