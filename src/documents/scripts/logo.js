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
    light: {
      fuselage: 'rgb(68, 70, 58)',
      wings: 'rgb(68, 70, 58)',
      window: 'rgb(112, 189, 68)'
    },
    green: {
    fuselage: 'rgb(68, 70, 58)',
      wings: 'rgb(68, 70, 58)',
      window: 'white'
    },
    dark: {
      fuselage: 'white',
      wings: 'white',
      window: 'rgb(112, 189, 68)'
    }
  }

  var fuselageData = [
    {x: 500, y: 90},
    {x: 620, y: 160},
    {x: 620, y: 820},
    {x: 553.33, y: 780},
    {x: 553.33, y: 690},
    {x: 500, y: 663.3},
    {x: 446.66, y: 690},
    {x: 446.66, y: 780},
    {x: 380, y: 820},
    {x: 380, y: 160},
    {x: 500, y: 90}
  ];

  var rightWingData = [
    {x: 660, y: 660},
    {x: 780, y: 730},
    {x: 780, y: 915},
    {x: 660, y: 845},
    {x: 660, y: 660}
  ];

  var leftWingData = [
    {x: 340, y: 660},
    {x: 220, y: 730},
    {x: 220, y: 915},
    {x: 340, y: 845},
    {x: 340, y: 660}
  ];

  var windowData = [
    {x: 500, y: 250},
    {x: 560, y: 285},
    {x: 560, y: 350},
    {x: 500, y: 385},
    {x: 440, y: 350},
    {x: 440, y: 285},
    {x: 500, y: 250}
  ]

  var SCALE = height / 1000;
  var WIDTH = 1000 * SCALE;
  var HEIGHT = 1000 * SCALE;
  var STROKE = 20 * SCALE;
  var THEME = THEMES[theme] || dark;

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