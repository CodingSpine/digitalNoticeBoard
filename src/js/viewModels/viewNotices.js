define(['ojs/ojcore', 'knockout', 'globalContext', 'database', 'ojs/ojinputtext', 'ojs/ojbutton', 'ojs/ojfilmstrip',
        'ojs/ojpagingcontrol', 'ojs/ojoffcanvas', 'ojs/ojdialog', 'ojs/ojselectcombobox'],
    function(oj, ko, context, database) {
        function viewNoticesViewModel() {
            var self = this;
            self.pagingModel = ko.observable(null);
            var router = oj.Router.rootInstance;
            self.clickedIndex = ko.observable(router.retrieve().itemNumber);

            self.selectedCountry = ko.observable();
            self.selectedState = ko.observable();
            self.selectedCity = ko.observable();
            self.countries = ko.observableArray(database.countries);
            self.statesRepo = database.states;
            self.states = ko.observableArray();
            self.citiesRepo = database.cities;
            self.cities = ko.observableArray();

            self.images = ko.observableArray(database.imageLocations.slice());

            self.selectedCountry.subscribe(function(latestValue){
                self.selectedState(undefined);
                self.states.removeAll();
                if (latestValue !== undefined){
                    var latestStates = (self.statesRepo[latestValue]).slice();
                    self.states(latestStates);
                }
            });

            self.selectedState.subscribe(function(latestValue){
                self.selectedCity(undefined);
                self.cities.removeAll();
                if (latestValue !== undefined){
                    var latestCities = (self.citiesRepo[latestValue]).slice();
                    self.cities(latestCities);
                }
            });

            self.getItemInitialDisplay = function(index) {
                return index < 2 ? '' : 'none';
            };

            self.thumbnailClick = function(index) {
                self.clickedIndex(index);
            };

            self.returnHome = function() {
                var router = oj.Router.rootInstance;
                router.go('dashboard');
            };

            self.openFilter = function(){
                $('#modalDialog1')[0].open();
            };

            self.closeFilter = function(){
                $('#modalDialog1')[0].close();
            };

            self.applyFilter = function(){
                var noOfImages = 12;
                if (self.selectedCountry() !== undefined) noOfImages = 9;
                if (self.selectedState() !== undefined) noOfImages = 6;
                if (self.selectedCity() !== undefined) noOfImages = 3;
                self.images.removeAll();
                self.images(database.imageLocations.slice(0, noOfImages));
                $('#filmStrip1')[0].refresh();
                $('#filmStrip2')[0].refresh();
                $('#pagingControl')[0].refresh();
                self.getFilmStripReady();
                self.closeFilter();
            };

            self.clearAllFilters = function(){
                self.selectedCountry(undefined);
                self.selectedState(undefined);
                self.selectedCity(undefined);
            };

            self.getFilmStripReady = function(){
                var filmStrip = document.getElementById('filmStrip2');
                var busyContext = oj.Context.getContext(filmStrip).getBusyContext();
                busyContext.whenReady().then(function() {
                    // Set the Paging Control pagingModel
                    self.pagingModel(filmStrip.getPagingModel());
                });
            };

            this.handleBindingsApplied = function() {
                self.getFilmStripReady();
            };

        }

        return viewNoticesViewModel;
    }
);
