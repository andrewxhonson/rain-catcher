myApp.controller('HomeController', ['HomeService', '$interval', function (HomeService, $interval) {
    let self = this;
    
    self.andrew = 'hi';

    self.stream = [];




      //10 seconds delay
    $interval( function(){
      self.test1 = "Hello World!";
    }, 5000 );

    //time
    self.time = 0;
    
    //timer callback
    var timer = function() {
      $interval(this.pollStream, 1000);
    }
    
    //run!!
    let i = 0;
    $interval(function() { self.stream.push(i++); }, 100);  


    this.pollStream = function() {
      self.stream.push('1');
      // return $http.get('https://api.particle.io/v1/devices/1c003b000c47363339343638/analogvalue?access_token=05700d7c927634766baf2972975055959d379d3c')
      //   .then( function(response) {
      //     this.stream.push(response);
      //     console.log('response');
      //     return response.data;
      //   })
      //   .catch( function(error) {
      //     console.log(error);
      //     return 'error';
      //   });
    }
   
}]);
