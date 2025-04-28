/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */

/* 
/* POPUP - GLOBALS */
const locations = document.querySelectorAll('.location');
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popup-title');
const popupText = document.getElementById('popup-text');
const popupAudio = document.getElementById('popup-audio');
const closeBtn = document.getElementById('close-btn');

/* MAP - CLICK ZOOM GLOBALS */
const mainBorder = document.getElementById("Main_Border");
const secondBorder = document.getElementById("Second_Border");
const church = document.getElementById("church");
const campResidence = document.getElementById("camp-residence");
const bigCave = document.getElementById("big-cave");
const smallCave = document.getElementById("small-cave");


/* POPUP GENERATOR */

locations.forEach(loc => {
  loc.addEventListener('click', () => {

    locations.forEach(l => l.classList.remove('active'));
    console.log('popups firing.')
    loc.classList.add('active');

    const title = loc.getAttribute('data-title');
    const text = loc.getAttribute('data-text');
    const audio = loc.getAttribute('data-audio');

    popupTitle.textContent = title;
    popupText.textContent = text;
    popupAudio.src = audio;

    popup.classList.remove('hidden');

  });
});

function closePopup() {
  popup.classList.remove('active');
}


closeBtn.addEventListener('click', () => {
  popup.classList.add('hidden');
  popupAudio.pause();
  popupAudio.currentTime = 0;

  closePopup();
});

/* ESCAPE KEY FUNCTIONALITY */

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    if (!popup.classList.contains('hidden')) {
      popup.classList.add('hidden');
      popupAudio.pause();
      popupAudio.currentTime = 0;
      closePopup();
    }

    resetMapZoom();

  }

});



/* MAP - ZOOM FUNCTIONALITY */


/* TRIED SOMETHING BASED ON (link here: ). MADE MY HEAD HURT 

let churchClicked=false; 
let campResidenceClicked=false;
let smallCaveClicked=false;
let bigCaveClicked=false;



function revertAll(){
    churchClicked=
    campResidenceClicked=
    smallCaveClicked=
    bigCaveClicked=false;
    gsap.to(map, {
      attr:{ViewBox:"0 0 1920 1080"}

    });
};

let church_min = gsap.to(map, {
  paused:true,
  attr:{viewBox:"0 0 1700 1400"}
});
let campResidence_min = gsap.to(map, {
  paused:true, 
  attr:{viewBox:"0 0 1700 1400"}
});
let smallCave_min = gsap.to(map, {
  paused:true,
  attr:{viewBox:"0 300 400 400"}
});
let bigCave_min = gsap.to(map, {
  paused:true,
  attr:{viewBox:"350 250 400 400"}
});

secondBorder.addEventListener("click", function(){
    revertAll();
});

church.addEventListener("click", function(){
  if(!churchClicked){
    church_min.play(0);
    churchClicked=true;
  }else{
    revertAll();
  }
  console.log(churchClicked);
});
campResidence.addEventListener("click", function(){
  if(!campResidenceClicked){
    campResidence_min.play(0);
    campResidenceClicked=true;
  }else{
    revertAll();
  }
  console.log(campResidenceClicked);
});

*/


/* Code reference: https://github.com/anvaka/panzoom */

/* MAP GLOBALS */


const map = document.getElementById('map-illustration');
const mapIllustration = document.getElementById('map-svg');

// map control buttons 
const resetBtn = document.getElementById('reset');

let topLeft = {x: 0, y: 0};
let topRight = {x: 1, y: 0};
let bottomLeft = {x: 0, y: 1};
let bottomRight = {x: 1, y: 1};
let centerCenter = {x: 0, y: 0};

const mapZoom = panzoom(mapIllustration, {
  maxZoom: 5,
  minZoom: 2,
  initialZoom: 2,
  bounds: true,
  boundsPadding: 0.02,
  // now all zoom operations will happen based on the center of the screen
  transformOrigin: centerCenter
});

 

// minZoom: 0.7,
//initialX: 550,
//initialY: 300,
//  transformOrigin: centerCenter





//mapZoom.moveTo(-320,-120);
//mapZoom.zoomAbs(0.5, 7, 0.7);


//map svg initial position


// function to get the illustration's center

/*

const startMoveX = -90;
const startMoveY = -90;
const startCenterX = 950;
const startCenterY = 500;
const startScale = 0.7;

mapZoom.moveTo(startMoveX, startMoveY);
mapZoom.zoomAbs(startCenterX, startCenterY, startScale);

function getMapCenter() {
  const bbox = map.getBBox();
  const centerX = bbox.x + bbox.width / 2;
  const centerY = bbox.y + bbox.height / 2;
  return { x: centerX, y: centerY };
}

  


const center = getMapCenter();


*/



//zoom in
document.getElementById('zoom-in').addEventListener('click', function () {
  mapZoom.smoothZoom(center.x, center.y, 1.2);
});

//zoom out
document.getElementById('zoom-out').addEventListener('click', function () {
  const center = getMapCenter();
  mapZoom.smoothZoom(center.x, center.y, 0.8);
});

//reset button 

function resetMapZoom() {
  mapZoom.moveTo(10,20);
  mapZoom.zoomAbs(-200, -100, 0.7);
}


resetBtn.addEventListener('click', resetMapZoom);



mapZoom.on('panstart', function(e) {
  console.log('Fired when pan is just started ', e);
  // Note: e === instance.
});

mapZoom.on('pan', function(e) {
  console.log('Fired when the scene is being panned', e);
});

mapZoom.on('panend', function(e) {
  console.log('Fired when pan ended', e);
});

mapZoom.on('zoom', function(e) {
  console.log('Fired when scene is zoomed', e);
});

mapZoom.on('transform', function(e) {
  // This event will be called along with events above.
  console.log('Fired when any transformation has happened', e);
});




