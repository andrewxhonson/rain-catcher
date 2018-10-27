myApp.controller('HomeController', ['HomeService', '$interval', '$http', function (HomeService, $interval, $http) {
    let self = this;
    
    self.andrew = 'hi';

    self.stream = [];


    self.drainMode = false;
    self.drainModeLastTried = false;

    self.drain = function(action) {
      if (action) { // start
        self.drainModeLastTried = true;

        $http.post('/api/drain/on')
        .then( function(response) {
          console.log(response);
        })
        .catch( function(error) {
          console.log('error in drain');
        });

      } else {
        self.drainModeLastTried = false;
        
        $http.post('api/drain/off')
        .then( function(response) {
          console.log(response);
        })
        .catch( function(error) {
          console.log('error in drain');
        });

      }

    };

    //time
    self.time = 0;
    
    //timer callback
    // var timer = function() {
    //   $interval(self.pollStream, 1000);
    // }
    
    // this.pollStream = function() {
      
    //   $http.get('https://api.particle.io/v1/devices/1c003b000c47363339343638/analogvalue?access_token=05700d7c927634766baf2972975055959d379d3c')
    //     .then( function(response) {

    //       self.stream.unshift(response);
    //       console.log('response');
    //       return response.data;
    //     })
    //     .catch( function(error) {
    //       console.log(error);
    //       return 'error';
    //     });
        
    // };
    // $interval(function() { self.pollStream(); }, 5000);
   
}]);
