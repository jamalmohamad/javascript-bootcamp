const user1 = "Reed";
const user2 = "Doug";

const message = `User (user) says: (text)`;


function sendUserMessage(user, text) {
    console.log(`User ${user} says: ${text}`)

}

sendUserMessage(user1, 'Hey there');

let greeting = "hi";

function echo(input) {
    console.log(`${greeting} ${input}`);
}

echo(21);





function handleLikePost(){
    var likeCount = 0;

    likeCount += 1;
    console.log('like count: ', likeCount);
}

handleLikePost();


// closure
function handleLikePost2() {
    var likeCount = 0;
    return function addLike() {
        likeCount += 1;
        return likeCount;
    }

    console.log('like count: ', likeCount);
}



function countdown(startingNumber, step) {
    let countFromNum = startingNumber + step;
    return function decrease() {
      countFromNum -= step;
      return countFromNum;
    }
  }
  
  const countingDown = countdown(20, 5);
  
  console.log(countingDown());
  console.log(countingDown());
  console.log(countingDown());
  



  // degrees converter

  function converTemperature(celsius, decimalPlaces = 1) {
    // decimalPlaces = decimalPlaces || 1;
    const fahrenheit =  celsius * 1.8 + 32;
    return fahrenheit.toFixed(decimalPlaces);
  }


  console.log(converTemperature(21,0));


  // anonymous functions - lambda functions
  
  const username = 'john';
  const capitalize = (name) => { 
    return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
  }


  const capitalize2 = name => `${name.charAt(0).toUpperCase()}`;

  console.log(capitalize(username));
  console.log(capitalize2(username));



  // callback - call one function from another function, this called higher order functions f(g x)

  function greetUser(name, callback) {
      return callback(capitalize(name));
  }

  const result = greetUser(username, (name) => {
      return `Hi there, ${name}`
  });


  console.log(result);



  // partial applications
  function getData(baseUrl, route) {
      fetch(`${baseUrl}${route}`)
        .then(response => response.json())
        .then(data => console.log(data));
  } 