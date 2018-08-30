/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
define(['ojs/ojcore', 'knockout','jquery', 'ojs/ojarraydataprovider','ojs/ojknockout','ojs/ojfilepicker',
     'ojs/ojknockout', 'ojs/ojtoolbar', 'ojs/ojbutton', 
    'ojs/ojfilepicker', 'ojs/ojprogresslist'],
    function(oj, ko, $,ArrayDataProvider) {
        function createNoticeP1() {
            var self = this;
            self.button1Text = "Back";
            self.button2Text = "Next";
            self.val = ko.observable("English");
            
//            self.clickedButton = ko.observable("(Not clicked yet)");
//            self.buttonClick = function(event){
//                self.clickedButton("Go to another page");
//                return true;
//            };
            
            self.goBackToPage1 = function(){
                var router = oj.Router.rootInstance;
                router.go('createNoticeP1');
            };
            
            self.goToNextPage3 = function(){
                var router = oj.Router.rootInstance;
                router.go('createNoticeP3');
            };
                      
            this.isSmall = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(
                       oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY));
            
              // For small screens: labels on top
      // For medium screens and up: labels inline
      this.labelEdge = ko.computed(function() {
        return this.isSmall() ? "top" : "start";
      }, this);
      
      self.multiple = ko.observable(true);
      self.multipleStr = ko.pureComputed(function() {
        return self.multiple() ? "multiple" : "single";
      }, self);
      
       self.fileNames = ko.observableArray([]);

      self.selectListener = function(event) {
        var files = event.detail.files;
        for (var i = 0; i < files.length; i++) {
          self.fileNames.push(files[i].name);
        }
      }
      
      
        }

        return createNoticeP1;
    }
);



