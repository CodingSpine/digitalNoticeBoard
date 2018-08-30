/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
define(['ojs/ojcore', 'knockout','jquery', 'ojs/ojknockout', 'ojs/ojselectcombobox', 'globalContext', 'ojs/ojinputtext', 'ojs/ojbutton', 'ojs/ojlabel','ojs/ojformlayout'],
    function(oj, ko, context) {
        function createNoticeP1() {
            var self = this;
            self.button1Text = "Back";
            self.button2Text = "Next";
            self.val = ko.observable("English");
            
            self.clickedButton = ko.observable("(Not clicked yet)");
            self.goToDashboard = function(){
                var router = oj.Router.rootInstance;
                router.go('dashboard');
            };
            
            self.goToNextPage2 = function(){
                var router = oj.Router.rootInstance;
                router.go('createNoticeP2');
            };
            
            this.isSmall = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(
                       oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY));
            
              // For small screens: labels on top
      // For medium screens and up: labels inline
      this.labelEdge = ko.computed(function() {
        return this.isSmall() ? "top" : "start";
      }, this);

        }

        return createNoticeP1;
    }
);

