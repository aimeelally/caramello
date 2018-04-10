"use strict";
angular.module("camelCaser", [])
	.component("camelCaser", {
		template: require("./camel-caser.html"), 
		controller: [ '$timeout', '$scope',
			function CamelCaserController($timeout, $scope) {
				
        $scope.inputText = '';
        $scope.outputText = '';

        $scope.submit = function() {
          getObj($scope.inputText);
        }

        function getObj(str) {
          var output = stripSpacesAndCapitalise(str);
          $scope.outputText = stripSpecialCharacters(output);

          return $scope.outputText;
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