const path = require('path');
const fs = require('fs');
const request = require('request');

let data = ["chirp one", "chirp two", "chirp three", "chirp four", "chirp five"];

let dataPath = path.join(__dirname, '../chirps.json');
// console.log(dataPath);
fs.writeFile(dataPath, JSON.stringify(data), 'utf-8', err => {
    if(err) console.log(err);
});