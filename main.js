scoreleftwrist =0;
rightwristX= 0;
rightwristY= 0;
leftwristX= 0;
leftwristY= 0;
music = "";
music2 = "";
song="";
function preload(){
    loadSound("music.mp3")
    loadSound("music2.mp3")
}
function setup(){
    canvas = createCanvas(600,500)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
    poseNet = ml5.poseNet(video,modelloaded)
    poseNet.on('pose',gotPoses)
}
function draw(){
    image(video,0,0,600,500)
    
    fill("#cb74b3")
    stroke("#cb74b3")




    if(scoreleftwrist > 0.2){
        circle(leftwristX, leftwristY, 20)
        song.stop(music2)
        if(music==false){
            song.play(music)
            document.getElementById("song").innerHTML = "Song playing is "+ song;
        }
        in_number_leftwrist_y = Number(leftwristY)
        remove_decimals = floor(in_number_leftwrist_y) 
        volume = remove_decimals/500;
        document.getElementById("VOLUME").innerHTML = "Volume = "+volume;
        song.setVolume(volume)
}
}
function modelloaded(){
    console.log("modal has bean loaded")
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results)
        leftwristX = results[0].pose.leftWrist.x;
        leftwristY = results[0].pose.leftWrist.y;
        rightwristX = results[0].pose.rightWrist.x;
        rightwristY = results[0].pose.rightWrist.y;
      scoreleftwrist =results[0].pose.keypoints[9].score;
    }
    }