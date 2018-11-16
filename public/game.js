let player = window.player;
player.within = function(distance,name){
  return player.object3D.position.distanceTo(window.bodies[name].object3D.position) <= distance;
}
player.distanceTo = function(name){
  return player.object3D.position.distanceTo(window.bodies[name].object3D.position);
}
player.awayFrom = function(name,distance){
  return player.object3D.position.distanceTo(window.bodies[name].object3D.position) > distance;
}

let specificOtherPlayersAndMyselfWithin = function(distance,names){



}

let anyOtherPlayersAndMyselfWithin = function(distance,numberOfOtherPlayers){



}

let allPlayersButMyselfWithin = function(distance){



}

let allPlayersAndMyselfWithin = function(distance){


}

let bodiesWithin = function(distance,names){
  let result = true;
  names.forEach(name=>{
    names.forEach(n=>{
      if(window.bodies[name].object3D.position.distanceTo(window.bodies[n].object3D.position) > distance)
      {
        result = false;
        return;
      }
    });
  });
  return result;
 }

let stopBodySound = function(name){
  if(window.bodies[name].soundState === 0) return;
  window.bodies[name].querySelector('a-sound').components.sound.stopSound();
  //console.log("STOP BODY SOUND");
  window.bodies[name].dirty = true;
  window.bodies[name].soundState = 0;
}

let playBodySound = function(name){
  if(window.bodies[name].soundState == 1) return;
  window.bodies[name].querySelector('a-sound').components.sound.playSound();
  //console.log("PLAY BODY SOUND");
  window.bodies[name].dirty = true;
  window.bodies[name].soundState = 1;
}

let bodySoundIsPlaying = function(name){
  return window.bodies[name].soundState;
  //return window.bodies[name].querySelector('a-sound').components.sound.isPlaying;
}

let bodyHasSound = function(name){
  return window.bodies[name].querySelectorAll('a-sound').length > 0;
}



/******************************
/
/ User Defined Callbacks
/
/******************************/

window.addPoint = function(playerId){
  if(window.socket.id == playerId){
   if(!player.score)player.score = 0;
   console.log(`Your Score: ${++player.score}`);
  }else{
   if(!window.otherPlayers[playerId].score)window.otherPlayers[playerId].score = 0;
   console.log(`${window.otherPlayers[playerId].name}'s Score: ${++window.otherPlayers[playerId].score}`);
  }
}













