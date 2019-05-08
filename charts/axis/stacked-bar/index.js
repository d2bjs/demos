// Import stylesheets
import './styles.css';
import { select } from 'd3';
import { chartAxis } from 'd2b';

// Initialize axis-chart generator
const axis = chartAxis();

const chart = select('#chart')
	.datum({
		x: {
			linearPadding: [-0.1, 0.1]
		},
		sets: [
			{
				generators: [
					{
						type: "bar",
						stackBy: function (d) {return d.stack;}
					}],
				graphs: [
    			    {
    			      label: 'Line 1',
    			      stack: 1,
    			      values: [
    			        {x: 1, y: 25},
    			        {x: 2, y: 38},
    			        {x: 3, y: 24},
    			        {x: 4, y: 60},
    			        {x: 5, y: 22}
    			      ]
    			    },
    			    {
    			      label: 'Line 2',
    			      stack: 1,
    			      values: [
    			        {x: 1, y: 41},
    			        {x: 2, y: 60},
    			        {x: 3, y: 18},
    			        {x: 4, y: 3},
    			        {x: 5, y: 12}
    			      ]
    			    },
    			    {
    			      label: 'Line 3',
    			      stack: 2,
    			      values: [
    			        {x: 1, y: 16},
    			        {x: 2, y: 22},
    			        {x: 3, y: 11},
    			        {x: 4, y: 25},
    			        {x: 5, y: 50}
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