import './styles.css';
import { chartSunburst } from 'd2b';
import { select } from 'd3';
import dataOne from './dataOne.js';
import dataTwo from './dataTwo.js';

const sunburst = chartSunburst();
const chart = select('#chart');
const button = document.getElementById('transition');
let transitioned = false;
updateChart();

button.addEventListener('click', function() {
	updateChart();
});

function updateChart() {
	transitioned = !transitioned;
	select('#chart')	
		.datum(transitioned ? dataTwo : dataOne)
		.transition()
		.duration(2000)
		.call(sunburst.advanced);
}

window.addEventListener('resize', function(){
	chart.call(sunburst.advanced);
});