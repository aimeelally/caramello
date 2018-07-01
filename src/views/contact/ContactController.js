"use strict";

import TEST from "./contact.html";

angular.module("contact", [])
  .component("contact", {
    template: require("./contact.html"), 
    controller: [ '$scope', 'Contact',
      function CamelCaserController($scope, Contact) {
        
        $scope.contactForm = {};
        $scope.userMessage = '';
        $scope.errorMessage = '';
        $scope.successMessage = '';
        $scope.isSending = false;

        var location = 'Caramello Caser';

        $scope.submitContactForm = function() {
          $scope.isSending = true;
          $scope.errorMessage = '';
          $scope.successMessage = '';
          $scope.contactForm.message = location + ' : ' + $scope.userMessage;
          
          var contactForm = JSON.stringify($scope.contactForm);

          return submitForm(contactForm)
            .then(function() {
              $scope.$apply(function() {
                $scope.successMessage = 'Thanks a mil, your message has sent.';
                $scope.isSending = false;
                $scope.contactForm = {};
                $scope.userMessage = '';
              });
            })
            .catch(function() {
              $scope.$apply(function() {
                $scope.errorMessage = 'Ah no, somethings after going wrong somewhere and your message didn\'t send, would you mind trying again?';
                $scope.isSending = false;
              });
            });
        }; 



        function submitForm(form) {
          return new Promise((resolve, reject) => {
            return Contact.sendMessage(form)
              .then(function(err) {
                err = 'd';
                return err ? reject(err) : resolve();
              });
          });
        }

      }
    ]
  });