define(['knockout'],
function(ko){
    var globalContextViewModel = {
        username: ko.observable(),
        loggedIn: ko.observable(false),
        userProperName: ko.observable()
    }
    return globalContextViewModel;
});
