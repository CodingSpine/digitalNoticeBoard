define(['knockout', 'ojs/ojinputtext'],
    function (ko) {
        function SearchViewModel() {
            var self = this;
            self.username = ko.observable();
            self.password = ko.observable();

        }

        return SearchViewModel;
    }
);
