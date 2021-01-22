score=0;
cross=true;
audio=new Audio("music.mp3");
audiogo=new Audio("gameover.mp3");
setTimeout(() => {
   audio.play();
}, 1000);
document.onkeydown=function(e){
    
    
    if(e.keyCode==38){
        boy=document.querySelector(".boy");
        boy.classList.add("animateBoy");
        setTimeout(() => {
            boy.classList.remove("animateBoy");
        },700);
    }
    if(e.keyCode==39){
        boy=document.querySelector(".boy");
        boyX=parseInt(window.getComputedStyle(boy,null).getPropertyValue('left'));
        boy.style.left=boyX+150+"px";
    }
    if(e.keyCode==37){
        boy=document.querySelector(".boy");
        boyX=parseInt(window.getComputedStyle(boy,null).getPropertyValue('left'));
        boy.style.left=boyX-150+"px";
    }
    
}
setInterval(() => {
    boy=document.querySelector(".boy");
    gameOver=document.querySelector(".gameOver");
    zombie=document.querySelector(".zombie");
    bx=parseInt(window.getComputedStyle(boy,null).getPropertyValue('left'));
    by=parseInt(window.getComputedStyle(boy,null).getPropertyValue('top'));
    zx=parseInt(window.getComputedStyle(zombie,null).getPropertyValue('left'));
    zy=parseInt(window.getComputedStyle(zombie,null).getPropertyValue('top'));
    offsetX=Math.abs(bx-zx);
    offsetY=Math.abs(by-zy);
    if(offsetX<73 && offsetY<52){
        gameOver.style.visibility="visible";
        zombie.classList.remove("zombieAni");
        cross=false;
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        },1000);
    }
    else if(offsetX<145 && cross){
        score+=25;
        updateScore(score);
        cross=false;
        setTimeout(() => {
            cross=true;
        }, 1000);
        setTimeout(() => {
            aniDur=parseFloat(window.getComputedStyle(zombie,null).getPropertyValue('animation-duration'));
            newDur=aniDur-0.1;
            zombie.style.animationDuration+newDur+"s";
        },500);
        
    
    }
},10);
function updateScore(score){
    scoreContd.innerHTML="Your Score:"+score;
}