define(['ojs/ojcore', 'knockout', 'globalContext', 'ojs/ojinputtext', 'ojs/ojbutton'],
    function (oj, ko, context) {
        function SearchViewModel() {
            var self = this;
            self.username = ko.observable();
            self.password = ko.observable();
            self.userProperName = null;

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
                if (isValidCredentials()){
                    context.username(self.username());
                    context.userProperName(self.userProperName);
                    context.loggedIn(true);
                }
            };

            var isValidCredentials = function(){
                for (var i = 0; i< mockUserSchema.length; i++){
                    if (self.username() === mockUserSchema[i].username && self.password() === mockUserSchema[i].password){
                        self.userProperName = mockUserSchema[i].userProperName;
                        return true;
                    }
                }
                return false;
            };

            var mockUserSchema = [
                {
                    'username': 'admin',
                    'password': 'admin',
                    'userProperName': 'Admin'
                },
                {
                    'username': 'viewer',
                    'password': 'viewer',
                    'userProperName': 'Viewer'
                },
                {
                    'username': 'srishti@oracle.com',
                    'password': 'srishti',
                    'userProperName': 'Srishti'
                }
            ];
        }

        return SearchViewModel;
    }
);
