import "./styles.css";
import { chartSunburst } from "d2b"
import { select } from "d3"

const sunburst = chartSunburst();

sunburst.chartFrame().size({height: 500});

const chart = select('.sunburst-chart');

chart
	.datum({
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
	});
	  
update();

function update () {
	chart.call(sunburst.advanced);
}

window.addEventListener('resize', update);