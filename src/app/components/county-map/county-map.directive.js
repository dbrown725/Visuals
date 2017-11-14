'use strict';

/**
 * @ngdoc directive
 *
 * @name countyMap
 *
 * @description
 * directive for Visuals
 */
(function() {

  angular
    .module('Visuals')
    .directive('countyMap', countyMap);

  //Based on http://bl.ocks.org/michellechandra/0b2ce4923dc9b5809922
  function countyMap() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'app/components/county-map/county-map.directive.html',
      scope: {},
      link: link
    };

    function link(scope, element) {
      var width = 960,
                  height = 500;
      var color = d3.scaleThreshold()
              .domain([.02, .04, .06, .08, .10]) // <-A
              .range(["#f2f0f7", "#dadaeb", "#bcbddc",
                      "#9e9ac8", "#756bb1", "#54278f"]);
      var projection = d3.geoAlbersUsa();
      var path = d3.geoPath()
              .projection(projection);
      var svg = d3.select(".county-map").append("svg")
              .attr("width", width)
              .attr("height", height);
      var g = svg.append("g")
              .call(d3.zoom()
              .scaleExtent([1, 10])
              .on("zoom", zoomHandler));
      d3.json("../../data/us.json", function (error, us) { // <-B
          d3.tsv("../../data/unemployment.tsv",
                  function (error, unemployment) {
              var rateById = {};
              unemployment.forEach(function (d) { // <-C
                  rateById[d.id] = +d.rate;
              });
              g.append("g")
                      .attr("class", "counties")
                      .selectAll("path")
                      .data(topojson.feature(us,
                              us.objects.counties).features)
                      .enter().append("path")
                      .attr("d", path)
                      .style("fill", function (d) {
                          return color(rateById[d.id]); // <-D
                      });
              g.append("path")
                      .datum(topojson.mesh(us, // <-E
                              us.objects.states,
                               function(a, b) { return a !== b; }))
                      .attr("class", "states")
                      .attr("d", path);
          });
      });
      function zoomHandler() {
          var transform = d3.event.transform;
          g.attr("transform", "translate("
                  + transform.x + "," + transform.y
                  + ")scale(" + transform.k + ")");
      }
    }
  }

})();
