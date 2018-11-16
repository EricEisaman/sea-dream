window.config = {
 gameName:"Sea Dream",
 // https://emojipedia.org/  leave as "" if you want no emoji
 emoji:"💫",
 // https://www141.lunapic.com/editor/  http://icoconvert.com/
 favicon:"https://cdn.glitch.com/684a531a-502e-4b52-a097-a4bc6aaed6cb%2Fstar.ico",
 theme:{
  // https://fonts.google.com/ examples: Kirang Haerang, Megrim, Permanent Marker, Orbitron, Monoton
  fontFamily:"Spicy Rice",
  fontColor:"#3351e8",
  formColor:"#f4ca4b",
  overlayColor:"rgba(255,255,0,0.4)",
  fontSize:3
 },
 avatar:{
  models:["https://cdn.glitch.com/fbe5330c-72c9-4613-8c7d-21b7376284bd%2FFish2.glb?1541866454395",
          "https://cdn.glitch.com/f54ba682-ab47-46e4-bf61-5e68e6053f18%2Fthing-idle.glb?1532828880828",
          "https://cdn.glitch.com/f54ba682-ab47-46e4-bf61-5e68e6053f18%2Fowl.glb?1532839615976",
          "https://cdn.glitch.com/162b879e-fd42-40d9-8519-671d783b8c70%2Fgreeny_animated.glb?1537474053675",
          "https://cdn.glitch.com/162b879e-fd42-40d9-8519-671d783b8c70%2Fred_thing.glb?1537622937733"],
  buttonFaces: ["https://cdn.glitch.com/fbe5330c-72c9-4613-8c7d-21b7376284bd%2Ffishy.png?1541867293794",
          "https://cdn.glitch.com/f54ba682-ab47-46e4-bf61-5e68e6053f18%2Fweebs.png?1532833980859",
          "https://cdn.glitch.com/f54ba682-ab47-46e4-bf61-5e68e6053f18%2Fowl.png?1532839076824",
          "https://cdn.glitch.com/162b879e-fd42-40d9-8519-671d783b8c70%2Fgreeny_btn.png?1537463045668",
          "https://cdn.glitch.com/162b879e-fd42-40d9-8519-671d783b8c70%2Fred_thing.png?1537622885960"],
  buttonColor: '#fff',
  speed: 100,
  height: 2.3
 },
 sounds:{
  playerJoined: {url:'https://cdn.glitch.com/fbe5330c-72c9-4613-8c7d-21b7376284bd%2Fdeep_ocean.mp3?1541696086467'},
  playerLeft: {url:'https://cdn.glitch.com/3294c4a3-a3d8-412f-a31e-1e03d1cd1cbd%2Fplayer-leave.mp3?1532440646173'},
  yay: {url:'https://cdn.glitch.com/162b879e-fd42-40d9-8519-671d783b8c70%2Fyay.mp3?1538839840045',loop:false,volume:0.8}
 },
 msg:{
  color: "#f9b939",
  offset: "0 2.3 -0.51"
 },
 // https://github.com/feiss/aframe-environment-component
 environment:{
  preset:"default",
  seed:0.3,
  shadow:true,
  playArea:1.3, 
  shadow:true,
  shadowSize:10,
  dressing:"",
  dressingAmount:12, 
  dressingColor:"black",
  dressingScale:15,
  dressingVariance:"20 30 40",
  dressingUniformScale:false,
  fog:0.9, 
  flatShading:true,
  skyType:"", 
  horizonColor:"", 
  skyColor:"",
  ground:"",
  groundYScale:5,
  groundTexture:"walkernoise",
  groundColor:"#acd8e5",
  groundColor2:"white",
  grid:"",
  gridColor:"",
  lighting:"",
  lightPosition:""
 },
 //Soundcloud track numbers from share/embed code
 bgm:{
  songs: [346757975],
  volume: 0.15,
  playAll: true,
  initialDelay: 5000
 },
 releasePointerLockOnUI: true,
 //SEE REF. http://keycode.info/
 keys:{
  toggleUI:'Equal',
  nextSong:'KeyP',
  toggleMute:'Digit0',
  toggleCursor:'KeyC'
 },
 //Run printVoices() in the game browser console
 voice:{
   name:'Bubbles',
   // from 0.1 to 10
   rate: 0.5,
   // from 0 to 2
   pitch: 0.25,
   // from 0 to 1
   volume: 1,
   // delay in milliseconds 
   welcomeDelay: 2000
 },
 physics:{
   //This gravity affects the players
   gravity: -0.02,
   maxGrabDistance: 20,
   //These objects are not affected by gravity or collisions, but you can grab and move them
   // https://github.com/aframevr/aframe/blob/master/docs/components/geometry.md
   // These objects require a unique name.
   objects:[
     {name:'Chest',model:'custom',
      url:'https://cdn.glitch.com/fbe5330c-72c9-4613-8c7d-21b7376284bd%2Fchest.glb?1541859601949',
      sound:{url:'https://cdn.glitch.com/fbe5330c-72c9-4613-8c7d-21b7376284bd%2Fshark.mp3?1541696259346'},
      scale:'0.2 0.2 0.2', physicsScale:'2 2 2', position:'10 0.5 -5',rotation:'0 -45 0',color:'#FFF',animated:true,shadow:true}
    ]
 },
 collectibles:{
   threshold:2,
   itemDefs:[
     {type:'treasure',scale:'0.4 0.4 0.4',rotation:'0 0 0',positions:['0 -0.1 -55','-20 -0.1 -25','20 -0.1 -15'],
      url:'https://cdn.glitch.com/fbe5330c-72c9-4613-8c7d-21b7376284bd%2Ftreasure.glb?1542401885335',
      objectSound:{url:'https://cdn.glitch.com/fbe5330c-72c9-4613-8c7d-21b7376284bd%2Fshark.mp3?1541696259346',volume:1},
      collectSound:{url:'https://cdn.glitch.com/fbe5330c-72c9-4613-8c7d-21b7376284bd%2Fcollect_1.mp3?1542402416919',volume:1},
      callback:'addPoint'
     }  
   ]
 },
 thruster:{
   activated:false,
   innerColor: "rgba(0,0,255,0.2)",
   outerColor: "rgba(255,255,255,0.2)"
 },
 mobile:{
   thruster_icon: "https://cdn.glitch.com/fbe5330c-72c9-4613-8c7d-21b7376284bd%2Fbubble.png?1541910910591",
   vy: -5,
   joystick_outer_color: "rgba(5, 31, 101, 0.2)",
   joystick_inner_color: "rgba(5, 31, 101, 0.4)"
 },
 vr: false
}