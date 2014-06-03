/**
 * Created by validity on 2/24/14.
 */
function NodeRocketLogo(finder, height, theme) {
  var THEMES = {
    black: {
      border: 'rgb(123, 123, 123)',
      fill: 'rgb(123, 123, 123)',
      fuselage: 'black',
      wings: 'black',
      window: 'white'
    },
    dark: {
      border: 'rgb(123, 123, 123)',
      fill: 'rgb(123, 123, 123)',
      fuselage: 'white',
      wings: 'white',
      window: 'rgb(112, 189, 68)'
    },
    light: {
      border: 'rgb(123, 123, 123)',
      fill: 'rgb(123, 123, 123)',
      fuselage: 'rgb(68, 70, 58)',
      wings: 'rgb(68, 70, 58)',
      window: 'white'
    },
    green: {
      border: 'rgb(123, 123, 123)',
      fill: 'rgb(123, 123, 123)',
      fuselage: 'rgb(68, 70, 58)',
      wings: 'rgb(68, 70, 58)',
      window: 'rgb(112, 189, 68)'
    },
    dark_green: {
      border: 'rgb(123, 123, 123)',
      fill: 'rgb(123, 123, 123)',
      fuselage: 'black',
      wings: 'black',
      window: 'rgb(112, 189, 68)'
    },
    black_b: {
      border: 'black',
      fill: 'rgb(123, 123, 123)',
      fuselage: 'black',
      wings: 'black',
      window: 'white'
    },
    dark_b: {
      border: 'white',
      fill: 'rgb(123, 123, 123)',
      fuselage: 'white',
      wings: 'white',
      window: 'rgb(112, 189, 68)'
    },
    light_b: {
      border: 'rgb(68, 70, 58)',
      fill: 'rgb(123, 123, 123)',
      fuselage: 'rgb(68, 70, 58)',
      wings: 'rgb(68, 70, 58)',
      window: 'white'
    },
    green_b: {
      border: 'rgb(68, 70, 58)',
      fill: 'rgb(123, 123, 123)',
      fuselage: 'rgb(68, 70, 58)',
      wings: 'rgb(68, 70, 58)',
      window: 'rgb(112, 189, 68)'
    },
    dark_green_b: {
      border: 'black',
      fill: 'rgb(123, 123, 123)',
      fuselage: 'black',
      wings: 'black',
      window: 'rgb(112, 189, 68)'
    },
  }

  var borderData = [
    {x: 500, y: 43.5},
    {x: 908, y: 281.5},
    {x: 908, y: 715},
    {x: 500, y: 953},
    {x: 092, y: 715},
    {x: 092, y: 281.5},
    {x: 500, y: 43.5}
  ]

  var fuselageData = [
    {x: 500, y: 87.5},
    {x: 602, y: 147},
    {x: 602, y: 527.5},
    {x: 500, y: 471},
    {x: 398, y: 527.5},
    {x: 398, y: 147},
    {x: 500, y: 87.5}
  ];

  var fuselageNData = [
    {x: 500, y: 509},
    {x: 602, y: 565.5},
    {x: 602, y: 708},
    {x: 545.33, y: 674},
    {x: 545.33, y: 597.5},
    {x: 500, y: 574.81},
    {x: 454.66, y: 597.5},
    {x: 454.66, y: 674},
    {x: 398, y: 708},
    {x: 398, y: 565.5},
    {x: 500, y: 509}
  ];

  var rightWingData = [
    {x: 636, y: 554},
    {x: 738, y: 613.5},
    {x: 738, y: 770.75},
    {x: 636, y: 711.25},
    {x: 636, y: 554}
  ];

  var leftWingData = [
    {x: 364, y: 554},
    {x: 262, y: 613.5},
    {x: 262, y: 770.75},
    {x: 364, y: 711.25},
    {x: 364, y: 554}
  ];

  var windowData = [
    {x: 500, y: 227.5},
    {x: 551, y: 257.25},
    {x: 551, y: 312.5},
    {x: 500, y: 342.25},
    {x: 449, y: 312.5},
    {x: 449, y: 257.25},
    {x: 500, y: 227.5}
  ]

  var SCALE = height / 1000;
  var WIDTH = 1000 * SCALE;
  var HEIGHT = 1000 * SCALE;
  var STROKE = 20 * SCALE;
  var THEME = THEMES[theme] || dark;

  scale(borderData, SCALE, SCALE);
  scale(fuselageData, SCALE, SCALE);
  scale(fuselageNData, SCALE, SCALE);
  scale(rightWingData, SCALE, SCALE);
  scale(leftWingData, SCALE, SCALE);
  scale(windowData, SCALE, SCALE);

  var lineFunction = d3.svg.line()
    .x(function(d) { return d.x; })
    .y(function(d) { return d.y; })
    .interpolate("linear");

  var svg = d3.select(finder).append("svg")
    .style("stroke-linecap", "round")
    .style("stroke-linejoin", "round")
    .style("stroke-width", STROKE)
    .attr("width", WIDTH)
    .attr("height", HEIGHT);

  var borderGraph = svg.append("path")
    .style("stroke-width", STROKE * 1.5)
    .attr("d", lineFunction(borderData))
    .attr("stroke", THEME.border)
    .attr("fill", THEME.fill);

  var fuselageGraph = svg.append("path")
    .attr("d", lineFunction(fuselageData))
    .attr("stroke", THEME.fuselage)
    .attr("fill", THEME.fuselage);

  var fuselageNGraph = svg.append("path")
    .attr("d", lineFunction(fuselageNData))
    .attr("stroke", THEME.window)
    .attr("fill", THEME.window);

  var rightWingGraph = svg.append("path")
    .attr("d", lineFunction(rightWingData))
    .attr("stroke", THEME.wings)
    .attr("fill", THEME.wings);

  var leftWingGraph = svg.append("path")
    .attr("d", lineFunction(leftWingData))
    .attr("stroke", THEME.wings)
    .attr("fill", THEME.wings);

  var windowGraph = svg.append("path")
    .attr("d", lineFunction(windowData))
    .attr("stroke", THEME.window)
    .attr("fill", THEME.window);

  /**
   * Scale the values numerically so that we don't have to use CSS Scaling
   * @param data
   * @param x
   * @param y
   */
  function scale(data, x, y) {
    for (var i = 0; i < data.length; ++i) {
      data[i].x *= x;
      data[i].y *= y;
    }
  }
}