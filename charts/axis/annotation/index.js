// Import stylesheets
import "./styles.css";
import { select, annotationCalloutCircle, annotationBadge } from "d3";
import { chartAxis} from "d2b";

const axis = chartAxis();

// define annotation objects

const annotation1 = {
  location: 'y1',
  dy: -50,
  type: annotationCalloutCircle,
  note: {
    title: 'Peak',
    label: 'Here is the peak of one of the area charts'
  },
  connector: {
    end: "dot"
  },
  subject: {
    radius: 15,
    text: 'peak'
  }
};

const annotation2 = {
  location: 'y1',
  dy: -200,
  type: annotationCalloutCircle,
  note: {
    title: 'Minimum',
    label: 'And here is the minimum of the other area chart',
    wrap: 200
  },
  connector: {
    end: "dot"
  },
  subject: {
    radius: 15,
    text: 'min'
  }
};

// select chart and set datum

const chart = select('#chart')
	.datum({
		y: {
      linearPadding: [-0.11, 0.22]      
    },
		annotations: [			
		],
		sets: [
			{
				generators: [{types:["area", "line", "scatter"]}],
				graphs: [
			    {
			      label: 'Area 1',
			      values: [
			        {x: 1, y: 25},
			        {x: 2, y: 38},
			        {x: 3, y: 24},
			        {
			          x: 4, 
			          y: 60,
			          annotations: [annotation1]
			        },
			        {x: 5, y: 22}
			      ]
			    },
			    {
			      label: 'Area 2',
			      values: [
			        {x: 1, y: 41},
			        {x: 2, y: 60},
			        {x: 3, y: 18},
			        {
			          x: 4, 
			          y: 5,
			          annotations: [annotation2]
			        },
			        {x: 5, y: 12}
			      ]
			    }
				]
			}
		]
	})
	.call(update);

// on window resize update the chart

window.addEventListener('resize', function(){
	chart.call(update);
});

// chart update function, dynamically set annotation dx and type attributes

function update (chart) {
  const width = document.body.clientWidth,
      type = width < 400 ? annotationBadge : annotationCalloutCircle;
  annotation1.dx = width / 12 - 50;
  annotation2.dx = -width / 8 + 30;
  annotation1.type = annotation2.type = type;
  
  chart.call(axis.advanced);
}