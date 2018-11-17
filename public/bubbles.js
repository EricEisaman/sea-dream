let height;
window.makeBubbles = function(stringsArray){
  stringsArray.forEach((s,i)=>{
   let b = document.createElement('div');
   let v = (s.length)? Math.max(window.innerWidth/3,256):100*Math.random();
   let width = v;
   height = v;
   let img = document.createElement('img');
   img.src = "https://cdn.glitch.com/fbe5330c-72c9-4613-8c7d-21b7376284bd%2Fbubble.png?1542409700282";
   img.width = width;
   img.height = width;
   b.appendChild(img);
   let msg = document.createElement('div');
   msg.innerHTML=s;
   msg.style.fontSize = width/s.length + 15 + "px";
   msg.style.top = "-60%";
   msg.style.position = "relative";
   msg.style.textAlign = "center";
   b.appendChild(msg);
   b.style.zIndex = 1000;
   b.style.height = width;
   b.style.width = width;
   b.style.position = "absolute";
   b.style.top = window.innerHeight+"px";
   let a = (s.length)? width:10*width;
   b.style.left = window.innerWidth/2 - a + a*Math.random() +"px";
   document.getElementById('container').appendChild(b);
   animateBubble(b,i,s);
  });
  window.sounds.bubbles.play();
}

function animateBubble(b,i,s){
  let t = window.innerHeight;
  let id = window.setInterval(()=>{
    t-= (s.length)?i+2:3*Math.random();
    b.style.top = t + "px";
    if(t < -height) {
     window.clearInterval(id);
     b.remove();
    }
  },10);
}

window.makeBubbles(['TREASURE HUNT','MULTIPLAYER','','','','','','']);
