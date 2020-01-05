
class Computer {
  constructor(manufacturer, numberOfProcessorCores, ramSize, hddSize) {
    this._manufacturer = manufacturer;
    this._numberOfProcessorCores = numberOfProcessorCores;
    this._ramSize = ramSize;
    this._hddSize = hddSize;
  }

  get manufacturer() {
    return this._manufacturer;
  }

  get numberOfProcessorCores() {
    return this._numberOfProcessorCores;
  }

  get ramSize() {
    return this._ramSize;
  }

  get hddSize() {
    return this._hddSize;
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
    this._htt = htt;
  }

  get htt() {
    return this._htt;
  }

  set htt(htt) {
    this._htt = htt;
  }
}

class Server extends Computer {
  constructor(manufacturer, numberOfProcessorCores, ramSize, hddSize, discreteGraphicsCard) {
    super(...arguments);
    this._discreteGraphicsCard = discreteGraphicsCard;
  }

  get discreteGraphicsCard() {
    return this._discreteGraphicsCard;
  }

  set discreteGraphicsCard(discreteGraphicsCard) {
    this._discreteGraphicsCard = discreteGraphicsCard;
  }
}

let ult = new Ultrabook(1,1,1,1,1);
// let ult = new Server(1,1,1,1,1);
console.log(ult);