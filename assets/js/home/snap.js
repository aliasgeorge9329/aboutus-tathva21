$(function(){

    $("section").SnapScroll({
      snapTop: true,
  // Delay between scroll events needed to trigger scroll action
  scrollDelay:300,          
  // Interval used for wheel to trigger scroll action
  wheelInterval:500,
  // The amount of time it takes to animate to a snap point
  animateDuration:1300,
  // The amount of time to wait after an animation is complete before scrolling can be triggered 
  animateTimeBuffer:100,   
    });

  });