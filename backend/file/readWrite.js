const fs = require('fs');

// ------------------ Sync way read Write START ------------------
function writeSync() {
    fs.writeFileSync('myText.txt', 'Hello programmerFile write sync way.');
    fs.appendFileSync('myText.txt', 'I am the append line.');
}
function readSync() {
    const data = fs.readFileSync('myText.txt');
    // console.log('DATE: ', data); // Buffer return
    console.log('Sync DATE: ', data.toString()); // readable string
}
// ------------------ Sync way read write END ------------------
// ------------------ Recommended way asyn read write START ------------------
function readAsync() {
    fs.readFile('myText.txt', (error, data) => {
        console.log('Async Data: ', data.toString());
    });
}
// ------------------ Recommended way asyn read write END ------------------
module.exports = { writeSync, readSync, readAsync };
