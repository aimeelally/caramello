"use strict";
angular.module("camelCaser", [])
	.component("camelCaser", {
		template: require("./camel-caser.html"), 
		controller: [ '$timeout', '$scope',
			function CamelCaserController($timeout, $scope) {
				
        var loremIpsum = "Lorem ip-sum, adipiscing elit.";

        $scope.stripWhiteSpace = false;
        $scope.stripSpecialCharacters = false;
        $scope.stripNumbers = false;
        $scope.stripHTML = false;

        $scope.returnAsObject = false;
        $scope.inputText = '';
        $scope.outputText = '';
        

        $scope.startStrip = function() {
          $scope.outputText = strip($scope.inputText);
        }

        function strip(str) {
          var outputText = str;

          if ($scope.stripHTML) {
            outputText = stripHTML(outputText);
          }

          if ($scope.stripWhiteSpace) {
            outputText = stripSpacesAndCapitalise(outputText);
          }

          if ($scope.stripSpecialCharacters) {
            outputText = stripSpecialCharacters(outputText);
          }

          if ($scope.stripNumbers) {
            // add function
          }

          if ($scope.returnAsObject) {
            outputText = turnInputAndOutputIntoObect($scope.inputText, outputText);
          }

          return outputText;

        }

        function stripHTML(str) {
          return str.replace(/(<([^>]+)>)/ig,"");
        }

        function stripSpacesAndCapitalise(str) {
          return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, 
            function(match, index) {
              if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
              // lowercases first letter
              return index === 0 ? match.toLowerCase() : match.toUpperCase();
            });
        }

        function capitaliseFirstLetter(str) {
          return str.replace(/^[a-z]/, (u) => u.toUpperCase());
        }

        function stripSpecialCharacters(str) {
          return str.replace(/([!@:;#$%\/^&-._,*])/g, "");
        }

        function turnInputAndOutputIntoObect(input, output) {
          return `"${[output]}\": \"${input}"`;
        }


			}
		]
	});
	
  //([!@#$%\/^&._,*])