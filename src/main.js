const TextCell = require('../src/textcell');
const UnderlinedCell = require('../src/underlinedcell');
const DataTable = require('../src/Tabla.js');
//let textcell = new TextCell('plain', TextCell.LEFT, "HOOLA mundo");
const input = require('../inputs/input.json');

var table = dataTable(input);
console.log(table);
