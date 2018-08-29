define(['ojs/ojcore', 'knockout', 'globalContext', 'ojs/ojinputtext', 'ojs/ojbutton'],
    function (oj, ko, context) {
        function SearchViewModel() {
            var self = this;
            self.username = ko.observable();
            self.password = ko.observable();

            self.username.subscribe(function(newValue){
                if (typeof newValue !== 'undefined' && typeof self.password() !== 'undefined'){
                    self.login();
                }
            });

            self.password.subscribe(function(newValue){
                if (typeof newValue !== 'undefined' && typeof self.username() !== 'undefined'){
                    self.login();
                }
            });

            self.login = function(){
                if (self.username() === 'admin' && self.password() === 'admin'){
                    context.username(self.username());
                    context.loggedIn(true);
                }
            };
        }

        return SearchViewModel;
    }
);
