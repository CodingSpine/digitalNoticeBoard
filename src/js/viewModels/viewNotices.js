define(['ojs/ojcore', 'knockout', 'globalContext', 'ojs/ojinputtext', 'ojs/ojbutton', 'ojs/ojfilmstrip', 'ojs/ojpagingcontrol'],
    function(oj, ko, context) {
        function viewNoticesViewModel() {
            var self = this;
            self.pagingModel = ko.observable(null);
            self.clickedIndex = ko.observable(0);

            self.chemicals = [
                {location: '../../css/images/1.png'},
                {location: '../../css/images/2.jpg'}
            ];

            self.getItemInitialDisplay = function(index){
                return index < 2 ? '' : 'none';
            };

            self.thumbnailClick = function(index){
                self.clickedIndex(index);
            };

            self.returnHome = function(){
                var router = oj.Router.rootInstance;
                router.go('dashboard');
            };

            this.handleBindingsApplied = function() {
                var filmStrip = document.getElementById('filmStrip');
                var busyContext = oj.Context.getContext(filmStrip).getBusyContext();
                busyContext.whenReady().then(function() {
                    // Set the Paging Control pagingModel
                    self.pagingModel(filmStrip.getPagingModel());
                });
            };

        }

        return viewNoticesViewModel;
    }
);
