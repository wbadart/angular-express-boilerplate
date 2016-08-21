/**
* init.js
*
* Set up boilerplate w/ options
*
*/

const fs     = require('fs-extra');
const path   = require('path');
const prompt = require('prompt');
const colors = require('colors/safe');
let version;

prompt.message   = '';
prompt.delimiter = '>';

console.log(colors.green('Welcome to this Angular-Express Boilerplate!'));
console.log('Which version would you like to install? (barebones or tutorial)');

let schema = {
    properties: {
        version: {
            pattern: new RegExp('(barebones|tutorial)', 'i'),
            message: 'Please enter "barebones" or "tutorial".'
        }
    }
}

prompt.start()
prompt.get(schema, (err, result)=>{
    version = result.version;
    console.log('You have selected: ', version);
    fs.copySync(path.join(__dirname, '../versions/' + version + '/src'), './src');
    process.exit(0);
});
