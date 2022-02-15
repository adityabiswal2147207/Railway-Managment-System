const fs = require("fs");
const users =  require("./users.json")




//reading the file:-
console.log(users);

// defining new users
let user = {
    name: "Gyan Gartia",
    age: "20",
    gender: "M",
    language: "Odia"
};

//adding new data to users object
users.push(user);

//writing to the file
fs.writeFile("users.json",JSON.stringify(users),err => {

    if (err) throw err;

    console.log("done writing to the file"); //success
});

