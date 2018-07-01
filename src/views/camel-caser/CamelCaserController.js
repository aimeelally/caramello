"use strict";

import TEST from "./camel-caser.html";

angular.module("camelCaser", [])
	.component("camelCaser", {
		template: require("./camel-caser.html"), 
		controller: [ '$scope', 'Caramel',
			function CamelCaserController($scope, Caramel) {
				
        var loremIpsum = "Lorem ip-sum, adipiscing elit.";

        $scope.standardCamelCaseConversion = false;
        $scope.stripSpecialCharacters = false;
        $scope.stripNumbers = false;
        $scope.capitaliseFirstLetter = false;
        $scope.stripHTML = false;
        $scope.returnAsObject = false;

        $scope.inputText = '';
        $scope.outputText = '';
        

        $scope.startStrip = function() {
          $scope.outputText = strip($scope.inputText);
        }

        $scope.copyToClipboard = function(val) {

          var copyText = document.getElementById('copyArea');
          copyText.select();
          document.execCommand("Copy");
          alert("Copied the text: " + copyText.value);

        }

        function strip(str) {
          
          var outputText = str;

          if ($scope.returnAsObject) {
            outputText = createMultilineObject(outputText);
            return outputText;
          }

          if ($scope.stripHTML) {
            outputText = Caramel.stripHTML(outputText);
          }

          if ($scope.standardCamelCaseConversion) {
            outputText = Caramel.convertToCamelCase(outputText);
          }

          if ($scope.stripSpecialCharacters) {
            outputText = Caramel.stripSpecialCharacters(outputText);
          }

          if ($scope.stripNumbers) {
            outputText = Caramel.stripNumbers(outputText);
          }

          if ($scope.capitaliseFirstLetter) {
            outputText = Caramel.capitaliseFirstLetter(outputText);
          }

          return outputText;

        }


        function turnInputAndOutputIntoObect(input, output) {
          var prettyObject = {[output]: input}; 

          return JSON.stringify(prettyObject, undefined, 2);
        }
        

        function createMultilineObject(input) {
          
          var cleanInput = Caramel.stripHTML(input);          
          var arrayOfCleanInput = Caramel.getArrayOfTextFromStrippedHtml(cleanInput);
          var newObj = {};

          arrayOfCleanInput.reduce(function(curr,pre) {
            
            var key = pre;

            if ($scope.stripHTML) {
              key = Caramel.stripHTML(key);
            }

            if ($scope.standardCamelCaseConversion) {
              key = Caramel.convertToCamelCase(key);
            }

            if ($scope.stripSpecialCharacters) {
              key = Caramel.stripSpecialCharacters(key);
            }

            if ($scope.stripNumbers) {
              key = Caramel.stripNumbers(key);
            }

            if ($scope.capitaliseFirstLetter) {
              key = Caramel.capitaliseFirstLetter(key);
            }
            
            if(newObj[key]) {
              return;
            }
            newObj[key] = pre;
            return newObj;

          },{});

          return JSON.stringify(newObj, undefined, 2);
          

        }


			}
		]
	});