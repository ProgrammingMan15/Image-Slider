var left=document.getElementById("left");
var right=document.getElementById("right");

right.addEventListener("click",()=>{
    var slider=document.querySelector(".slider");
    slider.scrollBy({
        left:370,
        right:0,
        behavior:"smooth"
    })
});
left.addEventListener("click",()=>{
    var slider=document.querySelector(".slider");
    slider.scrollBy({
        left:-370,
        right:0,
        behavior:"smooth"
    })
});