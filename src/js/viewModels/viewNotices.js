define(['ojs/ojcore', 'knockout', 'globalContext', 'ojs/ojinputtext', 'ojs/ojbutton', 'ojs/ojfilmstrip', 'ojs/ojpagingcontrol'],
    function(oj, ko, context) {
        function viewNoticesViewModel() {
            var self = this;
            self.pagingModel = ko.observable(null);
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
