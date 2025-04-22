/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */


/* RIVER ANIMATION USING P5.js 

Making into a comment for now cause it's stressing me out. I don't think I have time to learn p5.js. :'()

let ripple = false;
let riverSound; 
let mute = false;

function preload() {
  riverSound = loadSound("audio/streambox-owl.wav");
}

function setup() {
  let cnv = createCanvas(windowWidth, 300);
  cnv.parent("p5-river");
  noStroke();
  riverSound.setLoop(true);
}

function draw() {
  clear();
  background(0, 0, 255, 30);

  fill(173, 216, 230, 150);
  for (let x = 0; x < width; x += 20) {
    let y = 150 + sin((frameCount + x) * 0.05) * 10;
    ellipse(x, y, 20, ripple ? 25 : 10);

  }

  if (ripple && !riverSound.isPlaying() && !mute) {
    riverSound.play();
  } else if (!ripple && riverSound.isPlaying()) {
    riverSound.stop();
  }


 }

 function mouseMoved() {
  ripple = mouseY > 0 && mouseY < 300;
 }

 function mouseOut() {
  ripple = false;
 }

*/ 



/* POPUP */


const locations = document.querySelectorAll('.location');
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popup-title');
const popupText = document.getElementById('popup-text');
const popupAudio = document.getElementById('popup-audio');
const closeBtn = document.getElementById('close-btn');


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

