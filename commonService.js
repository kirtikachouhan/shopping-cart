angular.module('ngShopApp').factory('commonService', function () {
  var data = [];
    return {
         setdata: function(val,price){
            data=null;
            data= {"data":val,"price":price};
         },
         getdata: function(){
          return data;
       }
       } 
  });