define(['ojs/ojcore', 'knockout', 'globalContext', 'ojs/ojinputtext', 'ojs/ojbutton'],
    function (oj, ko, context) {
        function dashboardViewModel() {
            self.noOfReviews = ko.observable(0);
            self.goToViewNotices = function(){
                var router = oj.Router.rootInstance;
                router.go('viewNotices');
            };

            self.reviewNewNotices = function(){
                var router = oj.Router.rootInstance;
                router.go('reviewNewNotices');
            };

            self.createNewNotice = function(){
                var router = oj.Router.rootInstance;
                router.go('createNoticeP1');
            };
        }

        return dashboardViewModel;
    }
);
