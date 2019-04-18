// Import stylesheets
import './styles.css';
import { select, scaleLinear, psize } from 'd3';
import { chartAxis } from 'd2b';

const axis = chartAxis(),
	size = scaleLinear().domain([5,70]).range([10,6000])

const chart = select('#chart')
	.datum({
		x: {
			// scale: {
			// 	type: "linear",
			// 	domain: [5, 70],
			// 	range: [10, 60000],
			// }
		},
		sets: [
			{
				generators: [{types: ["scatter"]}],
				psize: (d => size(d.size)),
				graphs: [
			    {
			      label: 'Line 1',
			      values: [
			        {x: 1, y: 25, size: 3000},
			        {x: 2, y: 38, size: 66},
			        {x: 3, y: 24, size: 20},
			        {x: 4, y: 60, size: 10},
			        {x: 5, y: 22, size: 25}
			      ]
			    },
			    {
			      label: 'Line 2',
			      values: [
			        {x: 1, y: 41, size: 30},
			        {x: 2, y: 60, size: 29},
			        {x: 3, y: 18, size: 7},
			        {x: 4, y: 3,  size: 10},
			        {x: 5, y: 12, size: 15}
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