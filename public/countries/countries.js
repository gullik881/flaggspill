/**
|------------------------------------------------------------------------------
| File for reading country data-files and bundling the data into single country
| file structured in JSON format. 
|
|------------------------------------------------------------------------------
*/

const fs = require('fs');
const countries = []; // empty array to populate

const capitalsJSON = fs.readFileSync('./capitals.json');
const capitals = JSON.parse(capitalsJSON);

const abbreviationsJSON = fs.readFileSync('./abbreviations.json');
const abbreviations = JSON.parse(abbreviationsJSON);


function populateCountries() {
    capitals.forEach(capital => {
        country = {
            "country" : capital.country 
        }
        countries.push(country);
    });
    //console.log(countries);
}
populateCountries();

function populateAbbreviations() {
    abbreviations.forEach((abbr, index) => {
        let abbreviation = abbr.abbreviation;
        let lowercase = abbreviation.toLowerCase();
        //console.log(lowercase);
        countries[index].abbreviation = lowercase;
    });
    //console.log(countries);
}
populateAbbreviations();

function makeLinksToFlags() {
    countries.forEach(country => {
        country.flag = `flagpedia.net/data/flags/normal/${country.abbreviation}.png`;
    });
    console.log(countries);
}

makeLinksToFlags();