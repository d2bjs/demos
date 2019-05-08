// Import stylesheets
import "./styles.css";
import { select, curveBasis } from "d3";
import { chartAxis } from "d2b";

const axis = chartAxis();


const chart = select('#chart')
	.datum({
		sets: [
			{
				generators: [
					{
						types:["area", "line"],
						curve: curveBasis,
					}
				],
				graphs: [
			    {
			      label: 'Area 1',
			      values: [
			        {x: 1, y: 25},
			        {x: 2, y: 38},
			        {x: 3, y: 24},
			        {x: 4, y: 60},
			        {x: 5, y: 22}
			      ]
			    },
			    {
			      label: 'Area 2',
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