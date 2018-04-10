"use strict";
angular.module("camelCaser", [])
	.component("camelCaser", {
		template: require("./camel-caser.html"), 
		controller: [ '$timeout', '$scope',
			function CamelCaserController($timeout, $scope) {
				
        $scope.stripWhiteSpace = true;
        $scope.stripSpecialCharacters = true;
        $scope.returnAsObject = true;
        $scope.inputText = '';
        $scope.outputText = '';
        // $scope.inputPlaceholder = '';
        // $scope.ouputPlaceholder = '';

        var loremIpsum = "Lorem ip-sum, adipiscing elit.";

        $scope.startStrip = function() {
          $scope.outputText = strip($scope.inputText);
        }

        init();

        function init() {
          $scope.inputPlaceholder = getInputPlaceholder();
          $scope.outputPlaceholder = getOutputPlaceholder();
        }

        function strip(str) {
          
          // if nothing selected
          if (!$scope.stripWhiteSpace && 
              !$scope.stripSpecialCharacters && 
              !$scope.returnAsObject) {
            
            // do nothing
            return $scope.inputText;
          } 

          // if strip white space AND strip special chars
          if ($scope.stripWhiteSpace && $scope.stripSpecialCharacters) {
            // if return as object
            if ($scope.returnAsObject) {
              // return as object
              var output = stripSpacesAndCapitalise(str);
              output = stripSpecialCharacters(output);

              return turnInputAndOutputIntoObect($scope.inputText, output);

            }
              
            // strip whitespace
            // strip special chars
            var output = stripSpacesAndCapitalise(str);
            return stripSpecialCharacters(output);            
            
          }

          // if strip white spaces
          if ($scope.stripWhiteSpace) {
            // strip white spaces
            return stripSpacesAndCapitalise(str);
          }
            

          // if strip special chars
          if ($scope.stripSpecialCharacters) {
            // strip special chars
            return stripSpecialCharacters(str);
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

        function turnInputAndOutputIntoObect(input, output) {
          return {
            [output]: input
          };
        }


        function getInputPlaceholder() {
          // if ($scope.stripWhiteSpace && $scope.stripSpecialCharacters && $scope.returnAsObject) {
          //   return loremIpsum;
          // }
          return loremIpsum;
        }

        function getOutputPlaceholder() {
          if ($scope.stripWhiteSpace && $scope.stripSpecialCharacters && $scope.returnAsObject) {
            var output = stripSpacesAndCapitalise(loremIpsum);
            output = stripSpecialCharacters(output);
            return turnInputAndOutputIntoObect(loremIpsum, output);
          }
          else if ($scope.stripWhiteSpace && $scope.stripSpecialCharacters) {
            var output = stripSpacesAndCapitalise(loremIpsum);
            return stripSpecialCharacters(output);
          }
          else if ($scope.stripSpecialCharacters) {
            return stripSpecialCharacters(loremIpsum);
          }
          else {
            return stripWhiteSpace(loremIpsum);
          }
        }






			}
		]
	});
	
  //([!@#$%\/^&._,*])