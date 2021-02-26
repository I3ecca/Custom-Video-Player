const video = document.getElementById("video");
const play = document.getElementById("play");
//stop was being recognized as a function from TS nodes when adding event listener, so I changed the name to prevent that. 
const stopBtn = document.getElementById("stopBtn");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");


// Play & Pause video
function toggleVideoStatus() {
    if(video.paused){
        video.play();
    } else {
        video.pause();
    }
}

//update the play/pause icon
function updatePlayIcon() {
    if(video.paused){
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
    } else{
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
    }
}

//update progress and timestamp. 
function updateProgress() {
    return true;
}
//set video time to progress. 
function setVideoProgress() {
    video.currentTime = 0;
    video.pause();
}

//stop video 
function stopVideo(){
    return true;
}


// Event 
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);

stopBtn.addEventListener("click", toggleVideoStatus);

progress.addEventListener("change", setVideoProgress);




