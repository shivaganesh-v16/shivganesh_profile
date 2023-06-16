var myApp = angular.module('myApp', []);
angular.module('myApp').controller('myController',function($scope, $window) {

  $scope.homeShow = true;
  $scope.aboutShow = false;
  $scope.servicestFun = false;
  $scope.projectstFun = false;
  $scope.contactFun = false;

  $scope.homeFun = function () {
    $scope.homeShow = true;
    $scope.aboutShow = false;
    $scope.servicestFun = false;
    $scope.projectstFun = false;
    $scope.contactFun = false;
  }

  $scope.aboutFun = function () {
    $scope.homeShow = false;
    $scope.aboutShow = true;
    $scope.servicestFun = false;
    $scope.projectstFun = false;
    $scope.contactFun = false;


  }

  $scope.servicestFun = function () {
    $scope.homeShow = false;
    $scope.aboutShow = false;
    $scope.servicestFun = true;
    $scope.projectstFun = false;
    $scope.contactFun = false;
  }
  $scope.projectstFun = function () {
    $scope.homeShow = false;
    $scope.aboutShow = false;
    $scope.servicestFun = false;
    $scope.projectstFun = true;
    $scope.contactFun = false;
  }

  $scope.contactFun = function () {
    $scope.homeShow = false;
    $scope.aboutShow = false;
    $scope.servicestFun = false;
    $scope.projectstFun = false;
    $scope.contactFun = true;
  }



  //to download the cv 
  $scope.downloadCv = function () {
    var pdfURL = 'ShivaGanesh Resume.pdf';

    var link = document.createElement('a');
    link.href = pdfURL;
    link.download = 'ShivaGanesh Resume.pdf';
    link.style.display = 'none';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
//git hub profile
  $scope.gitHub = function () {
    var websiteURL = 'https://www.github.com/shivaganesh-v16';
    $window.open(websiteURL, '_blank');
    
  }

});
