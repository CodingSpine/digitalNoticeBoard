define(['ojs/ojcore', 'knockout', 'globalContext', 'ojs/ojarraydataprovider', 'ojs/ojinputtext', 'ojs/ojbutton', 'ojs/ojlistview'],
    function (oj, ko, context, ArrayDataProvider) {
        function reviewNoticesViewModel() {
            var self = this;
            self.reviewImageSource = ko.observable();

            self.goToDashboard = function(){
                var router = oj.Router.rootInstance;
                router.go('dashboard');
            };

            this.reviewItems = ko.observableArray([
                {"id": 1, "name": "Notice 1", "from": "09/1/18", "to" : "10/1/18", "region" : "Chennai", 'src': '../../css/images/notice1.jpg'},
                {"id": 2, "name": "Notice 2", "from": "09/1/18", "to" : "10/22/18", "region" : "Mumbai", 'src': '../../css/images/notice2.jpg'},
                {"id": 3, "name": "Notice 3", "from": "09/1/18", "to" : "10/1/18", "region" : "Kentucky", 'src': '../../css/images/notice3.jpg'},
                {"id": 4, "name": "Notice 4", "from": "09/1/18", "to" : "12/4/18", "region" : "India", 'src': '../../css/images/notice4.jpg'},
                {"id": 5, "name": "Notice 5", "from": "09/1/18", "to" : "10/1/18", "region" : "Worldwide", 'src': '../../css/images/notice5.jpg'},
                {"id": 6, "name": "Notice 6", "from": "09/1/18", "to" : "10/7/19", "region" : "Sao Paulo", 'src': '../../css/images/notice6.jpg'},
                {"id": 7, "name": "Notice 7", "from": "09/1/18", "to" : "10/1/18", "region" : "France", 'src': '../../css/images/notice7.jpg'},
                {"id": 8, "name": "Notice 8", "from": "09/1/18", "to" : "12/1/19", "region" : "Ontario", 'src': '../../css/images/notice8.jpg'},
                {"id": 9, "name": "Notice 9", "from": "09/1/18", "to" : "1/1/19", "region" : "Norway", 'src': '../../css/images/notice9.jpg'},
                {"id": 10, "name": "Notice 10", "from": "09/1/18", "to" : "10/1/18", "region" : "Delhi", 'src': '../../css/images/notice10.jpg'}
           ]);

            this.dataProvider = new ArrayDataProvider(this.reviewItems, {'keyAttributes': 'id'});

            self.approveOrReject = function(data){
                self.reviewItems.remove(function(item){
                    return item.id === data.id;
                });
                context.noOfReviews(self.reviewItems().length);
            };

            self.updateImage = function(src){
                self.reviewImageSource(src);
            };


        }

        return reviewNoticesViewModel;
    }
);
