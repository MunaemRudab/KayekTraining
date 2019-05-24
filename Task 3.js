function ACRemote(mode, state, temperature){
  this.mode = mode;
  this.temperature = temperature !== undefined ? temperature : 26;
  this.state = state !== undefined ? state : false;
  this.prevTemp = 26;
  this.prevMode = mode;
  this.toggleState = function () {
    return !this.state;
  }
  
  this.switchModes = function(mode) {
    this.prevMode = this.mode;
    var objRemote = this;
    function switchMode(mode) {
      return objRemote.mode = mode;
    }
    return switchMode;
  };
  
  this.increaseTemperature = function(temperature) {
    this.prevTemp = this.temperature;
    var objRemote = this;
    function increase(temperature) {
      return objRemote.temperature += temperature;
    }
    return increase;
  };
  
  this.decreaseTemperature = function(temperature) {
    this.prevTemp = this.temperature;
    var objRemote = this;
    function decrease(temperature) {
      return objRemote.temperature -= temperature;
    }
    return decrease;
  };
  
  this.displayAttr = function() {
    return "Mode: "+this.mode + " Temp: " + this.temperature;
  };
  
  this.setTimer = function(timeOut) {
    setTimeout(
      function() { 
        this.state = false; 
        console.log("Switched Off");
      }, timeOut);
  };
}

// var acRemote = new ACRemote('hot', true, 25);
// var acRemote1 = new ACRemote('dry', false, 15);

// console.log(acRemote.mode);
// var increase = acRemote.increaseTemperature();
// var decrease = acRemote.decreaseTemperature();
// var switchMode = acRemote.switchModes();
// console.log(increase(5));
// console.log(decrease(15));
// console.log(switchMode('dry'));
// console.log(acRemote.prevMode);

// console.log(acRemote1);
// acRemote.setTemperature(5);
// acRemote1.setTemperature(-20);

// console.log("Current: "+acRemote.temperature+ " Prev: "+ acRemote.prevTemp);
// console.log("Current: "+acRemote1.temperature+ " Prev: "+ acRemote1.prevTemp);
// acRemote.switchModes('cool');
// console.log("Current: "+acRemote.mode+ " Prev: "+ acRemote.prevMode);
// acRemote.switchModes('hot');
// console.log("Current: "+acRemote.mode+ " Prev: "+ acRemote.prevMode);

// console.log("Current: "+acRemote1.mode+ " Prev: "+ acRemote1.prevMode);
// console.log(obj1.toggleState());
// console.log(obj1.displayAttr());
// acRemote.setTimer(3000);
