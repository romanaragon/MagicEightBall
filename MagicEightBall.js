/*variable where a user can put their name if they'd like.*/
let userName = '';
/*using a ternary expression to log a statement to the console depending on if they enter a name or not*/
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!')
/*this variable will be the question the user is asking the 8 ball*/
let userQuestion = '';
console.log(`Your question is ${userQuestion}`);
/*creating a new variable to represent a random number generated using the Math.random method, which produces a random number between 0 and 1. In order to get one in between 1 and 7 we multiply it by 8. It is inside Math.floor method to make sure the number is rounded down to a whole number.*/
let randomNumber = Math.floor(Math.random() * 8);
/*this variable will be assigned later depending on what the randomNumber variable is*/
let eightBall = '';
/*using a switch statement and consolelogging our magic 8 ball's response which is concatanated and reassigned to the eightBall variable via the assignment operator +=*/
switch(randomNumber){
  case 0:
    console.log(eightBall += 'It is certain');
    break;
  case 1:
    console.log(eightBall += 'It is decidedly so');
    break;
  case 2:
    console.log(eightBall += 'Reply hazy try again');
    break;
  case 3:
    console.log(eightBall += 'Cannot predict now');
    break;
  case 4:
    console.log(eightBall += 'Do not count on it');
    break;
  case 5:
    console.log(eightBall += 'My sources say no');
    break;
  case 6:
    console.log(eightBall += 'Outlook not so good');
    break;
  case 7:
    console.log(eightBall += 'Signs point to yes');
    break;
  defualt:
    console.log(eightBall += 'Try again');
    break;
}