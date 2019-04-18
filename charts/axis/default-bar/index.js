// Import stylesheets
import './styles.css';
import { select } from 'd3';
import { chartAxis } from 'd2b';

const axis = chartAxis();

const chart = select('#chart')
	.datum({
		x: {
			// Without this scale object the linear scale being used will overflow off of the plane.
			scale: 
			{
				type: "band",
				domain: [1, 2, 3, 4, 5]
			}
		},
		sets: [
			{
				generators: [{types:["bar"]}],
				graphs: [
    			    {
    			      label: 'Bar 1',
    			      values: [
    			        {x: 1, y: 25},
    			        {x: 2, y: 38},
    			        {x: 3, y: 24},
    			        {x: 4, y: 60},
    			        {x: 5, y: 22}
    			      ]
    			    },
    			    {
    			      label: 'Bar 2',
    			      values: [
    			        {x: 1, y: 41},
    			        {x: 2, y: 60},
    			        {x: 3, y: 18},
    			        {x: 4, y: 3},
    			        {x: 5, y: 12}
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