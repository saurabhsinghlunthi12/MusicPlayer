const musicCard =document.getElementById("musicCard")
const picOfSong =document.getElementById("picOfSong")
const nameOfSong =document.getElementById("nameOfSong")
const audio =document.getElementById("audio")
const backward =document.getElementById("backward")
const play =document.getElementById("play")
const forward =document.getElementById("forward")
const vol=document.getElementById("vol");

forward.onclick=function(){
    audio.src="/shreeRam.mp3";
    picOfSong.src="/lordRam.webp";
    nameOfSong.textContent="Jai Shree Ram";
     }

    //  function playPause(){
    //     if(playPause){
    //         play.src="<i class="fa-solid fa-pause"></i>";
    //     }
    //  }
     
     
     backward.onclick=function(){
        audio.src="/Perfect.mp3";
        picOfSong.src="/Ed.jpg";
        nameOfSong.textContent="Perfect-Ed Sheeran";
     }