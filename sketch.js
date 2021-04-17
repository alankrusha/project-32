const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg = "sunrise1.png";
var hours;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
    background(backgroundImg);

    Engine.update(engine);

    // write code to display time in correct format here
    textSize(20);
    fill ("black");
    text("Time: " + hours , 50, 500);

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/kolkata");
    //change the data in JSON format
    var responseJSON = await response.json();
    // write code slice the datetime
    var dtTime = responseJSON.datetime;
    hours = dtTime.slice(11, 13);
    // add conditions to change the background images from sunrise to sunset
    if(hours >= 04 && hours <= 06){
        bg = "sunrise1.png";
    }else if(hours >= 06 && hours <= 08){
        bg = "sunrise2.png";
    }else if(hours >= 23 && hours <= 00){
        bg = "sunset10.png";
    }else if(hours >= 00 && hours <= 03){
        bg = "sunset11.png";
    }else {
        bg = "sunset12.png";
    }
    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
    console.log(hours);
}
