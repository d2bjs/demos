// Import stylesheets
import './styles.css';
import { select } from 'd3';
import { chartAxis } from 'd2b';

const axis = chartAxis();
    
var chart = select('#chart')
	.datum({
		x: {
			linearPadding: [-0.1, 0.1],
			label: 'Some X Label',
		},
		sets: [{
				generators: [{types: ["bubblePack"]}],
				graphs: [
				    { hidden: false,
              label: 'bubble pack 1',
              values: [
                {
                  label: 'one',
                  children: [
                    {
                      label: 'one-one',
                      size: 5,
                      x: 7,
                      y: 25
                    }
                  ]
                },
                {
                  expanded: true,
                  label: 'two',
                  children: [
                    {
                      label: 'two-one',
                      size: 5,
                      x: 3,
                      y: 15
                    },
                    {
                      label: 'two-two',
                      children: [
                        {
                          label: 'two-two-one',
                          size: 2,
                          x: 6,
                          y: 8
                        },
                        {
                          label: 'two-two-two',
                          size: 17,
                          x: 8,
                          y: 21
                        }
                      ]
                    }
                  ]
                }
              ]
            }
				]
		}]
	})
	.call(axis.advanced);

window.addEventListener('resize', function(){
  x.range([0, document.documentElement.clientWidth+10]);
	chart.call(axis.advanced);
});