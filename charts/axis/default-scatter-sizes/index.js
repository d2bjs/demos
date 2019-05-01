// Import stylesheets
import './styles.css';
import { select, symbolSquare, scaleLinear, } from 'd3';
import { chartAxis } from 'd2b';	

const axis = chartAxis()

const chart = select('#chart');
	chart.datum({	
		sets: [
			{
				generators: [
					{
						type: "scatter",
						size: 100,
						symbol: symbolSquare,
					},
				],
				graphs: [
			    {
			      label: 'Scatter 1',
			      values: [
			        {x: 1, y: 25, size: 30},
			        {x: 2, y: 38, size: 66},
			        {x: 3, y: 24, size: 20},
			        {x: 4, y: 60, size: 10},
			        {x: 5, y: 22, size: 25}
			      ]
			    },
			    {
			      label: 'Scatter 2',
			      values: [
			        {x: 1, y: 41, size: 30},
			        {x: 2, y: 60, size: 29},
			        {x: 3, y: 18, size: 7},
			        {x: 4, y: 3,  size: 10},
			        {x: 5, y: 12, size: 15}
			      ]
					},
					{
			      label: 'Scatter 3',
			      values: [
			        {x: 1, y: 11, size: 130},
			        {x: 2, y: 55, size: 229},
			        {x: 3, y: 12, size: 17},
			        {x: 4, y: 31,  size: 20},
			        {x: 5, y: 21, size: 25}
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