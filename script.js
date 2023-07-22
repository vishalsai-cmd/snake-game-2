var farr=[];     
let vargrid;
const gridsize=/* vargrid */40;
/* import {getinputDirection} from "./input.js"; */
const buttons=document.querySelector(".buttons");
var sequencearr = ['blue','red','yellow']
let lastRendertime=0;
let gameOver=false;
let snakespeed=10;
let inputDirection={x:0,y:0};
let lastinputDirection={x:0,y:0};
/* let snakex=5,snakey=5; */
/* let foodx,foody; */
const scoreElement=document.querySelector(".score");
let score1=localStorage.getItem("score");
const highscoreElement=document.querySelector(".high-score");
let highscore=localStorage.getItem("high-score") || 0;
highscoreElement.innerText=`High score:${highscore}`;
var foodsound=new Audio("snake.mp3");
let container=document.querySelector(".container");
document.getElementById("game").style['grid-template-rows']=`repeat(${vargrid},1fr);`
document.getElementById("game").style['grid-template-columns']=`repeat(${vargrid},1fr);`
let colors=document.querySelector(".colors");
let image=document.getElementById("image");
let image1=document.getElementById("image1");
let image2=document.getElementById("image2");
let gameover2=document.getElementsByClassName("gameover");
/* let power=document.getElementsByClassName("power"); */
var Audio=new Audio("foodsound.wav");

let score=0;
let snakebody=[
    {x:10,y:11},
    {x:11,y:11},
    {x:12,y:11}


]; 
let snakebody1=[
    {x:10,y:11},
    {x:11,y:11},
    {x:12,y:11}


]; 
let snakebody2=[
    {x:10,y:11},
    {x:11,y:11},
    {x:12,y:11}


]; 

 let food=[ 
    {a:10,b:20},
    {a:5,b:10},
    {a:15,b:25} 
];
let food1=[
    {a:20,b:30},
    {a:10,b:15},
    {a:12,b:25}
] 
let food2=[
    {a:12,b:11},
    {a:25,b:25},
    {a:8,b:22}
]
 let obstacle1=[
    {a:20,b:20},
]; 
let obstacle2=[
    {a:20,b:5}
];
let power=[
    {a:35,b:35}
]

const gameboard=document.getElementById("game");
const gameboard1=document.getElementById("game1");
x=true
function main(currentTime){
    if(gameOver && x){
        /* alert("your first chance is over");
        x=false
        location.reload() */
        displayGameover(gameboard); 
        return
        
    }
    animation1 = window.requestAnimationFrame(main);
     const secondsSinceLastRender=(currentTime-lastRendertime)/1000
     if (secondsSinceLastRender < 1/snakespeed) return 
    
    
    lastRendertime=currentTime

    update();
    draw();
    /* powerup();  */
} 
if(gameOver){
    displayGameover(gameboard1);
}
let animation1=window.requestAnimationFrame(main)

 function update(){
    updatesnake();
    updatesnake1();
    updateobstacle();
     updateobstacle1();
    checkDeath();
   /*  gameover(); */


} 
function draw(){
    gameboard.innerHTML='';
    drawsnake(gameboard);
    drawfood(gameboard);
    drawfood1(gameboard);
    drawobstacle(gameboard);
    drawobstacle1(gameboard);
    drawpower(gameboard);
}
function checkDeath(){
    gameOver=outsidegrid(getsnakehead())
}
const countdown=document.getElementById("countdown");
let setcountdown=setInterval(updatecountdown,1000);
let stratingtime=3;
let time=stratingtime*60;
function updatecountdown(){
    const minutes=Math.floor(time/60);
    const seconds=time%60;
    countdown.innerHTML=`time-remaining=${minutes}:${seconds}`;
    time--;
    if(minutes<0)
    {
        clearInterval(setcountdown);
        alert("game over.press ok to restart");
        location.reload();
    }
    
}
const foodelement=document.createElement("div");
const foodelement1=document.createElement("div");
const foodelement2=document.createElement("div");
foodelement.style.gridRowStart=food[0].a;
foodelement.style.gridColumnStart=food[0].b;
foodelement1.style.gridRowStart=food[1].a;
foodelement1.style.gridColumnStart=food[1].b;
foodelement2.style.gridRowStart=food[2].a;
foodelement2.style.gridColumnStart=food[2].b;
foodelement.classList.add("food");
foodelement1.classList.add("food1");
foodelement2.classList.add("food2");
let i=0;

function drawfood(gameboard){
     const foodelement=document.createElement("div");
     const foodelement1=document.createElement("div");
     const foodelement2=document.createElement("div");
     foodelement.style.gridRowStart=food[0].a;
     foodelement.style.gridColumnStart=food[0].b;
     foodelement1.style.gridRowStart=food[1].a;
     foodelement1.style.gridColumnStart=food[1].b;
     foodelement2.style.gridRowStart=food[2].a;
     foodelement2.style.gridColumnStart=food[2].b;
     foodelement.innerHTML="R";
     foodelement1.innerHTML="E";
     foodelement2.innerHTML="D";
     foodelement.style.color="white";
     foodelement1.style.color="white";
     foodelement2.style.color="white";
     gameboard.appendChild(foodelement);
     gameboard.appendChild(foodelement1);
     gameboard.appendChild(foodelement2);
} 
 function drawobstacle(gameboard){

   const obstacle=document.createElement("div");
    obstacle.style.gridRowStart= obstacle1[0].a;
    obstacle.style.gridColumnStart=obstacle1[0].b; 
    obstacle.classList.add("obstacle");
    gameboard.appendChild(obstacle);
}
const obstacle=document.createElement("div");
obstacle.style.gridRowStart= obstacle1[0].a;
obstacle.style.gridColumnStart=obstacle1[0].b; 
obstacle.classList.add("obstacle");
gameboard.appendChild(obstacle);
function drawobstacle1(gameboard){

    const obstacle3=document.createElement("div");
     obstacle3.style.gridRowStart= obstacle2[0].a;
     obstacle3.style.gridColumnStart=obstacle2[0].b; 
     obstacle3.classList.add("obstacle");
     gameboard.appendChild(obstacle3);
 } 
 const obstacle3=document.createElement("div");
obstacle3.style.gridRowStart= obstacle2[0].a;
obstacle3.style.gridColumnStart=obstacle2[0].b; 
obstacle3.classList.add("obstacle");
gameboard.appendChild(obstacle3);

function drawfood1(gameboard){
    const foodelement3=document.createElement("div");
    const foodelement4=document.createElement("div");
    const foodelement5=document.createElement("div");
    foodelement3.style.gridRowStart=food1[0].a;
    foodelement3.style.gridColumnStart=food1[0].b;
    foodelement4.style.gridRowStart=food1[1].a;
    foodelement4.style.gridColumnStart=food1[1].b;
    foodelement5.style.gridRowStart=food1[2].a;
    foodelement5.style.gridColumnStart=food1[2].b;
    foodelement3.innerHTML="A";
    foodelement4.innerHTML="L";
    foodelement5.innerHTML="T";
    foodelement3.style.color="white";
    foodelement4.style.color="white";
    foodelement5.style.color="white";
    gameboard.appendChild(foodelement3);
    gameboard.appendChild(foodelement4);
    gameboard.appendChild(foodelement5);
} 
const powerelement=document.createElement("div");
powerelement.style.gridRowStart=power[0].a;
powerelement.style.gridColumnStart=power[0].b;
powerelement.classList.add("power");
gameboard.appendChild(powerelement); 
function drawpower(gameboard){
    const powerelement=document.createElement("div");
    powerelement.style.gridRowStart=power[0].a;
    powerelement.style.gridColumnStart=power[0].b;
    powerelement.classList.add("power");
    gameboard.appendChild(powerelement);
}

const foodelement3=document.createElement("div");
    const foodelement4=document.createElement("div");
    const foodelement5=document.createElement("div");
    foodelement3.style.gridRowStart=food1[0].a;
    foodelement3.style.gridColumnStart=food1[0].b;
    foodelement4.style.gridRowStart=food1[1].a;
    foodelement4.style.gridColumnStart=food1[1].b;
    foodelement5.style.gridRowStart=food1[2].a;
    foodelement5.style.gridColumnStart=food1[2].b;
    foodelement3.innerHTML="A";
    foodelement4.innerHTML="L";
    foodelement5.innerHTML="T";
    
let currentFood = [];
let foodIndex=0;
let colorarr=["R","E","D"];
let colorarr1=["D","E","L","T","A"];
let seqarr=[];
seqarr.push(foodelement2);
seqarr.push(foodelement);
seqarr.push(foodelement1);

let seqarr1=[foodelement3,foodelement4,foodelement5];
let foodorder=0;
let foodorder1=0;
let foodorder2=0;
colors.innerHTML="RED";
let j=0;
const initgame = () =>{

     for(let i=0;i<snakebody.length;i++)
     {
        if((snakebody[i].x === obstacle1[0].b && snakebody[i].y === obstacle1[0].a) || (snakebody[i].x === obstacle2[0].b && snakebody[i].y === obstacle2[0].a))
        {
           console.log("sai");
           j++;
           Audio.play();
           if(j == snakebody.length)
           {
            image.style.visibility="hidden";
            console.log("sai2");
           }
           else if(j==2*(snakebody.length))
           {
            image1.style.visibility="hidden";
            console.log("sai3");
           }
           else if(j == 3*(snakebody.length))
           {
            image2.style.visibility="hidden";
            alert("gameover");
            location.reload();
           }
        }
     }
    for(let i=0;i<colorarr.length;i++)
    {
        if(snakebody[0].x === food[i].b && snakebody[0].y===food[i].a)
        {
            const updatefoodposition = () =>{
                food[i].a=Math.floor(Math.random()*40);
                food[i].b=Math.floor(Math.random()*40);
            }
            updatefoodposition();
            snakebody.push(food[i].a,food[i].b);
            foodorder++;
            foodorder1++;
            foodorder2++;
            foodelement.style.color="red";
            Audio.play();
            /* console.log(i); */
            if(foodorder==3)
            {
                if(i==2)
                {
                    /* console.log("sai"); */
                    score++;
                    colors.innerHTML="ALT";
                    localStorage.setItem("score-1",score1);
                    Audio.play();
                    
                }
            }
            scoreElement.innerText =`score:${score}`;
        }
        localStorage.setItem("score",score)
        if(foodorder1>=3){
            if(snakebody[0].x === food1[i].b && snakebody[0].y===food1[i].a)
        {
            const updatefoodposition = () =>{
                food1[i].a=Math.floor(Math.random()*40);
                food1[i].b=Math.floor(Math.random()*40);
            }
            Audio.play();
            updatefoodposition();
            snakebody.push(food1[i].a,food1[i].b);
            foodorder1++;
            foodorder2++;
            /* console.log(i); */
            if(foodorder1==6)
            {
                if(i==2)
                {
                    /* console.log("sai"); */
                    score++;
                    colors.innerHTML="RED";
                    Audio.play();
                    
                }
                i=0;
            }
            scoreElement.innerText =`score:${score}`;
        }
        }
        if(foodorder2>=6){
           /*  console.log("vijay"); */
            if(snakebody[0].x === food[i].b && snakebody[0].y===food[i].a)
        {
            const updatefoodposition = () =>{
                food[i].a=Math.floor(Math.random()*40);
                food[i].b=Math.floor(Math.random()*40);
            }
            Audio.play();
            updatefoodposition();
            /* console.log("vishal"); */
            snakebody.push(food[i].a,food[i].b);
            foodorder2++;
            /* console.log(i);
            console.log(foodorder2); */
            if(foodorder2==9)
            {
                if(i==2)
                {
                   /*  console.log("sai"); */
                    score++;
                    colors.innerHTML="ALT";
                    Audio.play();
                }
                i=0;
            }
            scoreElement.innerText =`score:${score}`;
        }
        }
    }
}
function updatesnake(){
    const inputDirection=getinputDirection();
    for(let i=snakebody.length-2;i>=0;i--){
        snakebody[i+1]={...snakebody[i]}
    } 
    snakebody[0].x+=inputDirection.x;
    snakebody[0].y+=inputDirection.y; 
    
    initgame();
    
    
}
function updatesnake1(){
    const inputDirection=getinputDirection();
    for(let i=snakebody1.length-2;i>=0;i--){
        snakebody1[i+1]={...snakebody1[i]}
    } 
    snakebody1[0].x+=inputDirection.x;
    snakebody1[0].y+=inputDirection.y; 
    
    initgame();
    
    
}
function gameover(){
for(let i=1;i<snakebody.length;i++){
    if(snakebody[0].x == snakebody[i].x && snakebody[0].y == snakebody[i].y)
    {
        alert("timeup");
    }
}
}
let velocity=1
 function updateobstacle(){
    const inputDirection=getinputDirection();
    obstacle1[0].b+=velocity;
    if(obstacle1[0].b>=40 || obstacle1[0].b<=0)
    {
       velocity*=-1;
    }
   
}
function updateobstacle1(){
    const inputDirection=getinputDirection();
    obstacle2[0].a+=velocity;
    if(obstacle2[0].a>=40 || obstacle2[0].a<=0)
    {
       velocity*=-1;
    }
   
}

function drawsnake(gameboard){
    snakebody.forEach(segment =>  {
        const snakeElement=document.createElement('div');
        snakeElement.style.gridRowStart=segment.y;
        snakeElement.style.gridColumnStart=segment.x;
        snakeElement.classList.add("snake");
        gameboard.appendChild(snakeElement);
    })
    

} 
function drawsnake1(gameboard){
    snakebody1.forEach(segment =>  {
        const snakeElement=document.createElement('div');
        snakeElement.style.gridRowStart=segment.y;
        snakeElement.style.gridColumnStart=segment.x;
        snakeElement.classList.add("snake");
        gameboard.appendChild(snakeElement);
    })
    

} 
function getsnakehead(){
    return snakebody[0]
}

window.addEventListener("keydown", e=>{
    switch(e.key){
        case 'ArrowUp':
            if(lastinputDirection.y!== 0) break
            inputDirection = {x:0,y:-1}
            break
        case 'ArrowDown':
            if(lastinputDirection.y !== 0) break
            inputDirection = {x:0,y:1} 
            break
        case 'ArrowRight':
            if(lastinputDirection.x !== 0) break
            inputDirection = {x:1,y:0}
            break
        case 'ArrowLeft':
            if(lastinputDirection.x !== 0) break
            inputDirection = {x:-1,y:0}
            break       

    }

})
pause=false
window.addEventListener("keydown",e=>{
    if(e.key == " " && pause == false)
    {
        window.cancelAnimationFrame(animation1);
        pause=true
        /* console.log("gamepause") */
         
    }
    if(e.key==" " && pause==true)
    {
        window.requestAnimationFrame(animation1);
        pause=false
    }
})
function getinputDirection(){
    lastinputDirection=inputDirection;
    return inputDirection;
}

const up=document.querySelector(".up");
const down=document.querySelector(".down");
const right=document.querySelector(".right");
const left=document.querySelector(".left");
up.addEventListener("click",() =>{
    inputDirection = {x:0,y:-1}
})
down.addEventListener("click",() =>{
    inputDirection = {x:0,y:1}
})
right.addEventListener("click",() =>{
    inputDirection = {x:1,y:0}
})
left.addEventListener("click",() =>{
    inputDirection = {x:-1,y:0}
}) 
function outsidegrid(position){
    return(
        position.x <1 || position.x > 39 || position.y < /* gridsize */0 || position.y > 40
    )
}
function displayGameover(gameboard1) {
    const gamebox = document.createElement('div');
    gamebox.classList.add('gameover');
    gamebox.style.height='700px';
    gamebox.style.width='300px';
    gamebox.style.textAlign="center";
    gamebox.style.padding="50px";
    gamebox.style.alignItems="center";
    gamebox.style.fontSize="5rem";
    gamebox.textContent = 'Game Over';
    gamebox.textcontent="`score:${score}`";
    gameboard1.appendChild(gamebox);
  }

  






