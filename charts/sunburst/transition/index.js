import "./styles.css";
import { chartSunburst } from "d2b"
import { select } from "d3"

const sunburst = chartSunburst();

const click = document.getElementById("transition");
click.addEventListener("click", function() {
	changeChart();
});

var transition = false;

const chart = select('#chart')
	.datum({
	root: {
		label: 'root',
		children: [
			{
			label: 'child 1',
			children: [
				{
				label: 'child 1-1',
				size: 10
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
			}
		]
		}
	},
	)
	.call(sunburst.advanced);

function changeChart() {
	if(transition)
	{
		chart	
		.datum({
			root: {
				label: 'root',
				children: [
					{
					label: 'child 1',
					children: [
						{
						label: 'child 1-1',
						size: 10
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
					}
				]
				}
			},
			)
			.transition()
			.duration(2000)
			.call(sunburst.advanced);	
			transition = false;;
	}
	else
	{
		chart	
		.datum({
			root: {
				label: 'root',
				children: [
					{
					label: 'child 1',
					children: [
						{
						label: 'child 1-1',
						size: 20
						},
						{
						label: 'child 1-2',
						children: [
							{
							label: 'child 1-2-1',
							size: 15
							},
							{
							label: 'child 1-3-1',
							size: 10
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
								size: 20
								},
								{
								label: 'child 1-3-1-2',
								size: 6
								}
							]
							},
							{
							label: 'child 1-3-2',
							size: 15
							}
						]
						}
					]
					},
					{
					label: 'child 2',
					size: 75
					},
					{
					label: 'child 3',
					size: 35
					},
					{
					label: 'child 4',
					size: 15
					}
				]
				}
			},
			)
			.transition()
			.duration(2000)
			.call(sunburst.advanced);	
			transition = true;;
	}
}

window.addEventListener('resize', function(){
	chart.call(sunburst.advanced);
});