const fs = require('fs');

const string = `export const lastUpdate = new Date("${new Date().toISOString()}")`

fs.writeFile('src/time.js', string, ()=> {});