"use strict";

import TEST from "./camel-caser.html";
import Caramel from "../../classes/Caramel.js";

angular.module("camelCaser", [])
	.component("camelCaser", {
		template: require("./camel-caser.html"), 
		controller: [ '$scope',
			function CamelCaserController($scope) {
				
        var loremIpsum = "Lorem ip-sum, adipiscing elit.",
            caramel = new Caramel();

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
            outputText = caramel.stripHTML(outputText);
          }

          if ($scope.standardCamelCaseConversion) {
            outputText = caramel.convertToCamelCase(outputText);
          }

          if ($scope.stripSpecialCharacters) {
            outputText = caramel.stripSpecialCharacters(outputText);
          }

          if ($scope.stripNumbers) {
            outputText = caramel.stripNumbers(outputText);
          }

          if ($scope.capitaliseFirstLetter) {
            outputText = caramel.capitaliseFirstLetter(outputText);
          }

          return outputText;

        }


        

        function turnInputAndOutputIntoObect(input, output) {
          var prettyObject = {[output]: input}; 

          return JSON.stringify(prettyObject, undefined, 2);
        }

        function createMultilineObject(input) {
          
          var cleanInput = caramel.stripHTML(input);          
          var arrayOfCleanInput = caramel.getArrayOfTextFromStrippedHtml(cleanInput);
          var newObj = {};

          arrayOfCleanInput.reduce(function(curr,pre) {
            
            var key = pre;

            if ($scope.stripHTML) {
              key = caramel.stripHTML(key);
            }

            if ($scope.standardCamelCaseConversion) {
              key = caramel.convertToCamelCase(key);
            }

            if ($scope.stripSpecialCharacters) {
              key = caramel.stripSpecialCharacters(key);
            }

            if ($scope.stripNumbers) {
              key = caramel.stripNumbers(key);
            }

            if ($scope.capitaliseFirstLetter) {
              key = caramel.capitaliseFirstLetter(key);
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
	
  //([!@#$%\/^&._,*])