const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// Play & Pause video
function toggleVideoStatus() {
    if(video.paused){
        video.play();
    } else {
        video.pause();
    }
    
}

// Update play/pause icon
function updatePlayIcon() {
    if(video.paused){
        play.innerHTML = `<i class="fa fa-play fa-2x"></i>`
    } else {    
        play.innerHTML = `<i class="fa fa-pause fa-2x"></i>`
    }
}

// Update progress and timestamp
function updateProgress() {
    progress.value = video.currentTime/video.duration * 100;
    let minute = Math.floor(video.currentTime/60);
    if(minute<10){
        minute = '0' + String(minute);
    }
    let second = Math.floor(video.currentTime - minute*60);
    if(second<10){
        second = '0' + String(second);
    }
    timestamp.innerText = `${minute}:${second}`;
}

// Stop video
function stopVideo(){ 
    video.pause();
    video.currentTime = 0;
}

// Set video time to progress
function setVideoProgress() {
    video.currentTime = +progress.value * video.duration / 100
}

// Event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);
