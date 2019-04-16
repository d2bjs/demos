// Import stylesheets
import "./styles.css";
import { chartSunburst } from "d2b"
import { select } from "d3"

// Creating the sunburst object
const sunburst = chartSunburst();


// Div selection from index.html
// Creating the data for the sunburst chart to be generated
const chart = select('#chart')
	.datum({
		// This is the root of the tree/sunburst chart
		// All the data below starts off here
		root: {
			// Color of a sunburst arc
			color: "#00F0FF",
			// The text box that appears on the side of the chart when hovering over the layer
			breadcrumb: "Breadcrumb!",
			// The name of the root layer that appears on the chart when hovering over the layer
			label: "boot",
			// This is all the data in the tree
			children: [
				{
					// Tooltip is the box that pops up upon hovering over the link
					// This will overwrite the label
					tooltip: "This is a tooltip!",
					// Color of a sunburst arc
					color: "#000000",
					// The name that appears on the sunbusrt arc upon hovering 
					label: 'child 1',
					// Initial sunburst arc selection, looks zoomed in
					selected: true,
					// The text box that appears on the side of the chart when hovering over the layer
					breadcrumb: "child1 breadcrumb",
					// Has more children
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
							// selected: true,
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
					// Does not have any children
				}
			]
		},
	})
	.call(sunburst.advanced);
		
	window.addEventListener('resize', function(){
		chart.call(sunburst.advanced);
	})