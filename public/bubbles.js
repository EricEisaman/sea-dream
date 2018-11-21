let height;

window.makeBubbles = function(stringsArray){
  let bubbles = [];
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
   bubbles.push({b:b,i:i,s:s,t:window.innerHeight});
  });
  animateBubbles(bubbles);
  window.sounds.bubbles.play();
}

function animateBubbles(bubbles){
  let numRemoved = 0;
  let id = window.setInterval(()=>{
    bubbles.forEach(b=>{
      b.t-= (b.s.length)?b.i+2:4*Math.random();
      b.b.style.top = b.t + "px";
      if(b.t < -window.innerHeight) {
       bubbles.forEach(b=>{
         b.b.remove();
       });
       window.clearInterval(id);
      }
    });
  },10);
}

window.makeBubbles(['TREASURE HUNT','MULTIPLAYER','','','','','','']);
