
class Computer {
  constructor(manufacturer, numberOfProcessorCores, ramSize, hddSize) {
    this.manufacturer = manufacturer;
    this.numberOfProcessorCores = numberOfProcessorCores;
    this.ramSize = ramSize;
    this.hddSize = hddSize;
  }

  get manufacturer() {
    return this.manufacturer;
  }

  get numberOfProcessorCores() {
    return this.numberOfProcessorCores;
  }

  get ramSize() {
    return this.ramSize;
  }

  get hddSize() {
    return this.hddSize;
  }

  set manufacturer(manufacturer) {
    this._manufacturer = manufacturer;
  }

  set numberOfProcessorCores(numberOfProcessorCores) {
    this._numberOfProcessorCores = numberOfProcessorCores;
  }

  set ramSize(ramSize) {
    this._ramSize = ramSize;
  }

  set hddSize(hddSize) {
    this._hddSize = hddSize;
  }
}

class Ultrabook extends Computer {
  constructor(manufacturer, numberOfProcessorCores, ramSize, hddSize, htt) {
    super(...arguments);
    this.htt = htt;
  }

  get htt() {
    return this.htt;
  }

  set htt(htt) {
    this._htt = htt;
  }
}

class Server extends Computer {
  constructor(manufacturer, numberOfProcessorCores, ramSize, hddSize, discreteGraphicsCard) {
    super(...arguments);
    this.discreteGraphicsCard = discreteGraphicsCard;
  }

  get discreteGraphicsCard() {
    return this.discreteGraphicsCard;
  }

  set discreteGraphicsCard(discreteGraphicsCard) {
    this._discreteGraphicsCard = discreteGraphicsCard;
  }
}

let ult = new Ultrabook(1,1,1,1,1);
// let ult = new Server(1,1,1,1,1);
console.log(ult);