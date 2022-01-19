const home = document.querySelector(".home");
const homeTxt = home.querySelector("h1");
const about = document.querySelector(".about");
const aboutTxt = about.querySelector("h1");
const wnl = document.querySelector(".wnl");
const wnlTxt = wnl.querySelector("h1");
const events = document.querySelector(".events");
const eventsTxt = events.querySelector("h1");

var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: homeTxt,
    triggerHook: 0.7,
    duration: "40%",
    offset: 50,
})
  .setClassToggle(
    "#reveal1",
    "visible"
  ) 
  .addTo(controller);
                
new ScrollMagic.Scene({
    triggerElement: aboutTxt,
    triggerHook: 0.7, 
    duration: "40%",
    offset: 50,
})
  .setClassToggle(
    "#reveal1",
    "visible"
  ) 
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: wnlTxt,
    triggerHook: 0.7, 
    duration: "40%", 
    offset: 50, 
})
  .setClassToggle(
    "#reveal1",
    "visible"
  ) 
  .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: eventsTxt,
    triggerHook: 0.7, 
    duration: "40%", 
    offset: 50, 
})
  .setClassToggle(
    "#reveal1",
    "visible"
  ) 
  .addTo(controller);
