// Import stylesheets
import "./styles.css";
import { chartSunburst } from "d2b"
import { select, format } from "d3"

// Creating the sunburst object
var sunburst = chartSunburst();


// Div selection from index.html
// Creating the data for the sunburst chart to be generated
var chart = select('#chart')
	.datum({
		// Tooltip is the box that pops up upon hovering over the surburst arc
		tooltip:
		{
			// You can change the position of the tooltip
			at: "top right",
			// You can toggle the movement of the tooltip with the mouse
			followMouse: false,
			// Orientation of the tooltip
			my: "top",
			// This formats the string within the tooltip box
			// Anything enclosed in ticks represents the string
			// Anything enclosed in ticks AND "${}" will be computed
			html: function (data, value, percent) { 
				return `<b>Label:</b>${data.label} <b>Value:</b>${value} ${percent > 1 ? '' : ` ${format('.0%')(percent)}`}
			` } 
		}, 
		// This is the root of the tree/sunburst chart
		// All the data below starts off here
		root: {
			// The name of the root layer that appears on the chart when hovering over the layer
			label: "root",
			// This is all the data in the tree
			children: [
				{
					label: 'child 1',
					children: [
						{
							label: 'child 1-1',
							size: 100
						},
						{
							label: 'child 1-2',
							children: [
								{
									label: 'child 1-2-1',
									size: 5
								},
								{
									label: 'child 1-3-1',
									size: 8
								}
							]
						},
						{
							label: 'child 1-3',
							children: [
								{
									label: 'child 1-3-1',
									children: [
										{
											label: 'child 1-3-1-1',
											size: 2
										},
										{
											label: 'child 1-3-1-2',
											size: 16
										}
									]
								},
								{
									label: 'child 1-3-2',
									size: 8
								}
							]
						}
					]
				},
				{
					label: 'child 2',
					size: 25
				}
			]
		},
		
	})
	.call(sunburst.advanced);
		
	window.addEventListener('resize', function(){
		chart.call(sunburst.advanced);
	})