
var chart = d3.chart.architectureTree();
chart.diameter(960).data(data);

d3.select("#graph").call(chart);


