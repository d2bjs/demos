import "./styles.css";
import { select } from "d3";
import { chartPie } from "d2b";

const click = document.getElementById("transition");
click.addEventListener("click", function() {
	changeChart();
});

const pie = chartPie();

var transition = false;

const chart = select('#chart')
	.datum([
		{label: 'arc 1', value: 13},
		{label: 'arc 2', value: 61},
		{label: 'arc 3', value: 30},
		{label: 'arc 5', value: 80}
	])
	.call(pie.advanced);

function changeChart() {
	if(transition) 
	{
		chart
		.datum([
            {label: 'arc 1', value: 13},
            {label: 'arc 2', value: 61},
            {label: 'arc 3', value: 30},
            {label: 'arc 5', value: 80}
		])
		.transition()
		.duration(2000)
		.call(pie.advanced);	
		transition = false;
	}
	else 
	{
		chart
		.datum([
			{label: 'arc 1', value: 23},
			{label: 'arc 2', value: 31},
			{label: 'arc 3', value: 80},
			{label: 'arc 4', value: 8}
		])
		.transition()
		.duration(2000)
		.call(pie.advanced);	
		transition = true;
	}

};


window.addEventListener('resize', function(){
	chart.call(pie.advanced);
});