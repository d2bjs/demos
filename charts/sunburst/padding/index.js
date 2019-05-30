// Import stylesheets
import './styles.css';
import { chartSunburst } from 'd2b';
import { select } from 'd3';

// Creating the sunburst object
const sunburst = chartSunburst();


// Div selection from index.html
// Creating the data for the sunburst chart to be generated
const chart = select('#chart')
	.datum({
		padAngle: 0.01,
		// Spacing between ancestor/root (inner ring) and descendents (outer rings)
		ancestorPadding: 50,
		// The chart's inner padding (not the legend)
		// If a number is used instead of an object will apply the number to all four sides
		chartPadding: {
			bottom: 10,
			top: 10,
			left: 250,
			right: 25,
		},
		// This is the root of the tree/sunburst chart
		// All the data below starts off here
		root: {
			// The name of the root layer that appears on the chart when hovering over the layer
			label: 'root',
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
	});