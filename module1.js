var app = angular.module("myapp",['ngRoute']);


app.config(["$routeProvider",function($routeProvider){
    $routeProvider.
    when("/gallery",{
        templateUrl:'views/gallery.html',
        controller:'galleryctr'
    }). 
    when("/train",{
        templateUrl:'views/trains.html',
        controller:'trainctr'
    }). 
    when("/destination",{
        templateUrl:'views/destination.html',
        controller:'destinationctr'
    }). 
    otherwise({
        redirectTo:'index.html'
    })

}]);
app.controller("galleryctr",function($scope)
{
    $scope.pic1 = "images/jack-ward-rknrvCrfS1k-unsplash.jpg";
    $scope.pic2 = "images/kris-guico-rsB-he-ye7w-unsplash.jpg";
    $scope.pic3 = "images/luca-bravo-O453M2Liufs-unsplash.jpg";
    $scope.pic4 = "images/naman-pandey-y3nWJ-QznP4-unsplash.jpg";
    $scope.pic5 = "images/rolands-varsbergs-miKmVyq3qhE-unsplash.jpg";
    $scope.pic6 = "images/satyaprakash-kumawat-ky1d-IWCBis-unsplash.jpg";
    $scope.pic7 = "images/suchismita-sahoo-aEO1tuMpqb8-unsplash.jpg";
    $scope.pic8 = "images/surya-teja-oIXJ839p55k-unsplash.jpg";
    $scope.pic9 = "images/thebugadi-HsvegYJYLjY-unsplash.jpg";

});

app.controller("trainctr",function($scope)
{
    $scope.trains = ["Karnataka Express","Goa Express","Rajdhani Express","Mysore Express","Kashmir Sf Express","Gomti Express"];

});
app.controller("destinationctr",function($scope)
{
    $scope.destination = [
        {name:'Goa',popularity:'High',bestfor:'Beaches'},
        {name:'Bangalore',popularity:'High',bestfor:'Pubs'},
        {name:'Kerala',popularity:'Medium',bestfor:'Rivers'},
        {name:'Odisha',popularity:'Low',bestfor:'Temples'},
        {name:'kashmir',popularity:'High',bestfor:'Mountains'},
        {name:'Shimla',popularity:'Medium',bestfor:'Shopping'}
    ]

});