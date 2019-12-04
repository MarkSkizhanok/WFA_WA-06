
function Computer(manufacturer, numberOfProcessorCores, ramSize, hddSize) {
    this.manufacturer = manufacturer;
    this.numberOfProcessorCores = numberOfProcessorCores;
    this.ramSize = ramSize;
    this.hddSize = hddSize;
  }
  
  Computer.prototype.getManufacturer = function() {
    return this.manufacturer;
  }
  
  Computer.prototype.getNumberOfProcessorCores = function() {
    return this.numberOfProcessorCores;
  }
  
  Computer.prototype.getRamSize = function() {
    return this.ramSize;
  }
  
  Computer.prototype.getHddSize = function() {
    return this.hddSize;
  }
  
  Computer.prototype.setManufacturer = function(manufacturer) {
    this.manufacturer = manufacturer;
  }
  
  Computer.prototype.setNumberOfProcessorCores = function(numberOfProcessorCores) {
    this.numberOfProcessorCores = numberOfProcessorCores;
  }
  
  Computer.prototype.setRamSize = function(ramSize) {
    this.ramSize = ramSize;
  }
  
  Computer.prototype.setHddSize = function(hddSize) {
    this.hddSize = hddSize;
  }
  
  
  function Ultrabook(manufacturer, numberOfProcessorCores, ramSize, hddSize, htt) {
    Computer.apply(this, arguments);
    this.htt = htt;
  }
  
  Ultrabook.prototype = Object.create(Computer.prototype);
  
  Ultrabook.prototype.getHtt = function() {
    return this.htt;
  }
  
  Ultrabook.prototype.setHtt = function(htt) {
    this.htt = htt;
  }
  
  
  function Server(manufacturer, numberOfProcessorCores, ramSize, hddSize, discreteGraphicsCard) {
    Computer.apply(this, arguments);
    this.discreteGraphicsCard = discreteGraphicsCard;
  }
  
  Server.prototype = Object.create(Computer.prototype);
  
  Server.prototype.getDiscreteGraphicsCard = function(discreteGraphicsCard) {
    return this.discreteGraphicsCard;
  }
  
  Server.prototype.setDiscreteGraphicsCard = function(discreteGraphicsCard) {
    this.discreteGraphicsCard = discreteGraphicsCard;
  }
  
  var ult = new Ultrabook(1,1,1,1,1);
  // var ult = new Server(1,1,1,1,1);
  console.log(ult);