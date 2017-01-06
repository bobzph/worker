// 自定义服务
angular.module("shuju",[])
.factory("data",["$http",function($http){
    return $http({
        url:"1.txt"
    })
}])
