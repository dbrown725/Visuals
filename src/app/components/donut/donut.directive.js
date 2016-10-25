'use strict';

/**
 * @ngdoc directive
 *
 * @name donut
 *
 * @description
 * directive for Visuals
 */
(function () {

  angular
    .module('Visuals')
    .directive('donut', donut);

    //Based on https://bl.ocks.org/mbostock/3887193
    function donut() {
      // constants
      var width = 960,
          height = 500,
          radius = Math.min(width, height) / 2;

      var color = d3.scaleOrdinal()
          .range(['#98abc5', '#8a89a6', '#7b6888', '#6b486b', '#a05d56', '#d0743c', '#ff8c00']);

      return {
        restrict: 'AE',
        replace: true,
        link: link
      };

      function link(scope, element) {
        var arc = d3.arc()
            .outerRadius(radius - 10)
            .innerRadius(radius - 150);

        var pie = d3.pie()
            .sort(null)
            .value(function(d) { return d.population; });

        var svg = d3.select(element[0]).append('svg')
            .attr('width', width)
            .attr('height', height)
            .append('g')
            .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

        d3.csv('data/donut.csv', type, function(error, data) {
          if (error) {
              console.log('error', error);
              throw error;
          }

          var g = svg.selectAll('.arc')
              .data(pie(data))
            .enter().append('g')
              .attr('class', 'arc');

          g.append('path')
              .attr('d', arc)
              .style('fill', function(d) { return color(d.data.age); });

          g.append('text')
              .attr('transform', function(d) { return 'translate(' + arc.centroid(d) + ')'; })
              .attr('dy', '.35em')
              .text(function(d) { return d.data.age; });
        });

        function type(d) {
          d.population = +d.population;
          return d;
        }
      }
    }


})();
