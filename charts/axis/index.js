// Import stylesheets
import './style.scss'
import {select} from 'd3'
import {chartAxis, svgArea, svgLine, svgScatter} from 'd2b'

const axis = chartAxis().duration(5000)

const chart = select('#chart')
	.datum({
		sets: [
			{
				generators: [svgArea(), svgLine(), svgScatter()],
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
	.call(axis)

window.addEventListener('resize', function(){
	chart.transition().duration(1000).call(axis)
})