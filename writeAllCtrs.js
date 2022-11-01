const allCars  = require('./allCTRs.json');
const { cars }  = require('./src/cars');
const fs = require('fs');

let newAllCars = {...allCars};

cars.forEach(car=>{
    if (!allCars[car.vin]){
        newAllCars[car.vin] = car;
    }
})

const data = JSON.stringify(newAllCars);

// write JSON string to a file
fs.writeFile('allCTRs.json', data, (err) => {
    if (err) {
        throw err;
    }
    let newLength = Object.keys(newAllCars).length;
    let oldLength = Object.keys(allCars).length;
    console.log(`${newLength - oldLength} new cars added to the list`);
});