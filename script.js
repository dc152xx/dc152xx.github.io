let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
const botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg'
const beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg';
const spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg'
let currentlyPlaying = true;
let startButton = document.getElementById('start');
let numClosedDoors = 3; //document.getElementsByClassName("door-frame").length; //3


let openDoor1;
let openDoor2;
let openDoor3;

const closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';

const isBot = door => {
    if (door.src === botDoorPath){
        return true;
    } else {
        return false;
    }
}


const isClicked = door =>{
    if (door.src === closedDoorPath){
        return false;
    } else {
        return true;
    }
}


const playDoor = door =>{
    numClosedDoors -- ;
    if (numClosedDoors === 0){
        gameOver('win');
    } else if(isBot(door)){
        gameOver();
    }
}


const randomChoreGenerator = () =>{
    let choreDoor = Math.floor(Math.random()*numClosedDoors);
   // return choreDoor;
    if (choreDoor === 0){
        openDoor1 = botDoorPath;
        openDoor2 = spaceDoorPath
        openDoor3 = beachDoorPath
    } else if (choreDoor === 1){
        openDoor2 = botDoorPath;
        openDoor1 = beachDoorPath;
        opendoor3 = spaceDoorPath
    } else if (choreDoor === 2){
        openDoor3 = botDoorPath;
        openDoor1 = spaceDoorPath
        openDoor2 = beachDoorPath;
    }
}

doorImage1.onclick = () => {
    if (!isClicked(doorImage1) && currentlyPlaying){
        document.getElementById('door1').src = openDoor1;
        playDoor(doorImage1);
    }
    
}

doorImage2.onclick = () => {
    if (!isClicked(doorImage2) && currentlyPlaying){
        document.getElementById('door2').src = openDoor2;
        playDoor(doorImage2);
    }
}

doorImage3.onclick = () => {
    if (!isClicked(doorImage3) && currentlyPlaying){
    document.getElementById('door3').src = openDoor3;
    playDoor(doorImage3);
    }
}


startButton.onclick = () =>{
    if (!currentlyPlaying){
        startRound();
    }
}

const startRound = () =>{
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    numClosedDoors = 3;
    startButton.innerHTML = 'Good Luck!';
    startButton.style.paddingTop = '18px';
    startButton.style.paddingBottom = '0px';
    currentlyPlaying = true;
    randomChoreGenerator();

}



const gameOver = status =>{
    if (status === 'win'){
        startButton.innerHTML = 'YOU WIN! Play again?';
    } else {
        startButton.innerHTML = 'GAME OVER! Play again?';
    }
    startButton.style.paddingTop = '9px';
    startButton.style.paddingBottom = '9px';
    currentlyPlaying = false;
}


startRound();




//document.getElementById('start').innerHTML = randomChoreGenerator();