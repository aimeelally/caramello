"use strict";
angular.module("designSystem", [])
	.component("designSystem", {
		template: require("./design-system.html"), 
		controller: [ '$timeout',
			function DesignSystemController($timeout) {
				
        var that = this;

        $timeout(function() {
          that.showSidePanel = true;
        },1); 

        var colorWell
        var defaultColor = "#0000ff";

        window.addEventListener("load", startup, false);
        function startup() {
          colorWell = document.querySelector("#colorWell");
          colorWell.value = defaultColor;
          colorWell.addEventListener("input", updateFirst, false);
          colorWell.addEventListener("change", updateAll, false);
          colorWell.select();
        }
        function updateFirst(event) {
          var el = document.querySelector(".modify-primary-color");

          if (el) {
            el.style.background = event.target.value;
          }

        }function updateAll(event) {
          document.querySelectorAll(".modify-primary-color").forEach(function(el) {
            el.style.background = event.target.value;
          });
        }

			}
		]
	});
	