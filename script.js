var timer = 60;
var score =0;
var hitrnd=0;

function makebubble(){
    var clutter="";
for(var i=1;i<=176;i++){
    var rnd = Math.floor(Math.random()*10);
    clutter += `<div id="bubble">${rnd}</div>`;
                
}

document.querySelector("#pbtm").innerHTML=clutter;

}

function runTimer(){
    var timeInterval=setInterval(function(){
        if(timer>0){
            timer--;
        document.querySelector("#timeval").textContent=timer;
        }
        else{
            clearInterval(timeInterval);
            document.querySelector("#pbtm").innerHTML=`<h1 >GAME OVER</h1>`;
        }
    },1000)
}

function getHit(){
    hitrnd=Math.floor(Math.random()*10);
    document.querySelector("#hitval").innerHTML=hitrnd;
}

function scoreIncrease(){
    score += 10;
    document.querySelector("#scoreval").textContent=score;

}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickedNumber=(Number(dets.target.textContent));
    if(clickedNumber===hitrnd){
        scoreIncrease();
        getHit();
        makebubble();
    }


        
  
})


runTimer();
makebubble();
getHit();
 
