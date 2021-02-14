
const todos = [];


const todo1 = {
    test: 'wash the dishes',
    complete: false
};


const todo2 = {
    text: 'Do laundary',
    complete: false
};

todos.push(todo1, todo2);
todos.pop();
console.log(todos);





const favouritSongs = [];

const song1 = {
    name: 'No one',
    artist: 'Alicia Keys'
}


const song2 = {
    name: 'Dilemma',
    artist: 'Nelly'
};

favouritSongs.push(song1, song2);
favouritSongs.pop();
console.log(favouritSongs);


const temperatures = [69, 82, 73, 64]; // index 0,1,2,3; -1
console.log(temperatures.indexOf(50) > -1);

// better way
console.log(temperatures.includes(50));


const temperatures1 = [
    {degree: 69, isRecordTemp: false},
    {degree: 82, isRecordTemp: true},
    {degree: 30, isRecordTemp: false},
    {degree: 79, isRecordTemp: false}
];


// some keyword
const result = temperatures1.some( temp => temp.isRecordTemp === true);
console.log(result);



// every keyword
// every check if every elements in the array is true otherwise it will return false
const result1 = temperatures1.every( temp =>  temp.isRecordTemp);
console.log(result1);

const newTemp = temperatures1.map(temp => {
    temp.isRecordTemp = true;
    return temp;
})

console.log(newTemp);


const newTemp2 = temperatures1.map(temp =>
    temp.degree > 70 ? {...temp, isHigh: true} : temp
);

console.log(newTemp2);


newTemp2.forEach(temp => {
    if(temp.isHigh) {
        console.log(`Temperature ${temp.degree} was high last week`);
    }
})



// functions introduced
/**
 * some
 * every
 * map
 * forEach
 * includes
 * indexOf
 *
 * */


// get subsets of arrays
const restaurants = [
    {name: 'Cap City Diner', milesAway: 2.2},
    {name: 'Chop Shop', milesAway: 4.1},
    {name: 'Nothstar Cafe', milesAway: 0.9}
];

// filter    -> returns false and true
// startsWith
const results = restaurants.filter( res => res.name.startsWith('C'));
console.log(results)


// find we want only one element
const results4 = restaurants.find(res => res.name.toLowerCase().includes('north') && res.milesAway < 2);
console.log(results4)



//  transform arrays with .reduce
// we have a menuItems and we want to calculate the total price
// we use reduce

const menuItems = [
    {item: 'Blue Cheese Salad', price: 8},
    {item: 'Pizza', price: 18},
    {item: 'Burger', price: 20},
    {item: 'Peppsi', price: 10}
];

const total = menuItems.reduce( (accumelator, menuItem) => {
    console.log(`accoumelator: ${accumelator}, menu item price ${menuItem.price}`)
    return accumelator + menuItem.price;
}, 0 )


console.log(total)



// understand the power of .reduce
const numbers = [1,2,3,4,5,6];

// we want to double each number
const doubledNumber = numbers.reduce((acc, num) => {
    acc.push( num * 2);
    return acc;
}, []);


console.log(doubledNumber);



// get all the numbers that greater than 3
const numberGreaterThanThree = numbers.reduce((acc, num) => {
    if(num > 3){
        acc.push(num);
    }
        return acc;

}, []);

console.log(numberGreaterThanThree)




// avoid mutations with array spread
const lunchMenuIdeas = ['Harvest Salad', 'Southeren Fried Chicken'];

// non imutating
const allMenuIdeas = lunchMenuIdeas.concat('Club Sandwich')
// allMenuIdeas.push('Club Sandwich');
console.log(allMenuIdeas)

// copying all
const allMenuIdeas2 = [...lunchMenuIdeas];
allMenuIdeas2.push('Club Sandwich2');
console.log(allMenuIdeas2)



// Mold arrays with the spread operator
const breakfastMenuIdeas = ["Buckwheat pancakes"];
const dinnerMenuIdeas    = ["Glazed Salmon", "Meatloaf", "American Burger"];


const lunchMenuIdeas3 = [...breakfastMenuIdeas ,'Harvest Salad', 'Southeren Fried Chicken', ...dinnerMenuIdeas];

const otherMenuideas = [...breakfastMenuIdeas, ...dinnerMenuIdeas];

console.log(lunchMenuIdeas3)
// ... -> spread operator


const finalMenuItems = [
    "American CheeseBurger",
    "Southern Fried Chickecn",
    "Glazed Salamon"

];

const [winner, ...losers] = finalMenuItems;

// const [first, second, third] = finalMenuItems;

// console.log('before', {first}, {second});
// destructuring
// [second, first] = [first, second];
// console.log('after', {first}, {second});

// console.log({first});
// console.log(first);

console.log(winner)



// turning objects into arrays
const obj = { one: 1, two: 2 };

for (const key in obj){
    console.log('key', key);
    console.log('value', obj[key])
};

// Object.keys()
// Object.values()
// Object.entries()

// Object.keys()
const user = {
    name: 'Jhon',
    age: 29
};

//console.log(Object.keys(user))

const ageExists = Object.keys(user).includes('age');
console.log(ageExists);

const values = Object.keys(user).map(key => user[key]);
console.log(values);



// Object.values()
console.log(Object.values(user));


const monthlyExpenses = {
    food: 400,
    rent: 300,
    insurance: 100,
    internet: 10,
    phone: 12
};

const monthlyTotal = Object.values(monthlyExpenses).reduce((acc, expense) => acc + expense, 0);
console.log(monthlyTotal);




// Object.entries
console.log(Object.entries(user))

const users1 = {
    '2345': {
        name: "John",
        age: 29
    },
    '9878': {
        name: "Jane",
        age: 42
    },
    '1926': {
        name: "Fred",
        age: 17
    }
};

console.log(Object.entries(users1));

// we need to make arrays of objects then filter based ona condition
// map and filter
// due to map and filter is implemented using reduce
const usersOver20 = Object.entries(users1).reduce((acc, [id, user]) => {
    if(user.age > 20) {
        acc.push({ ...user, id  })
    }
    return acc;
}, []);

console.log(usersOver20);



// get unique sets of data
const customerDishes = [
    "Chicken Wings",
    "Fish Sandwich"
];

const uniqueDishes = [...new Set(customerDishes)];
console.log(uniqueDishes);


const numbers2 = new Set([1], [2], [3]);
for (const num of numbers2) {
    console.log(num);
}




// use New, immutable arrays freatures
const numbers4 = [1,2,3,4,5];

// instead of normal for loop use forEach
// for (let i = 0; i < numbers4.length; i++){
//     console.log(numbers4[i]);
// }

numbers4.forEach(number => {
    console.log(number);
});


/**
 * 
 * - map()
 * - filter()
 * - reduce()
 * - some() / every()
 * - find() / findIndex()
 * - forEach
 * 
 * 
 * 
 * Plus:
 * 
 * - slice()
 * - concat()
 * - includes()
 * - array spread operator ...
 */