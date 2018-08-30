define(['ojs/ojcore', 'knockout', 'globalContext', 'ojs/ojlistview', 'ojs/ojinputtext', 'ojs/ojbutton', 'ojs/ojdialog'],
    function (oj, ko, context) {
        function dashboardViewModel() {
            self.noOfReviews = ko.observable(0);
            //self.imageLocation = ko.observable('../../css/images/1.png');

            self.locations = [
                '../../css/images/1.png',
                '../../css/images/2.jpg'
            ];

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
                router.go('createNewNotice');
            };

            self.openSlideShow = function(){
                document.querySelector("#slideshowDialog").open();
                setTimeout(startSlideShow, 400);
            };

            var startSlideShow = function(){
                $("#slideshow > div:gt(0)").hide();

                setInterval(function() {
                  $('#slideshow > div:first')
                    .fadeOut(500)
                    .next()
                    .fadeIn(500)
                    .end()
                    .appendTo('#slideshow');
                },  5000);

            };
        }

        return dashboardViewModel;
    }
);
