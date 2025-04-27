/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */


/* POPUP - GLOBALS */
const locations = document.querySelectorAll('.location');
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popup-title');
const popupText = document.getElementById('popup-text');
const popupAudio = document.getElementById('popup-audio');
const closeBtn = document.getElementById('close-btn');

/* MAP - CLICK ZOOM GLOBALS */
const map = document.getElementById("map");
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

closeBtn.addEventListener('click', () => {
  popup.classList.add('hidden');
  popupAudio.pause();
  popupAudio.currentTime = 0;

  locations.forEach(loc => loc.classList.remove('active'));
});


/* MAP - CLICK ZOOM FUNCTIONALITY */

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




