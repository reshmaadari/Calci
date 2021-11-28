var a=angular.module("myApp",[]);

a.service("myCalc",function(){
    this.add=function(a,b){
        return a+b;
    }
    this.sub=function(a,b){
        return a-b;
    }
    this.mul=function(a,b){
        return a*b;
    }
    this.div=function(a,b){
        return a/b;
    }
    this.mod=function(a,b){
        return a%b;
    }
});

a.controller("calculatorctrl",function($scope,myCalc){
    $scope.currentval=null;
    $scope.previousval=null;
    $scope.crntval=0;

    $scope.operandfun = function(val){
        if ($scope.currentval == null) {
            $scope.currentval = val;
            // $scope.crntval=val;
            // $scope.previousval=null;
        } else {
            $scope.currentval += String(val);
            // $scope.crntval=val;
            // $scope.previousval=null;
        }
    };
    $scope.clearfun=function(){
        $scope.currentval=null;
        $scope.previousval=null;
    };
    $scope.deletefun=function(){
        if($scope.currentval==0)
            $scope.currentval=null;
        else
            $scope.currentval= $scope.currentval.slice(0,-1);
    };
    $scope.operatorfun=function(op){
        if($scope.currentval==null){
            $scope.currentval="ERROR";
        }
        else{
            $scope.previousval=$scope.currentval;
            $scope.crntval=$scope.currentval;
            $scope.operator=op;
            $scope.currentval=null;
            $scope.previousval+=String(op);
            // $scope.currentval=null;
        }
    }
    $scope.result=function(){
        if($scope.currentval==0||$scope.previousval==0)
            $scope.currentval="ERROR";
        else{
            if($scope.operator=='+'){
                $scope.currentval=myCalc.add(parseFloat($scope.previousval),parseFloat($scope.currentval));
                $scope.previousval=null;
            }
            if($scope.operator=='-'){
                $scope.currentval=myCalc.sub(parseFloat($scope.previousval),parseFloat($scope.currentval));
                $scope.previousval=null;
            }
            if($scope.operator=='*'){
                $scope.currentval=myCalc.mul(parseFloat($scope.previousval),parseFloat($scope.currentval));
                $scope.previousval=null;
            }
            if($scope.operator=='/'){
                $scope.currentval=myCalc.div(parseFloat($scope.previousval),parseFloat($scope.currentval));
                $scope.previousval=null;
            }
            if($scope.operator=='%'){
                $scope.currentval=myCalc.mod(parseFloat($scope.previousval),parseFloat($scope.currentval));
                $scope.previousval=null;
            }
        }
    }
});