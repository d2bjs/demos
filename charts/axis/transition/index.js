// Import stylesheets
import "./styles.css";
import { select } from "d3";
import { chartAxis } from "d2b";

const axis = chartAxis()

const click = document.getElementById("transition");
click.addEventListener("click", function() {
	changeChart();
});

var transition = false;

const chart = select('#chart')
	.datum({
		sets: [
			{
				generators: [{type: "area"}],
				graphs: [
			    {
			      label: 'Area 1',
			      values: [
			        {x: 1, y: 25},
			        {x: 2, y: 38},
			        {x: 3, y: 24},
			        {x: 4, y: 60},
			        {x: 5, y: 22}
			      ]
			    },
			    {
			      label: 'Area 2',
			      values: [
			        {x: 1, y: 41},
			        {x: 2, y: 60},
			        {x: 3, y: 18},
			        {x: 4, y: 3},
			        {x: 5, y: 12}
			      ]
			    }
				]
			}
		]
	})
	.call(axis.advanced);


	function changeChart() {
		if(transition)
		{
			chart
			.datum({
				sets: [
					{
						generators: [{type: "area"}],
						graphs: [
							{
								label: 'Area 1',
								values: [
									{x: 1, y: 25},
									{x: 2, y: 38},
									{x: 3, y: 24},
									{x: 4, y: 60},
									{x: 5, y: 22}
								]
							},
							{
								label: 'Area 2',
								values: [
									{x: 1, y: 41},
									{x: 2, y: 60},
									{x: 3, y: 18},
									{x: 4, y: 3},
									{x: 5, y: 12}
								]
							}
						]
					}
				]
			})
			.transition()
			.duration(2000)
			.call(axis.advanced);
			transition = false;
		}
		else 
		{
			chart
			.datum({
				sets: [
					{
						generators: [{type: "area"}],
						graphs: [
							{
								label: 'Area 1',
								values: [
									{x: 1, y: 5},
									{x: 2, y: 8},
									{x: 3, y: 4},
									{x: 4, y: 1},
									{x: 5, y: 12}
								]
							},
							{
								label: 'Area 2',
								values: [
									{x: 1, y: 21},
									{x: 2, y: 10},
									{x: 3, y: 8},
									{x: 4, y: 30},
									{x: 5, y: 21}
								]
							}
						]
					}
				]
			})
			.transition()
			.duration(2000)
			.call(axis.advanced);
			transition = true;
		}

	};

window.addEventListener('resize', function(){
	chart.call(axis.advanced);
});