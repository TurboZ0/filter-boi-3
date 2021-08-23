noseX="";
noseY="";

function preload() {
    imageak47=loadImage ("https://i.postimg.cc/3x3QzSGq/m.png");
}


function setup() {
    canvas= createCanvas(600, 500);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
    
    posenet=ml5.poseNet(video, foundresult);
    posenet.on("pose", poseing); 
}
function foundresult() {
    console.log("Posenet has finally been loaded");
}
function poseing(onresult) {
    console.log(onresult);
    console.log(onresult[0].pose.nose.x);
    console.log(onresult[0].pose.nose.y);
    
    noseX=onresult[0].pose.nose.x;
    noseY=onresult[0].pose.nose.y;

    }
    function capture() {
          save("mustacheFilter_30closely_accurate.png");
    }


function draw() {
    image(video, 0, 0, 600, 500);
    image(imageak47, noseX-60, noseY+10, 85, 45);
}