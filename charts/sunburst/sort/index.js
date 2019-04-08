// Import stylesheets
import "./styles.css";
import { chartSunburst } from "d2b"
import { select } from "d3"

// Creating the sunburst object
var sunburst = chartSunburst();

// Div selection from index.html
// Creating the data for the sunburst chart to be generated
var chart = select('#chart')
	.datum({
		// Sort by the size of the children
		sort: (a,b) => b.size - a.size,
		root: {
			label: "root",
			children: [
				{
					label: 'child 1',
					size: 35,
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