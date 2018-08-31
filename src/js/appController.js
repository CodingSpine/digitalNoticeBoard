/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your application specific code will go here
 */
define(['ojs/ojcore', 'knockout', 'globalContext', 'ojs/ojknockout', 'ojs/ojmodule', 'ojs/ojrouter'],
    function(oj, ko, context) {
        function ControllerViewModel() {
            var self = this;

            // Media queries for repsonsive layouts
            var smQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY);
            self.smScreen = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery);

            // Header
            self.appName = ko.observable("Notice Board");
            self.loggedIn = ko.observable(false);
            self.username = ko.observable();
            self.currentModule = ko.observable("login");
            self.modulePath = {
                name: 'login'
            };

            var base = document.getElementsByTagName('base')[0].getAttribute('href');
            oj.Router.defaults['baseUrl'] = base;

            // Retrieve the router static instance and configure the states
            var router = oj.Router.rootInstance;
            router.configure(
                {
                    'dashboard':  { label: 'Dashboard', value: 'dashboard', isDefault: true },
                    'viewNotices': { label: 'View Notices', value: 'viewNotices' },
                    'createNotice': { label: 'Create Notice', value: 'createNotice' }
                }
            );

            context.loggedIn.subscribe(function(newValue) {
                self.loggedIn(newValue);
                self.username(context.username());
                if (newValue === true) {
                    router.go('dashboard');
                }
            });

            self.userMenuSelect = function(event) {
                var selectedValue = event.target.value;
                if (selectedValue === 'out'){
                    context.username('');
                    context.loggedIn(false);
                    window.location.href = base;
                }
            }

            self.goToViewNotices = function(){

            };

            self.createNewNotice = function(){

            };

            self.goToNextPage2 = function(){

            };

            self.goToNextPage3 = function(){

            };

            self.loggedInConfig = ko.pureComputed(function() {
                /*
                 * Use 'observableModuleConfig' to get acccess to the observable
                 * state parameters.  Referencing this property will also make the
                 * parameters to be accessible via the view parameters passed to
                 * each module's view model.
                 * Calling the router's observable from our own
                 * computed observable automatically establishes a dependency so that
                 * we'll be notified if the router's observableModuleConfig should
                 * change [to a new state].
                 */
                var mc = router.observableModuleConfig();
                var name = mc.name();
                // if (name === 'demo-router-stateParams.html') {
                //     name = 'list';
                // }
                /*
                 * Create a module config from the router's observableModuleConfig
                 * so that our module can access the observable state parameters.
                 */
                var config = {};
                var key;
                for (key in mc) {
                  if (mc.hasOwnProperty(key)) {
                    config[key] = mc[key];
                  }
                }
                config.name = name;
                return config;
            })

            // Footer
            function footerLink(name, id, linkTarget) {
                this.name = name;
                this.linkId = id;
                this.linkTarget = linkTarget;
            }
            self.footerLinks = ko.observableArray([
                new footerLink('About Oracle', 'aboutOracle', 'http://www.oracle.com/us/corporate/index.html#menu-about'),
                new footerLink('Contact Us', 'contactUs', 'http://www.oracle.com/us/corporate/contact/index.html'),
                new footerLink('Legal Notices', 'legalNotices', 'http://www.oracle.com/us/legal/index.html'),
                new footerLink('Terms Of Use', 'termsOfUse', 'http://www.oracle.com/us/legal/terms/index.html'),
                new footerLink('Your Privacy Rights', 'yourPrivacyRights', 'http://www.oracle.com/us/legal/privacy/index.html')
            ]);
        }

        return new ControllerViewModel();
    }
);
