blogApp.controller("blogPanelController",['$scope','$resource',function($scope,$resource){
    var blogs = $resource('/api/blogs');
    
    blogs.query(function(results) {
        $scope.blogs = results;
    })
}]);

blogApp.filter('trusthtml', ['$sce', function ($sce) {
    return function(t) {
        return $sce.trustAsHtml(t)
    }
}]);