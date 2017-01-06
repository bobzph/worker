// 自定义控制器
angular.module("kongzhiqi",["shuju"])
.controller("index",[
    "$scope","$http","data",function ($scope,$http,data) {
        data.then(function (data) {
            $scope.data=data.data;
        })

    }
])
    .controller("list",[
        "$scope","$http","data",
        
    ])
