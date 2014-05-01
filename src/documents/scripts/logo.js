/**
 * Created by validity on 2/24/14.
 */
function NodeRocketLogo(finder, height, theme) {
  var THEMES = {
    black: {
      fuselage: 'black',
      wings: 'black',
      window: 'white'
    },
    dark: {
      fuselage: 'white',
      wings: 'white',
      window: 'rgb(112, 189, 68)'
    },
    light: {
      fuselage: 'rgb(68, 70, 58)',
      wings: 'rgb(68, 70, 58)',
      window: 'white'
    },
    green: {
      fuselage: 'rgb(68, 70, 58)',
      wings: 'rgb(68, 70, 58)',
      window: 'rgb(112, 189, 68)'
    },
    dark_green: {
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
    {x: 500, y: 111.5},
    {x: 602, y: 171},
    {x: 602, y: 732},
    {x: 545.33, y: 698},
    {x: 545.33, y: 621.5},
    {x: 500, y: 598.81},
    {x: 454.66, y: 621.5},
    {x: 454.66, y: 698},
    {x: 398, y: 732},
    {x: 398, y: 171},
    {x: 500, y: 111.5}
  ];

  var rightWingData = [
    {x: 636, y: 596},
    {x: 738, y: 655.5},
    {x: 738, y: 812.75},
    {x: 636, y: 753.25},
    {x: 636, y: 596}
  ];

  var leftWingData = [
    {x: 364, y: 596},
    {x: 262, y: 655.5},
    {x: 262, y: 812.75},
    {x: 364, y: 753.25},
    {x: 364, y: 596}
  ];

  var windowData = [
    {x: 500, y: 247.5},
    {x: 551, y: 277.25},
    {x: 551, y: 332.5},
    {x: 500, y: 362.25},
    {x: 449, y: 332.5},
    {x: 449, y: 277.25},
    {x: 500, y: 247.5}
  ]

  var SCALE = height / 1000;
  var WIDTH = 1000 * SCALE;
  var HEIGHT = 1000 * SCALE;
  var STROKE = 20 * SCALE;
  var THEME = THEMES[theme] || dark;

  scale(borderData, SCALE, SCALE);
  scale(fuselageData, SCALE, SCALE);
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
    .style("stroke-width", STROKE * 3)
    .attr("d", lineFunction(borderData))
    .attr("stroke", THEME.fuselage)
    .attr("fill", 'rgb(123, 123, 123)');

  var fuselageGraph = svg.append("path")
    .attr("d", lineFunction(fuselageData))
    .attr("stroke", THEME.fuselage)
    .attr("fill", THEME.fuselage);

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