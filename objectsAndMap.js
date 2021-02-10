
// Objects
// color palltete for design purposes
const blueColor   = '#00f';
const orangeColor = '#f60';
const color = 'black'
const hexCode = '#000'

const colors = {
    yellow:  '#ff0',
    blue: blueColor,
    orange: orangeColor,
    'yellow Color': '#ff0',
    [color]: hexCode

}

console.log(colors);
console.log(colors.yellow);


// How many types in js?
/* undefined, null, boolean, number, string, symbol*/

// primative - passed by value
const num = 42;
const anotherNum = 42;
console.log(num === anotherNum);


// object - passed by reference

const obj = {}
const anotherObj = {}
console.log(obj === anotherObj) // == false they are different even if they are empty



console.log(colors['yellow Color']);



const user = {
    name: "Reed",
    username: "Reedbarger",
    email: "reed@gmail.com",
    details: {
        title: "Programmer"
    }
};

// Object destructuring for nested objects like details
// 1st approach
const {title} = user.details

// 2nd approach 
// const {name, details: {title}} = user;

// Object destructuring
const { username, email } = user;

function displayUser() {
    console.log(`username: ${username}, email: ${email}`);
    console.log(`${username} is a ${title}`)
}

displayUser();




// merge objects with object spread
const user1 = {
     name: "",
     username: "",
     phoneNumber: "",
     email: "",
     password: "",
     verified: true

}

const newUser = {
    username: "ReedBarger",
    email: "reed@gmail.com",
    password: "mypassword"
};

// Object.assign(user1, newUser)
const createdUser = { ...user1, ...newUser, verified: false };
console.log(createdUser);



// How maps can do what objects can't
const nums = {
    1:1,
    true:true
};


const map = new Map({
    //['key', 'value']
    
    ["name", "john"]
}); 