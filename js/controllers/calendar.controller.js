var calApp = angular.module("calApp");

calApp.controller("calendarController", ["$scope", "$http", function($scope, $http){
  const API_KEY = "b10a4a65-01ee-4fbe-a489-5a0c1813d5b1";
  $scope.day = 1;
  $scope.year = 1970;
  $scope.numDays = 1;
  $scope.countryCodes = [
    {code:"AR", label:"Argentina"},
    {code:"AO", label:"Angola"},
    {code:"AT", label:"Austria"},
    {code:"AU", label:"Australia"},
    {code:"AW", label:"Aruba"},
    {code:"AX", label:"Åland Islands"},
    {code:"BA", label:"Bosnia and Herzegovina"},
    {code:"BE", label:"Belgium"},
    {code:"BG", label:"Bulgaria"},
    {code:"BO", label:"Bolivia"},
    {code:"BR", label:"Brazil"},
    {code:"BS", label:"The Bahamas"},
    {code:"CA", label:"Canada"},
    {code:"CH", label:"Switzerland"},
    {code:"CN", label:"China"},
    {code:"CO", label:"Colombia"},
    {code:"CR", label:"Costa Rica"},
    {code:"CU", label:"Cuba"},
    {code:"CZ", label:"Czech Republic"},
    {code:"DE", label:"Germany"},
    {code:"DK", label:"Denmark"},
    {code:"DO", label:"Dominican Republic"},
    {code:"EC", label:"Ecuador"},
    {code:"ES", label:"Spain"},
    {code:"FI", label:"Finland"},
    {code:"FR", label:"France"},
    {code:"GB", label:"United Kingdom"},
    {code:"GB-ENG", label:"England"},
    {code:"GB-NIR", label:"Northern Ireland"},
    {code:"GB-SCT", label:"Scotland"},
    {code:"GB-WLS", label:"Wales"},
    {code:"GR", label:"Greece"},
    {code:"GT", label:"Guatemala"},
    {code:"HK", label:"Hong Kong"},
    {code:"HN", label:"Honduras"},
    {code:"HR", label:"Croatia"},
    {code:"HU", label:"Hungary"},
    {code:"ID", label:"Indonesia"},
    {code:"IE", label:"Ireland"},
    {code:"IN", label:"India"},
    {code:"IL", label:"Israel"},
    {code:"IS", label:"Iceland"},
    {code:"IT", label:"Italy"},
    {code:"JP", label:"Japan"},
    {code:"KZ", label:"Kazakhstan"},
    {code:"LS", label:"Lesotho"},
    {code:"LU", label:"Luxembourg"},
    {code:"MG", label:"Madagascar"},
    {code:"MQ", label:"Martinique"},
    {code:"MT", label:"Malta"},
    {code:"MU", label:"Mauritius"},
    {code:"MX", label:"Mexico"},
    {code:"MZ", label:"Mozambique"},
    {code:"NG", label:"Nigeria"},
    {code:"NL", label:"Netherlands"},
    {code:"NO", label:"Norway"},
    {code:"PE", label:"Peru"},
    {code:"PK", label:"Pakistan"},
    {code:"PH", label:"Philippines"},
    {code:"PL", label:"Poland"},
    {code:"PR", label:"Puerto Rico"},
    {code:"PT", label:"Portugal"},
    {code:"PY", label:"Paraguay"},
    {code:"RE", label:"Réunion"},
    {code:"RO", label:"Romania"},
    {code:"RU", label:"Russia"},
    {code:"SC", label:"Seychelles"},
    {code:"SE", label:"Sweden"},
    {code:"SG", label:"Singapore"},
    {code:"SI", label:"Slovenia"},
    {code:"ST", label:"Sao Tome and Principe"},
    {code:"SK", label:"Slovakia"},
    {code:"TN", label:"Tunisia"},
    {code:"TR", label:"Turkey"},
    {code:"UA", label:"Ukraine"},
    {code:"US", label:"United States"},
    {code:"UY", label:"Uruguay"},
    {code:"VE", label:"Venezuela"},
    {code:"ZA", label:"South Africa"},
    {code:"ZW", label:"Zimbabwe"}
  ];

  $scope.months = [
    {value:"January", label:"January"},
    {value:"February", label:"February"},
    {value:"March", label:"March"},
    {value:"April", label:"April"},
    {value:"May", label:"May"},
    {value:"June", label:"June"},
    {value:"July", label:"July"},
    {value:"August", label:"August"},
    {value:"September", label:"September"},
    {value:"October", label:"October"},
    {value:"November", label:"November"},
    {value:"December", label:"December"},
  ];

  $scope.monthsW31 = [0, 4, 6, 7, 9, 11];
  $scope.monthsW30 = [1, 3, 5, 8, 10];

  $scope.monthsToRender = [];

  $scope.generateCalendar = function(){
    var startDate = new Date($scope.startMonth.value + " " + $scope.day.toString() + ", " + $scope.year.toString() + " 00:00:00");
    //$scope.monthsToRender.push({month:"January"});
    var daysLeft = $scope.numDays;
    var startDayOfWeek = startDate.getDay();
    var startMonth = startDate.getMonth();
    var holidays = $http({url: "https://holidayapi.com/v1/holidays",method: "GET", params: {key: API_KEY, country: $scope.countryCode.code, year: $scope.year}}).then(function(res){
      console.log(res);
    })
    // while(daysLeft > 0){
    //   var trackingDay = 0;
    //   for (var i = 0; i < 7; i++) {
    //     if(trackingDay < startDayOfWeek)
    //   }
    // }
  }
}]);
