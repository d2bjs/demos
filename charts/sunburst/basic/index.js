// Import stylesheets
import "./styles.css";
import { chartSunburst } from "d2b"
// scaleOrdinal and schemeAccent is for the color generator for the arcs
import { select, scaleOrdinal, schemeAccent } from "d3"

// Creating the sunburst object
var sunburst = chartSunburst();

// You can use different kinds of colorGenerators
// ex) https://github.com/d3/d3-scale-chromatic
var color = scaleOrdinal(schemeAccent);

// Div selection from index.html
// Creating the data for the sunburst chart to be generated
var chart = select('#chart')
	.datum({
		// Start angle of the chart (radians)
		startAngle: 90 * (Math.PI)/180,
		// End angle of the chart (radians)
		endAngle: 360 * (Math.PI)/180,
		// Toggle the ability to zoom when clicking on a sunburst arc
		zoomable: false,
		// The size (thickness) of the sunburst ancestor (inner) arc
		ancestorBandingExponent: 1,
		// The size (thickness) of the sunburst arc descendant (outer) arc
		// Each next layer increases by the exponent number
		descendantBandingExponent: 2,
		// Changes the color for ALL the nodes
        // Cycles through colors per node, each node reserving its own color 
		color: d => color(d.label),
		root: {
			label: "root",
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