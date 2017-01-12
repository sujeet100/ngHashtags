'use strict';

/**
* A directive for adding facebook like hashtags highlight supported content editable container
*
* Usage:
* <div ng-hashtags ng-model="model" placeholder="Enter space separated hashtags e.g. #coffee #burger"></div>
* + ng-model - the editable container value
* + placeholder - Placeholder to be shown on the editable container
*/

angular.module('ngHashtags', [])

       .directive('ngHashtags', function(){
           return {
               restrict: 'EA',
               replace: true,
               require: 'ngModel',
               scope: {
                   ngModel: '='
               },
               template: '<div contenteditable="true"></div>',
               link: function(scope, elem, attr, ngModel) {

                   function getDecoratedHashTags () {
                     var text = ngModel.$viewValue;
                     if(text) {
                      text = text.replace(/(#[a-z\d-]+)/g, '<span class="tags-highlight" style="background-color: rgba(88, 144, 255, .15);border-bottom: 1px solid rgba(88, 144, 255, .3);">$1</span>')
                     }
                     elem.html(text);
                   }

                   function placeCaretAtEnd(el) {
                       el.focus();
                       if (typeof window.getSelection != "undefined"
                               && typeof document.createRange != "undefined") {
                           var range = document.createRange();
                           range.selectNodeContents(el);
                           range.collapse(false);
                           var sel = window.getSelection();
                           sel.removeAllRanges();
                           sel.addRange(range);
                       } else if (typeof document.body.createTextRange != "undefined") {
                           var textRange = document.body.createTextRange();
                           textRange.moveToElementText(el);
                           textRange.collapse(false);
                           textRange.select();
                       }
                   }


                   function read() {
                     ngModel.$setViewValue(elem.text());
                   };

                   ngModel.$render = function() {
                     elem.html(getDecoratedHashTags() || "");
                   };

                   elem.bind("keyup change", function() {
                     scope.$apply(read);
                     elem.html(getDecoratedHashTags());
                     placeCaretAtEnd(elem[0]);
                   });

                   scope.$watch(
                       function(){
                           return ngModel.$modelValue;
                       }, function(newValue, oldValue){
                           ngModel.$setViewValue(newValue);
                           elem.html(getDecoratedHashTags());
                       }, true );

               }
             };
       });