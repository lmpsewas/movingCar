

var n=0;

document.addEventListener("keyup", function(event){

   if(event.keyCode == 83 && n%2==0){
    let stop = document.getElementById("stop5");
    stop.style.animation = "none";
    let stop1 = document.getElementById("stop6");
    stop1.style.animation = "none";
    let stop2 = document.getElementById("stop7");
    stop2.style.animation = "none";
    let stop3 = document.getElementById("stop8");
    stop3.style.animation = "none";
    let stop4 = document.querySelectorAll(".nightimg img");
    stop4.forEach(function(element){
        element.style.animation = "paused";
        
    });
  

    n=n+1;
   }
  else{
    if(event.keyCode == 83 && n%2!=0){
        let stop = document.getElementById("stop5");
        stop.style.animation = "roadMove 3s linear infinite";
        let stop1 = document.getElementById("stop6");
        stop1.style.animation = "car 3s linear infinite";
        let stop2 = document.getElementById("stop7");
        stop2.style.animation = "wheel 0.35s linear infinite";
        let stop3 = document.getElementById("stop8");
        stop3.style.animation = "wheel 0.35s linear infinite";
        let stop4 = document.querySelectorAll(".nightimg img");
        stop4.forEach(function(element){
            element.style.animation = "bodymove 30s linear infinite";
            console.log(element);
            
        });
    //   This is for start engine with press s
            let engine = document.createElement("audio");
            engine.setAttribute("src", "./mediaFiles/carengine.mp3");
            engine.play();
  
        n=n+1;
       }
  }

//   Press h for play horn 
   if(event.keyCode == 72){
       let audio = document.createElement("audio");
       audio.setAttribute("src", "./mediaFiles/horn1.mp3");
       audio.play();
   }
  
 })
 