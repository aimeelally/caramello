"use strict";
angular.module("camelCaser", [])
	.component("camelCaser", {
		template: require("./camel-caser.html"), 
		controller: [ '$timeout', '$scope',
			function CamelCaserController($timeout, $scope) {
				
        $scope.stripWhiteSpace = true;
        $scope.stripSpecialCharacters = false;
        $scope.inputText = '';
        $scope.outputText = '';

        $scope.startStrip = function() {
          strip($scope.inputText);
        }

        function strip(str) {
          //var output = stripSpacesAndCapitalise(str);
          //$scope.outputText = stripSpecialCharacters(output);

          // if ($scope.stripWhiteSpace) {
          //   stripSpacesAndCapitalise(str)
          // }

          // return $scope.outputText;


          //*********************

          
          // if nothing selected
          if (!$scope.stripWhiteSpace && !$scope.stripSpecialCharacters) {
            // return nothing
            // in future return warning to select something
            return;
          } 

          // if strip white space AND special chars
          if ($scope.stripWhiteSpace && $scope.stripSpecialCharacters) {
            // strip whitespace
            // strip special chars
            // return output
            var output = stripSpacesAndCapitalise(str);
            $scope.outputText = stripSpecialCharacters(output);
            return $scope.outputText;
          }

          // if strip white spaces
          if ($scope.stripWhiteSpace) {
            // strip white spaces
            // return output
            $scope.outputText = stripSpacesAndCapitalise(str);
            return $scope.outputText;
          }
            

          // if strip special chars
          if ($scope.stripSpecialCharacters) {
            // strip special chars
            // return output
            $scope.outputText = stripSpecialCharacters(str);
            return $scope.outputText;
          } 


            

        }

        function stripSpacesAndCapitalise(str) {
          return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, 
            function(match, index) {
              if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
              return index === 0 ? match.toLowerCase() : match.toUpperCase();
            });
        }

        function stripSpecialCharacters(str) {
          return str.replace(/([!@#$%\/^&-._,*])/g, "");
        }

			}
		]
	});
	
  //([!@#$%\/^&._,*])