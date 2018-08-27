console.log('Starting app.js!');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');  //require own node file

var result = notes.add(10, -2);

//var user = os.userInfo();

console.log('Result: ', notes.add(9, -2));
console.log(`Result: ${result}`);
//console.log(user.homedir);
//console.log(user);

// `Hello ${user.username}!` <-- this is ES6 style call template string
// 'Hello '+ user.username + '!' <-- this way also work 

// fs.appendFile('greeting.txt', `Hello ${user.username}! You are ${notes.age}.`, (err) => {
//     if (err) throw err;
//     console.log('The data was appened to file!');
// });

// var res = notes.addNote();
// console.log(res);
