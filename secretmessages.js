// create a array of messages
// recomendation from Ashumeet is to create one array with all the messages inside and should be all string
let secretMsg1 = ['today','is', 'a','beautiful',' day'];
let secretMsg2 = ['if','you', 'were','born','today','you','are','lucky'];
let secretMsg3 = ['friday','is', 'great','summer','day'];
let secretMsg4 = ['Monday','is', 'reserved','for','family','day'];
let secretMsg5 = ['Thursday','is', 'reserved','for ','children','fun','day'];
let secretMsg6 = ['Tuesday','is', 'reserved','for','senior','dacing'];
let displayMessages = [];// try to push data into this array

// create a function to generate random number  -------------
let randomNumber;
function getRandomNumber () {

   randomNumber =  Math.floor(Math.random()* 7);
  //console.log(randomNumber); 
  return randomNumber;
      
};

console.log(getRandomNumber(randomNumber));

let secretMsg = " "; // this is not being used at all. I set it up as a space holder but did not get to use it
// this is the switch using the randomNumber to access the secret message
switch ( randomNumber) {

    case 0:
        console.log(secretMsg1.join(' ')); 
        break;

    case 1:
        console.log(secretMsg2.join(' '));
        break;

    case 2:
       console.log(secretMsg3.join(' '));
       break;

    case 3:
        console.log(secretMsg4.join(' '));
        break;

    case 4:
        console.log(secretMsg5.join(' '));
        break;
    case 5:
        console.log(secretMsg6.join(' '));
        break;
        default:
            break;
       
}  




