/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
define(['ojs/ojcore', 'knockout','jquery', 'ojs/ojarraydataprovider',
'ojs/ojknockout', 'ojs/ojselectcombobox', 'globalContext', 'ojs/ojinputtext', 'ojs/ojbutton', 'ojs/ojlabel','ojs/ojformlayout', 'ojs/ojanimation', 'ojs/ojfilepicker', 'ojs/ojprogresslist', 'ojs/ojdatetimepicker',
'ojs/ojvalidation-datetime', 'ojs/ojtimezonedata'],
    function(oj, ko, $, ArrayDataProvider) {
        function createNoticeViewModel() {
            var self = this;
            self.isNotFirstSetOfQuestions = ko.observable(false);
            self.isNotLastSetOfQuestions = ko.observable(true);
            var currentSection = 'section1';


            self.goToDashboard = function(){
                var router = oj.Router.rootInstance;
                router.go('dashboard');
            };

            self.slideBack = function(){
                if (currentSection === 'section2'){
                    oj.AnimationUtils.slideOut($('#section2')[0], {direction: 'end'}).then(function(){
                        $('#section2').hide();
                        $('#section1').show();
                        oj.AnimationUtils.slideIn($('#section1')[0], {direction: 'end'});
                        currentSection = 'section1';
                        self.isNotFirstSetOfQuestions(false);
                    });
                }
                if (currentSection === 'section3'){
                    oj.AnimationUtils.slideOut($('#section3')[0], {direction: 'end'}).then(function(){
                        $('#section3').hide();
                        $('#section2').show();
                        oj.AnimationUtils.slideIn($('#section2')[0], {direction: 'end'});
                        currentSection = 'section2';
                        self.isNotLastSetOfQuestions(true);
                    });
                }
            };

            self.slideForward = function(){
                if (currentSection === 'section1'){
                    self.isNotFirstSetOfQuestions(true);
                    oj.AnimationUtils.slideOut($('#section1')[0]).then(function(){
                        $('#section1').hide();
                        $('#section2').show();
                        oj.AnimationUtils.slideIn($('#section2')[0]);
                        currentSection = 'section2';
                    });
                }
                if (currentSection === 'section2'){
                    oj.AnimationUtils.slideOut($('#section2')[0]).then(function(){
                        $('#section2').hide();
                        $('#section3').show();
                        oj.AnimationUtils.slideIn($('#section3')[0]);
                        currentSection = 'section3';
                        self.isNotLastSetOfQuestions(false);
                    });
                }
            };

            self.completeCreation = function(){
                $('#section3').hide();
                $('#loader').show();
                setTimeout(function(){
                    $('#loader').hide();
                    $('#tick').show();
                }, 1400);
                setTimeout(function(){
                    self.goToDashboard();
                }, 2400);
            };

            self.val = ko.observable();
            self.minStartDate = ko.observable(oj.IntlConverterUtils.dateToLocalIso(new Date()));
            self.minEndDate = ko.observable(oj.IntlConverterUtils.dateToLocalIso(new Date()));
            self.startDate = ko.observable();
            self.endDate = ko.observable();
            self.startDate.subscribe(function(newValue){
                self.minEndDate(newValue);
            });
            self.multiple = ko.observable(true);
            self.multipleStr = ko.pureComputed(function() {
                return self.multiple() ? "multiple" : "single";
            }, self);

            self.fileNames = ko.observableArray([]);
            var counter = 0;
            self.selectListener = function(event) {
                var files = event.detail.files;
                for (var i = 0; i < files.length; i++) {
                    self.fileNames.push({id: counter++, name: files[i].name});
                }
            }


            this.dataProvider = new ArrayDataProvider(this.fileNames, {'keyAttributes': 'id'});

            this.isSmall = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(
                oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY));

            // For small screens: labels on top
            // For medium screens and up: labels inline
            this.labelEdge = ko.computed(function() {
                return this.isSmall() ? "top" : "start";
            }, this);

        }

        return createNoticeViewModel;
    }
);
