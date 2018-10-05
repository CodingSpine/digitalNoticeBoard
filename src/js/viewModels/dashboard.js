define(['ojs/ojcore', 'knockout', 'jquery', 'globalContext', 'ojs/ojlistview', 'ojs/ojinputtext', 'ojs/ojbutton', 'ojs/ojdialog'],
    function (oj, ko, $, context) {
        function dashboardViewModel() {
            self.noOfReviews = ko.observable(context.noOfReviews());
            self.username = ko.observable(context.username());
            self.reviewsDisabled = ko.computed(function(){
                return self.noOfReviews() === 0;
            }, this);
            var slideshowStarted = false;

            self.locations = [
                '../../css/images/1.png',
                '../../css/images/2.jpg'
            ];

            self.goToViewNotices = function(data, event){
                var itemNumber = parseInt(event.currentTarget.id.split('item')[1]);
                var router = oj.Router.rootInstance;
                router.store({'itemNumber': itemNumber});
                router.go('viewNotices');
            };

            self.reviewNewNotices = function(){
                var router = oj.Router.rootInstance;
                router.go('reviewNotices');
            };

            self.createNewNotice = function(){
                var router = oj.Router.rootInstance;
                router.go('createNotice');
            };

            self.openSlideShow = function(){
                document.querySelector("#slideshowDialog").open();
                var elem = document.documentElement;
                elem.webkitRequestFullscreen();
                if (!slideshowStarted){
                    setTimeout(startSlideShow, 400);
                }
            };

            var startSlideShow = function(){
                slideshowStarted = true;
                $("#slideshow > div:gt(0)").hide();

                setInterval(function() {
                  $('#slideshow > div:first')
                    .fadeOut(500)
                    .next()
                    .fadeIn(500)
                    .end()
                    .appendTo('#slideshow');
                },  8000);
            };
        }

        return dashboardViewModel;
    }
);
