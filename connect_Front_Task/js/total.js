

function setStyleRound() {
    let rounds = document.querySelectorAll(".round");
    let parent = document.querySelector(".horizontal");
    let mainHeight = parent.offsetHeight / (rounds.length - 1);
    let topPos = 0;
    for (let r of rounds) {
        r.style.top = topPos + "px";
        topPos += mainHeight;
    }
    if (window.innerWidth < 768) {
        parent.style.display = "none";
    }else {
        parent.style.display = "block";
    }
}

setStyleRound();

window.addEventListener("resize", function () {
    setStyleRound();
})

$('.round').tooltip()





let items=document.querySelectorAll(".itemE")
for(let i=0;i<items.length;i++){
    if(i==0){
        items[i].style.display="block";
    }
    else{
        items[i].style.display="none";
    }
    
}