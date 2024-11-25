
/* for navigation bar*/
hamburgur=document.querySelector(".hamburgur");
hamburgur.onclick=function(){
     navbar=document.querySelector(".nav");
    navbar.classList.toggle("active");
}
/*for homepage*/
function changeBg(){
    const image=[
        'url("./images/jordan3.png")',
        'url("./images/nike5.png")',
        'url("./images/puma7.png")',
        'url("./images/jordan6.png")',
        'url("./images/nike3.png")',
        'url("./images/jordan4.png")',
        'url("./images/nike6.png")',
        'url("./images/jordan5.png")',
        'url("./images/puma6.png")',
        'url("./images/puma3.png")',
    ]
    const shoeImage=document.querySelector(".shoe-background")
    const bg=image[Math.floor(Math.random()*image.length)];
    shoeImage.style.backgroundImage=bg;
}
setInterval(changeBg,1000)
/*for productpage*/
function addTOCart(){
    if(document.querySelectorAll('.btns')){
        window.alert("Your Order Is Succesfully Done")
    }
}
/*for overviewpage*/
const nextEl=document.querySelector(".fa-chevron-right");
const prevEl=document.querySelector(".fa-chevron-left");
const videoEl=document.querySelectorAll(".vid")
const videoContainerEl=document.querySelector(".video-container");
let currentVideo=1;
let timeout;
nextEl.addEventListener("click",()=>{
    currentVideo++;
    clearTimeout(timeout);
    updateVideo();
})
prevEl.addEventListener("click",()=>{
    currentVideo--;
    clearTimeout(timeout);
    updateVideo();
})
updateVideo();
function updateVideo(){
    if(currentVideo > videoEl.length){
        currentVideo=1;
    }
     else if(currentVideo < 1){
        currentVideo=videoEl.length;
    }
    videoContainerEl.style.transform=`translateX(-${(currentVideo-1)*485}px)`;
    timeout=setTimeout(()=>{
        currentVideo++;
        updateVideo();
    },11000)
}
