// Import stylesheets
import "./styles.css";
import { chartSunburst } from "d2b"
// scaleOrdinal and schemeAccent is for the color generator for the arcs
import { select, scaleOrdinal, schemeAccent } from "d3"

// Creating the sunburst object
const sunburst = chartSunburst();

// You can use different kinds of colorGenerators
// ex) https://github.com/d3/d3-scale-chromatic
const color = scaleOrdinal(schemeAccent);

// Div selection from index.html
// Creating the data for the sunburst chart to be generated
const chart = select('#chart')
	.datum({
		// The roundness of the corners of each arc
		cornerRadius: 10,
		// Inner radius (the inside 'hole/gap')
		innerRadius: (width, height) => Math.min(width, height) / 2,
		// Outer radius (the outside ring)
		outerRadius: (width, height) => Math.min(190, Math.min(width, height) / 1),
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