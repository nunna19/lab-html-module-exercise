// Rover Object Goes Here
// ======================

var theRover = {
  direction: 'N',
  x : 0,
  y : 0,
 position : [],
 travelLog : []
};


theRover.position.push(theRover.x);
theRover.position.push(theRover.y);
var position = theRover.position;


console.log('Your current direction is: ' + theRover.direction);
console.log('Your current position is: ' + theRover.position);


var rover1 = function(){
var board = [
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, 'T', null],
  [null, null, null, null, null, null, null],
  [null, null, 'R', null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, 'T', null],
  [null, null, null, null, null, null, null],
  [null, 'R', null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
];

for (this.x = 0 ; this.x < board.length; this.x++){
}
for (this.y = 0 ; this.y < board.length; this.y++){
}
console.log('x and y was called // totle area = ' + this.x * this.y)




function turnLeft(rover){
  
 
  switch(this.direction){
    case ('N'):
    this.direction = 'W';
    break;
    case ('W'):
    this.direction = 'S';
    break;
    case ('S'):
    this.direction = 'E';
    break;
    case ('E'):
   this.direction = 'N';
    break;
  }
  console.log("turnLeft was called!");
}


function turnRight(rover){
  switch(this.direction){
    case ('N'):
   this.direction = 'E';
    break;
    case ('E'):
    this.direction = 'S';
    break;
    case ('S'):
   this.direction = 'W';
    break;
    case ('W'):
   this.direction = 'N';
    break;
  }
  console.log("turnRight was called!");
}



function moveForward(rover){
  
  if (this.direction === 'N' && this.y > 0){
    this.y += -1;
    console.log('move to N');
  }else if (this.direction === 'W' && this.x > 0){
    this.x += -1;
    console.log('move to W');
  }else if (this.direction === 'S' && this.y < (this.y + 1)) {
    this.y += +1;
    console.log('move to S');
  }else if (this.direction === 'E' && this.y <  (this.y +1)) {
    this.y += +1;
    console.log('move to E');
  }else {
    console.log ('your backforward go to the wall wall please try again!!!')
  }
  console.log("move forward was called!");
}


function order(commands){

  for (var i = 0 ; i < commands.length; i++){

  switch (commands[i]){
    case ('f'):
    moveForward();
    break;
    case ('r'):
    turnRight();
    break;
    case ('l'):
    turnLeft();
    break;
    case ('b'):
    moveBackwards();
    break;
    default:
    console.log('please try again : use l = left, r = right, b = backward and f = forward ');
  }
}
}



function moveBackwards(){

  if (this.direction === 'N' && this.x > (this.x +1)){
this.x += +1;
  }else if (this.direction === 'S' && this.x > 0) {
    this.x += -1;
  }else if (this.direction === 'W' && this.y > (this.y + 1)){
    this.y += +1;
  }else if (this.direction === 'E' && this.y > 0  ){
    this.y += -1;
  }else {
    console.log('your backforward go to the wall try another direction!!!');
  }
console.log('moveBackwards was called');
}




function obstacles(){
  if (this.x[this.x] === 'T' || this.y[this.y] === 'T' ){
   console.log('your direction have obstacle!! Please change direction!!' + this.x[this.x] + ', '+ this.y[this.y]);
  }else if (this.x[this.x] === 'R' || this.y[this.y] === 'R'){
   console.log('your direction have obstacle!! Please change direction!!');
  }
  console.log('obstacles was called')
 }
 obstacles();





function tracking(){
turnLeft();
turnRight();
moveForward();
moveBackwards();

console.log('tracking was called')
return this.travelLog;
}
tracking();
console.log(theRover.travelLog);





function obstacles(){

  for (this.x = 0 ; this.x < board.length; this.x++){
    
  }
  for (this.y = 0 ; this.y < board.length; this.y++){
  }

 if (this.x[this.x] === 'T' && this.y[this.y] === 'T' ){
  console.log('your direction have obstacle!! Please change direction!!' + this.x[this.x] + ', '+ this.y[this.y]);
 }else if (this.x[this.x] === 'R' && this.y[this.y] === 'R'){
  console.log('your direction have obstacle!! Please change direction!!');
 }
 console.log('obstacles was called')
}
obstacles();






console.log('......///////.....try commands....///////..........')
order('frlb');


console.log('......///////.....wrong commands....///////..........')
order('ffzzy');

}
rover1();




console.log('.........................................................................................................')
console.log('/////////////////////another Rover//////////////')



var rover2 = function(){
  var theRover = {
    direction: 'N',
    x : 0,
    y : 0,
   position : [],
   travelLog : []
  };
  
  
  theRover.position.push(theRover.x);
  theRover.position.push(theRover.y);
 
  var position2 = theRover.position;
  
  
  console.log('Your current direction is: ' + theRover.direction);
  console.log('Your current position is: ' + theRover.position);
  
  rover1();
  
}
rover2();



function otherRovers(){
if (rover1.position === rover2.position2){
  console.log('the Rovers crash  ')
}else if ((rover1.position - rover2.position2) === 1 || (rover1.position - rover2.position2) === -1){
console.log ('the Rover going to crach')
}else (
  commands()
)
}
otherRovers();
