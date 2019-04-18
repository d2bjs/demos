// Import stylesheets
import './styles.css';
import { select } from 'd3';
import { chartAxis } from 'd2b';

const axis = chartAxis();

const chart = select('#chart')
	.datum({
		// Here is the linear padding.
		x: {
			linearPadding: [-0.05, 0.05]
		},
		y: {
			linearPadding: [-0.05, 0.05]
		},
		sets: [
			{
				generators: [{types: ["boxPlot"]}],
				graphs: [
          {
            label: 'Box Plot 1',
            values: [
              {x: 1, maximum: 10,   minimum: 1,   upperQuartile: 7.5,   lowerQuartile: 2.8, median: 5.4, outliers: [0.5, 12, 13.3]},
              {x: 2, maximum: 12,   minimum: 3,   upperQuartile: 9,     lowerQuartile: 5.8, median: 7},
              {x: 3, maximum: 15,   minimum: 4.5, upperQuartile: 12.8,  lowerQuartile: 6.2, median: 7.3}
            ]
          },
          {
            label: 'Box Plot 2',
            values: [
              {x: 4, maximum: 6,    minimum: 0,   upperQuartile: 5,     lowerQuartile: 1.4, median: 3.8},
              {x: 5, maximum: 8.2,  minimum: 1.2, upperQuartile: 7,     lowerQuartile: 2.8, median: 5.5, outliers: [1, 11.1, 14.5]},
              {x: 6, maximum: 12.8, minimum: 4.2, upperQuartile: 11,    lowerQuartile: 4.8, median: 6.4}
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