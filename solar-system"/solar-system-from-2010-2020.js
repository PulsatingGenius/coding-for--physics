gsap.registerPlugin(MotionPathPlugin);

//Get SVG path data from HTML, derived from Pug mixin
const mercuryOrbit = document.getElementById("orbit--mercury").getAttribute("d");
const venusOrbit = document.getElementById("orbit--venus").getAttribute("d");
const earthOrbit = document.getElementById("orbit--earth").getAttribute("d");
const marsOrbit = document.getElementById("orbit--mars").getAttribute("d");
const jupiterOrbit = document.getElementById("orbit--jupiter").getAttribute("d");
const saturnOrbit = document.getElementById("orbit--saturn").getAttribute("d");
const uranusOrbit = document.getElementById("orbit--uranus").getAttribute("d");
const neptuneOrbit = document.getElementById("orbit--neptune").getAttribute("d");

//Variables 
let button = document.getElementById("button");
let yearDisplay = document.getElementById("year");
let currentYear = {year:2020};
let dur = 2;
let ease= "power1.inOut";
let trail = 50;
let tl = gsap.timeline()

//Functions
//Update current year display
function countYear() {
  yearDisplay.innerHTML = currentYear.year;
}
//Toggle button text
function toggleButtonText() {
  if (button.innerHTML == "Play") {
    button.innerHTML = "Pause"
  } else {
    button.innerHTML = "Play"
  }
}
//Play and pause the timeline
function playAnimation() {
  tl.paused() ? tl.play() : tl.pause();
  toggleButtonText();
}

//GSAP ANIMATION TIMELINE 
//********************************************************

//Animate year count between 2020 and 2010
tl.to(currentYear,{
  year:"-=10",
  roundProps:"year",
  duration: dur,
  ease: ease,
  onUpdate:function(){
    countYear();
  }}, 0);

//Mercury
/////////////////////////////////////////////////////////
tl.to(".planet--mercury", {
  motionPath: {
    path: mercuryOrbit,
    start: .27,
    end: 40.89
  },
  duration: dur,
  ease: ease,
  immediateRender: true    
},0);

tl.to(".mask--mercury", {
    motionPath: {
      path: mercuryOrbit,
      autoRotate: true,
      start: .27,
      end: 40.89
    },
    scaleX: 1,
    duration: dur,
    ease: ease,
    immediateRender: true,
},0);

tl.to(".mask--mercury", { 
    width: trail, 
    duration: dur/2,
    ease: ease,
},0);

tl.to(".mask--mercury", { 
    width: 0, 
    duration: dur/2,
    ease: ease,
},1);

tl.fromTo(".mask--mercury",{ 
  scaleX: -1 }, { 
  scaleX: -1, duration: dur
}, 0);



//Venus
/////////////////////////////////////////////////////////
tl.to(".planet--venus", {
  motionPath: {
    path: venusOrbit,
    start: .99,
    end: 17.22
  },
  duration: dur,
  ease: ease,
  immediateRender: true
},0);

tl.to(".mask--venus", {
    motionPath: {
      path: venusOrbit,
      autoRotate: true,
      start: .99,
      end: 17.22
    },
    scaleX: 1,
    duration: dur,
    ease: ease,
    immediateRender: true,
},0);

tl.to(".mask--venus", { 
    width: trail, 
    duration: dur/2,
    ease: ease,
},0);

tl.to(".mask--venus", { 
    width: 0, 
    duration: dur/2,
    ease: ease,
},1);

tl.fromTo(".mask--venus",{ 
  scaleX: -1 }, { 
  scaleX: -1, duration: dur
}, 0);




//Earth
/////////////////////////////////////////////////////////
tl.to(".planet--earth", {
  motionPath: {
    path: earthOrbit,
    start: .72,
    end: 10.72
  },
  duration: dur,
  ease: ease,
  immediateRender: true  
},0);

tl.to(".mask--earth", {
    motionPath: {
      path: earthOrbit,
      autoRotate: true,
      start: .72,
      end: 10.72
    },
    scaleX: 1,
    duration: dur,
    ease: ease,
    immediateRender: true,
},0);

tl.to(".mask--earth", { 
    width: trail, 
    duration: dur/2,
    ease: ease,
},0);

tl.to(".mask--earth", { 
    width: 0, 
    duration: dur/2,
    ease: ease,
},1);

tl.fromTo(".mask--earth",{ 
  scaleX: -1 }, { 
  scaleX: -1, duration: dur
}, 0);



//Mars
/////////////////////////////////////////////////////////
tl.to(".planet--mars", {
  motionPath: {
    path: marsOrbit,
    start: .39,
    end: 5.67
  },
  duration: dur,
  ease: ease,
  immediateRender: true
}, 0);

tl.to(".mask--mars", {
    motionPath: {
      path: marsOrbit,
      autoRotate: true,
      start: .39,
      end: 5.67
    },
    scaleX: 1,
    duration: dur,
    ease: ease,
    immediateRender: true,
},0);

tl.to(".mask--mars", { 
    width: trail, 
    duration: dur/2,
    ease: ease,
},0);

tl.to(".mask--mars", { 
    width: 0, 
    duration: dur/2,
    ease: ease,
},1);

tl.fromTo(".mask--mars",{ 
  scaleX: -1 }, { 
  scaleX: -1, duration: dur
}, 0);


//Jupiter
/////////////////////////////////////////////////////////
tl.to(".planet--jupiter", {
  motionPath: {
    path: jupiterOrbit,
    autoRotate: true,
    start: .23,
    end: 1.07
  },
  duration: dur,
  ease: ease,
  immediateRender: true,
},0);


tl.to(".mask--jupiter", {
    motionPath: {
      path: jupiterOrbit,
      autoRotate: true,
      start: .23,
      end: 1.07
    },
    scaleX: 1,
    duration: dur,
    ease: ease,
    immediateRender: true,
},0);

tl.to(".mask--jupiter", { 
    width: trail, 
    duration: dur/2,
    ease: ease,
},0);

tl.to(".mask--jupiter", { 
    width: 0, 
    duration: dur/2,
    ease: ease,
},1);

tl.fromTo(".mask--jupiter",{ 
  scaleX: -1 }, { 
  scaleX: -1, duration: dur
}, 0);



//Saturn
/////////////////////////////////////////////////////////
tl.to(".planet--saturn", {
  motionPath: {
    path: saturnOrbit,
    autoRotate: true,
    start: .17,
    end: .51
  },
  duration: dur,
  ease: "power1.inOut",
  immediateRender: true,
},0);

tl.to(".mask--saturn", {
    motionPath: {
      path: saturnOrbit,
      autoRotate: true,
      start: .17,
      end: .51
    },
    scaleX: 1,
    duration: dur,
    ease: ease,
    immediateRender: true,
},0);

tl.to(".mask--saturn", { 
    width: trail, 
    duration: dur/2,
    ease: ease,
},0);

tl.to(".mask--saturn", { 
    width: 0, 
    duration: dur/2,
    ease: ease,
},1);

tl.fromTo(".mask--saturn",{ 
  scaleX: -1 }, { 
  scaleX: -1, duration: dur
}, 0);



//Uranus
/////////////////////////////////////////////////////////
tl.to(".planet--uranus", {
  motionPath: {
    path: uranusOrbit,
    autoRotate: true,
    start: .9,
    end: 1.02
  },
  duration: dur,
  ease: ease,
  immediateRender: true,
},0);


tl.to(".mask--uranus", {
    motionPath: {
      path: uranusOrbit,
      autoRotate: true,
      start: .9,
      end: 1.02
    },
    scaleX: 1,
    duration: dur,
    ease: ease,
    immediateRender: true,
},0);

tl.to(".mask--uranus", { 
    width: trail, 
    duration: dur/2,
    ease: ease,
},0);

tl.to(".mask--uranus", { 
    width: 0, 
    duration: dur/2,
    ease: ease,
},1);

tl.fromTo(".mask--uranus",{ 
  scaleX: -1 }, { 
  scaleX: -1, duration: dur
}, 0);



//Neptune
/////////////////////////////////////////////////////////
tl.to(".planet--neptune", {
  motionPath: {
    path: neptuneOrbit,
    autoRotate: true,
    start: .04,
    end: .1
  },
  duration: dur,
  ease: "power1.inOut",
  immediateRender: true,
},0);

tl.to(".mask--neptune", {
    motionPath: {
      path: neptuneOrbit,
      autoRotate: true,
      start: .04,
      end: .1
    },
    scaleX: 1,
    duration: dur,
    ease: ease,
    immediateRender: true,
},0);

tl.to(".mask--neptune", { 
    width: trail, 
    duration: dur/2,
    ease: ease,
},0);

tl.to(".mask--neptune", { 
    width: 0, 
    duration: dur/2,
    ease: ease,
},1);


tl.fromTo(".mask--neptune",{ 
  scaleX: -1 }, { 
  scaleX: -1, duration: dur
}, 0);

//Start and configure timeline
/////////////////////////////////////////////////////////
tl.yoyo(true).repeat(-1).repeatDelay(.25);
tl.play();
