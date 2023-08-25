const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");
const imgsEl = document.querySelectorAll("img");
const imgEl = document.querySelector(".image-container");
let currentImg = 1;
let timeOut;
// console.log(imgsEl.length);

updateimg();

nextEl.addEventListener("click",()=>{
    currentImg++;
    clearTimeout(timeOut);
    updateimg();
    
});

prevEl.addEventListener("click",()=>{
    currentImg--;
    clearTimeout(timeOut);
    updateimg();
    
})





function updateimg(){ 
    if(currentImg > imgsEl.length){
        currentImg=1;
    }
    else if(currentImg < 1){
        currentImg = imgsEl.length;
    }
    imgEl.style.transform = "translateX(-" +((currentImg-1)*500)+ "px)";

    timeOut = setTimeout(()=>{
        currentImg++;
        updateimg();  
    },3000);
}