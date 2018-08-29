define(['ojs/ojcore', 'knockout', 'globalContext', 'ojs/ojinputtext', 'ojs/ojbutton'],
    function (oj, ko, context) {
        function dashboardViewModel() {
            self.goToViewNotices = function(){
                var router = oj.Router.rootInstance;
                router.go('viewNotices');
            };
        }

        return dashboardViewModel;
    }
);
