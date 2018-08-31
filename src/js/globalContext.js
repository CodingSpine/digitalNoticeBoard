define(['knockout'],
function(ko){
    var globalContextViewModel = {
        username: ko.observable(),
        loggedIn: ko.observable(false),
        userProperName: ko.observable(),
        noOfReviews : ko.observable(10)
    }
    return globalContextViewModel;
});
