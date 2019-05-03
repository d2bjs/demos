// Import stylesheets
import './styles.css';
import { select, format } from 'd3';
import { chartAxis } from 'd2b';

// Initialize axis-chart generator
const axis = chartAxis();

const chart = select('#chart')
	.datum({
		x: {
			label: 'Acres',
			labelOrient: "outer middle",
			ticks: 3
		},
		legend: {
			orient: "right"
		},
		tooltip: {
			title: function (d) { return d[0].y; },
			row: function (d) { return format(d.x); },
			trackX: false,
			trackY: true
		},
		sets: [
			{
				generators: [
					{
						type:"bar",
						orient: "horizontal"
					}
				],
				graphs: [
			    {
			      label: '2002',
			      values: [
			        {x: 1060295, y: 'Grapes'},
			        {x: 464025, y: 'Apples'},
			        {x: 184495, y: 'Peaches'},
			        {x: 148839, y: 'Plums and Prunes'},
			        {x: 91735, y: 'Sweet Cherries'},
			        {x: 75570, y: 'Avocados'},
			        {x: 80801, y: 'Pears'},
			        {x: 47138, y: 'Tart Cherries'}
			      ]
			    },
			    {
			      label: '2007',
			      values: [
			        {x: 1051407, y: 'Grapes'},
			        {x: 398770, y: 'Apples'},
			        {x: 149237, y: 'Peaches'},
			        {x: 109319, y: 'Plums and Prunes'},
			        {x: 100705, y: 'Sweet Cherries'},
			        {x: 82647, y: 'Avocados'},
			        {x: 68216, y: 'Pears'},
			        {x: 49561, y: 'Tart Cherries'}
			      ]
			    }
				]
			}
		]
	})
	.call(axis.advanced);

window.addEventListener('resize', function(){
	chart.call(axis.advanced);
});