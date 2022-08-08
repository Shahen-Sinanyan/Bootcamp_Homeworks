let buildingsName = [];
let carTypes = []

class City {
    constructor () {
        this.buildings = buildingsName;
    }
}

class Building {
    constructor () {
        this.cars = carTypes;
    }
}

class Hospital extends Building {
    constructor (name) {
        super();
        this.name = name;
            buildingsName.push(this);
    }
}
class PoliceDepartment extends Building {
    constructor (name) {
        super();
        this.name = name;
        buildingsName.push(this);
        
    }
}

class Car {
    
}
class PoliceCar extends Car {
    constructor (quantity) {
        super();
        this.policeCar = quantity;
        carTypes.push(this);
    }
}
class AmbulanceCar extends Car {
    constructor (quantity) {
        super();
        this.hospitalCar = quantity;
        carTypes.push(this);
    }
}
let vostikanutyun1 = new PoliceDepartment('Hayreniq qaxmas')
let vostikanutyun2 = new PoliceDepartment('Qnchakan')
let erebouni = new Hospital('Erebuni hospital')
let nairi = new Hospital('Nairi hospital')
let cityYerevan = new City()

let policeCar1 = new PoliceCar(20);
let policeCar2 = new PoliceCar(14);
let ambulanceCar1 = new AmbulanceCar(16);
let ambulanceCar2 = new AmbulanceCar(77);
let buildingsYerevan = new Building();

console.log(cityYerevan);
console.log(buildingsYerevan);