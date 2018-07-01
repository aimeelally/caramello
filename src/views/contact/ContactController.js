"use strict";

import TEST from "./contact.html";

angular.module("contact", [])
  .component("contact", {
    template: require("./contact.html"), 
    controller: [ '$scope', 'Contact',
      function CamelCaserController($scope, Contact) {
        
        $scope.contactForm = {};
        $scope.userMessage = '';

        var location = 'Caramello Caser';

        $scope.submitContactForm = function() {
          $scope.contactForm.message = location + ' : ' + $scope.userMessage;
          var contactForm = JSON.stringify($scope.contactForm);
          return Contact.sendMessage(contactForm);
        }; 

      }
    ]
  });