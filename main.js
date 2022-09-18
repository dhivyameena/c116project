noseX=0;
noseY=0;

function preload() {
    lips=loadImage('https://i.postimg.cc/qq08hFb9/lips.png')
}

function setup() {
canvas=createCanvas(300, 300);
canvas.center();
video=createCapture(VIDEO);
video.size(300, 300);
video.hide();

poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(lips, noseX, noseY, 25, 15)
}

function take_snapshot() {
    save('filter_app_pic.png')
}

function modelLoaded() {
    console.log('posenet is loaded');
}

function gotPoses(results) {
    if(results.length>0) {
        console.log(results);
        noseX=results[0].pose.nose.x-15;
        noseY=results[0].pose.nose.y+18;  
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}