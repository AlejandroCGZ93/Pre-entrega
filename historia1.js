let video = document.querySelector('video');
let botonPlay = document.getElementById('play');
let botonPause = document.getElementById('pause');



botonPlay.addEventListener('click',()=>{
    video.play();
});

botonPause.addEventListener('click',()=>{
    video.pause();
});

