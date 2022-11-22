//display food
//foodElement = document.createElement('div');
//foodElement.style.gridRowStart = food.y;
//foodElement.style.gridColumnStart = food.x;
//foodElement.classList.add('food")
//body.appendChild(snakeElement)
let inputDir = {x: 0, y:0};
let speed = 2; 
let lastPaintTime =0;
let snakeArr = [
    {x:1, y:2}
]
food = {x:4, y:2};
//Game function
function main(ctime) {
    window.requestAnimationFrame(main);
    if((ctime - lastPaintTime)/1000 < 1/speed) {
        //return;
    }
    lastPaintTime = ctime;
    gameEngine();
}
function gameEngine(){
    //updating the snake and food array

    //displaying food and length
    //display the snake
    marioLand.innerHTML = "";
    snakeArr. forEach((e, index) => {
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if(index === 0){ 
            snakeElement.classList.add('head');
            }
        else{
            snakeElement.classList.add('fluffy');
            }
        marioLand.appendChild(snakeElement);
    })
    //display the food
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food')
    marioLand.appendChild(foodElement);  
    if(ch1 === true){
        inputDir.x = 1;
        inputDir.y = 0;
        moveF();
        checkfood();
        ch1 = false;
    }
    if(ch2 === true){
        inputDir.x = -1;
        inputDir.y = 0;
        moveF();
        checkfood();
        ch2 = false;
    }
}
//main logic starts here
window.requestAnimationFrame(main);
function right(){
    ch1 = true;
}
function wrong(){
    ch2 = true;
}
function moveF(){
    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;
}
function checkfood(){
    if(snakeArr [0].y === food.y && snakeArr[0].x ===food.x){
        let a = 2;
        let b = 4;
        food = {x: Number(Math.round(a + (b-a)* Math.random())), y: Number(Math.round(a + (b-a)* Math.random()))}
        }
}