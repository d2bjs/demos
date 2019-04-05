// Import stylesheets
import "./styles.css";
import { select, scaleOrdinal, schemeAccent } from "d3";
import { chartSankey } from "d2b";

// Creating the sankey object
var sankey = chartSankey();

// Div selection from index.html
// Creating the data for the sankey chart to be generated
var chart = select('#chart');

// You can use different kinds of colorGenerators
// ex) https://github.com/d3/d3-scale-chromatic
var color = scaleOrdinal(schemeAccent);
  
chart
    .datum({
      // Links between the horizontal connection of two nodes (points) of the sankey chart
      // This customized all links as a group
      link: {
        // These colors create a gradient, with the source blending into the target color
        // Changes the source color of ALL the source links
        // Can be a string
        sourceColor: "black",
        // Changes the target color of ALL the target links
        // Can be an accessor function
        targetColor: (data, targetColor) => targetColor,
        // Tooltip is the box that pops up upon hovering over the link
        tooltip: {
          // You can change the position of the tooltip 
          at: "top right",
          // Toggles the movement of the tooltip with the mouse
          followMouse: false,
          // This formats the string within the tooltip box
          // Anything enclosed in ticks represents the string
          // Anything enclosed in ticks AND "${}" will be computed
          html: function (data, source, target) { return ` <b>Source:</b> ${source.name} <b>Target:</b> ${target.name}: ${data.value} ` },
          // Orientation of the tooltip
          my: "bottom"
        }
      },
      // A node connected to another node through a link
      node: {
        align: "left",
        // Changes the color for ALL the nodes
        // Cycles through colors per node, each node reserving its own color
        color: data => color(data.name),
        // Toggle the drag-abiliy of the node along the x-axis
        draggableX: true,
        // Toggle the drag-ability of the node along the y-axis
        draggableY: true,
        // The max length of the label before it starts to wrap to the next line(s)
        labelWrapLength: 25,
        // Vertical separation between the nodes
        padding: 50,
        // Sort the nodes
        sort: undefined,
        // Tooltip is the box that pops up upon hovering over the link 
        tooltip: {
          // You can change the position of the tooltip 
          at: "bottom right",
          // Toggles the movement of the tooltip with the mouse
          followMouse: true,
          html: (data, value) => `<b>One Node -> ${data.name}:</b> ${value}`,
          // Orientation of the tooltip
          my: "right"
        },
      },
      // The nodes mark the beginning and end points that are joined by links
      nodes: [
        // Node name represents the label of the node
        {name: 'Node A'},
        // Node color is the vertical rectangle of the node
        {color: "#0000FF", name: 'Node B'},
        // Tooltip is the box that pops up upon hovering over the link
        {tooltip: "This is a node tooltip!", name: 'Node C'},
        {name: 'Node D'},
        {name: 'Node E'},
      ],
      // Links between the horizonal connection of two nodes (points) of the sankey chart
      // This includes all the links in the chart, but each link can be customized
      links: [
        // Souce node 'A' connecting to targe node 'E', with a value of 2
        {source: 'Node A', target: 'Node E', value: 2},
        // Source node is black which is connecting to target node, which is red
        // These colors create a gradient, with the source blending into the target color
        {sourceColor: '#FFFFFF', source: 'Node A', targetColor: '#000000', target: 'Node C', value: 2},
        // Tooltip is the box that pops up upon hovering over the link
        {tooltip: "This is a link tooltip!", source: 'Node B', target: 'Node C', value: 2},
        {source: 'Node B', target: 'Node D', value: 2},
        {source: 'Node C', target: 'Node D', value: 2},
        {source: 'Node C', target: 'Node E', value: 2},
        {source: 'Node D', target: 'Node E', value: 4},
      ]
    })
    .call(sankey.advanced);

window.onresize = function () { chart.call(sankey.advanced); };
