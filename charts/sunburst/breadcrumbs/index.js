// Import stylesheets
import "./styles.css";
import { chartSunburst } from "d2b"
import { select, format } from "d3"

// Creating the sunburst object
var sunburst = chartSunburst();


// Div selection from html
// Creating the data for the sunburst chart to be generated
var chart = select('#chart')
	.datum({
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
		// Breadcrumbs are the expanding horizontal list the appears on
		// the side of the chart when you hover over the sunburst slices
		breadcrumbs: {
			// Toggles breadcrumb visibility (default is true)
			enabled: true,
			// This shows up next to each breadcrumb when you hover over a slice
			html: function (data, value, percent) { 
				return `${data.label} ${value} ${percent > 1 ? '' :` (${format('.0%')(percent)}) `}`
			}, 
			// Orientation of sunburst
			orient: "left", 
		},

	})
	.call(sunburst.advanced);
		
	window.addEventListener('resize', function(){
		chart.call(sunburst.advanced);
	})