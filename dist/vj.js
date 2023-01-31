let audioElement= new Audio('1.mp3');
let play=document.getElementById('play');
let index=0;
let songinfo=document.getElementById('songinfo');

let songItem=(document.querySelectorAll('.songItem'));
let progressed=document.getElementById('progressed');
let progressBar=document.getElementById('progressBar');

// controlling play,pause icon 

play.addEventListener('click',()=>{
    if(audioElement.currentTime<=0||audioElement.paused)
    {
        audioElement.play();
        play.classList.replace('fa-circle-play','fa-circle-pause');
        
    }
    else{
            audioElement.pause()
            play.classList.replace('fa-circle-pause','fa-circle-play');
    }

})


let songs=[
    { songName:"Blinding Lights ", filePath:"1.mp3",coverPath:'bl.png'},
    { songName:"Save Your Tears ", filePath:"2.mp3",coverPath:'syt.jpg'},
    { songName:"Die for you ", filePath:"3.mp3",coverPath:'cover.webp'},
    { songName:"Call Out My Name ", filePath:"4.mp3",coverPath:'comn.webp'},
    { songName:"I feel it coming  ", filePath:"5.mp3",coverPath:'ific.gif'},
]
songItem.forEach((element,i)=>{

    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText=songs[i].songName;
})
const makeAllPlays=()=>{
         Array.from(document.getElementsByClassName('songPlay')).forEach((element)=>{
            element.classList.remove('fa-circle-pause');
            element.classList.add('fa-circle-play');
         })
   
}
Array.from(document.getElementsByClassName('songPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        
        makeAllPlays();
        index= parseInt(e.target.id);
        console.log(`${index}`," hi ");
         e.target.classList.remove('fa-circle-play');
         e.target.classList.add('fa-circle-pause');
        audioElement.src=songs[index].filePath;
        document.getElementById('songinfo').innerText=songs[index].songName;
        audioElement.currentTime=0;  
        audioElement.play();
        play.classList.replace('fa-circle-play','fa-circle-pause');
        
        
         
        
    })
})
audioElement.addEventListener('timeupdate',()=>{
    progressed.style.width=Math.floor(audioElement.currentTime*100/audioElement.duration)+"%";
})
progressBar.addEventListener('click',(e)=>{
    audioElement.currentTime=((e.offsetX/progressBar.offsetWidth)*audioElement.duration);
})
let song=document.getElementsByClassName('song');

//previous and next button 
document.getElementById('previous').addEventListener('click',()=>{
    if (index=0)
    {
        index=0;
    }
    else{
        index-=1;
        
    }
    audioElement.src= `${index+1}.mp3`;
    songinfo.innerText=songs[index].songName;
    audioElement.currentTime=0;
    audioElement.play();
    play.classList.remove('fa-circle-play');
    play.classList.add('fa-circle-pause');
})
document.getElementById('next').addEventListener('click',()=>{
    if(index>=9)
    {
        index=0;
    }
    else
    {
        index+=1;
    }
    audioElement.src= `${index+1}.mp3`;
    songinfo.innerText=songs[index].songName;
    audioElement.currentTime=0;
    audioElement.play();
    play.classList.remove('fa-circle-play');
    play.classList.add('fa-circle-pause');


})


