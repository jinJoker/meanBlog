blogApp.controller("blogPanelController",['$scope','$resource',function($scope,$resource){
    var blogs = $resource('/api/blogs');
    
    blogs.query(function(results) {
        $scope.blogs = results;
    })
    
    $scope.generateFloatLayer = function(timestamp){
        generateFloatLayer(timestamp);
    };
    
}]);

