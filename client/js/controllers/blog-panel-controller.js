blogApp.controller("blogPanelController",['$scope','$resource',function($scope,$resource){
    var blogs = $resource('/api/blog-list');
    var blogDetail = $resource('/api/blogs/:timestamp', {timestamp: '@ts'});
    
    blogs.query(function(results) {
        $scope.blogs = results;
    })
    
    $scope.test = 'haha';
    $scope.generateFloatLayer = function(timestamp){
        
        blogDetail.get({ts: timestamp}, function(results){
            $scope.detail = results;
            console.log($scope.detail.content);
        });
        
        
        
        generateFloatLayer(timestamp);
        
    };
    
}]);

