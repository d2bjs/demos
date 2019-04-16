// Import stylesheets
import './styles.css';
import { select } from 'd3';
import { chartAxis } from 'd2b';

// Import the axis data interface from d2b +1.0.0.
import { ChartAxisData } from 'd2b/src/types';

const axis: any = chartAxis();

// select chart and set datum

const chart = select('#chart');

const datum: ChartAxisData = {
  sets: [
    {
      generators: [{
        types: ['line', 'scatter']
      }],
      graphs: [
        {
          label: 'Line 1',
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
          values: [
            {x: 1, y: 41},
            {x: 2, y: 60},
            {x: 3, y: 18},
            {x: 4, y: 5},
            {x: 5, y: 12}
          ]
        }
      ]
    }
  ]
}

chart
  .datum(datum)
	.call(axis.advanced);
	
window.addEventListener('resize', function(){
	chart.call(axis.advanced);
});
