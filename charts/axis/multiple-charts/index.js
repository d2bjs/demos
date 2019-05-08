// Import stylesheets
import "./styles.css";
import { select } from "d3";
import { chartAxis } from "d2b";

const axis = chartAxis()

const chart = select('#chart')
	.datum({
		x: {
			linearPadding: [-0.1, 0.1]
		},
		sets: [
			{
				// This generator uses the same data to create 
				// each listed graph type
				generators: [{types:["area", "scatter"]}],
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
			},
			{
				// This generator uses the same data to create 
				// each listed graph type
				generators: [{types:["scatter", "bar", "line"]}],
				graphs: [
			    {
			      label: 'Line/Bar 1',
			      values: [
			        {x: 1, y: 15},
			        {x: 2, y: 38},
			        {x: 3, y: 54},
			        {x: 4, y: 15},
			        {x: 5, y: 43}
			      ]
			    },
			    {
			      label: 'Line/Bar 2',
			      values: [
			        {x: 1, y: 22},
			        {x: 2, y: 16},
			        {x: 3, y: 25},
			        {x: 4, y: 36},
			        {x: 5, y: 13}
			      ]
					}
				]
			},
			{
				generators: [{type: "bubblePack"}],
				graphs: [
					{ hidden: false,
						label: 'bubble pack 1',
						values: [
							{
								label: 'one',
								children: [
									{
										label: 'one-one',
										size: 9,
										x: 4,
										y: 45
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
										x: 5,
										y: 15
									},
									{
										label: 'two-two',
										children: [
											{
												label: 'two-two-one',
												size: 2,
												x: 1,
												y: 28
											},
											{
												label: 'two-two-two',
												size: 11,
												x: 2,
												y: 21
											}
										]
									}
								]
							}
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