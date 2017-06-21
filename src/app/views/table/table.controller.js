'use strict';

/**
 * @ngdoc controller
 *
 * @name Table
 *
 * @description
 * Controller for Visuals
 */
(function () {

  angular
    .module('Visuals')
    .controller('Table', Table);

  function Table($scope, $http) {
    var vm = this;

    vm.foo = [];

    vm.response = {};

    vm.handleDrillDownClick = function(object, column) {
      console.log('object', object);
      console.log('column', column);
      alert('From parent controller\n\nDrillDowned on: ' + column + '\n\nRequest object to send:\n' + JSON.stringify(object));
    };

    function dumpObjectIndented(obj, indent)
    {
      var result = '';
      if (indent === null) {
        indent = '';
      }

      for (var property in obj)
      {
        var value = obj[property];
        if (typeof value === 'string') {
          value = '"' + value + '"';
        } else if (typeof value === 'object')
        {
          if (value instanceof Array)
          {
            // Just let JS convert the Array to a string!
            value = '[ ' + value + ' ]';
          }
          else
          {
            // Recursive dump
            // (replace '  ' by '\t' or something else if you prefer)
            var od = dumpObjectIndented(value, indent + '  ');
            // If you like { on the same line as the key
            //value = '{\n' + od + '\n' + indent + '}';
            // If you prefer { and } to be aligned
            value = '\n' + indent + '{\n' + od + '\n' + indent + '}';
          }
        }
        result += indent + '"' + property + '" : ' + value + ',\n';
      }
      return result.replace(/,\n$/, '');
    }

    vm.retrieveData = function(transaction) {
      console.log('transaction', transaction);
      if(transaction === 'threeDeep') {
        threeDeep();
      } else if (transaction === 'twoDeep') {
        twoDeep();
      } else if (transaction === 'oneDeep') {
        oneDeep();
      }
    };

    //********* REPLACE START **************************************
    function threeDeep() {
        alert('see Dave for threeDeep specific sample code/data');
    }

    function twoDeep() {
      alert('see Dave for twoDeep specific sample code/data');
    }

    function oneDeep() {
      alert('see Dave for oneDeep specific sample code/data');
    }
    //********* REPLACE END **************************************
  }

})();
