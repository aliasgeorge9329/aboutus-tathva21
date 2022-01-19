//preloader
const trivia = ["Think you are too young to cause a technological revolution? Aaron Swartz, the co-author of RSS, did at 14 and he told us all about it in the 7th edition of Tathva.","We believe that ideas and technology should be free and Richard Stallman agrees. That’s why he joined us in 2008", "Did you know? We started with a humble participation of just under a hundred in our first edition but now boast of a footfall of greater than 22,000", "2009 was a revolutionary year for Tathva when the duo of the “Missile Man of India”, Dr. APJ Abdul Kalam and Nobel laureate Harold Kroto graced the event","One of the biggest leaps we took was with the start of a new decade in 2011. Our events doubled from 21 to a whooping 40+ and so did our participation. We were the big players now","With the release of GTA V, Tomb Raider, Metal Gear and Bioshock, 2013 was dubbed as the year of gaming. Tathva celebrated this feat by inviting Dr. Roberto Dillon and Kazutaka Kutihara to share their expertise on gaming and its future", "Tathva’14 was a magical edition as we shot for the moon with Professor Jakob Van Zyl from NASA", "2015 marked the year of innovators as the Kumaran brothers, India’s youngest app developers and Diwakar Vaish, the creator of India’s first 3D printed humanoid robot joined the students this time","Ever wondered what we would do without emails? Well we all had Shiva Ayyadurai to thank for when he told us back in 2016 how he invented it out of his frustration for the US Postal Service. Next time you’re frustrated about something you know what to do.","When Professor Lawrence Krauss speaks about Cosmology, everyone listens. Don’t believe it? Ask the attendees of Tathva’19."];
const body = document.querySelector("body")
const n = Math.floor(Math.random() * 10);
document.querySelector(".preText").innerHTML = trivia[n];

setInterval(function () {
const n = Math.floor(Math.random() * 10);
document.querySelector(".preText").innerHTML = trivia[n];
},10000);
var pageLoaded = false;
var timeoutElapsed = false;

$(window).on('load', function() {
    pageLoaded = true;
    if (timeoutElapsed) {
        load_func();
    }
});

setTimeout(function() {
    timeoutElapsed = true;
    if (pageLoaded) {
        load_func();
    }
}, 100);

const load_func= ()=>{
  document.querySelector(".preloader").style.display = "none";
  body.classList.remove("load");
  const tl = gsap.timeline({
    defaults: { ease: "power1.out" }
});

//slider 
tl.to(".text", { y: "0%", duration: 1, stagger: 0.25});
tl.to(".slider", { y: "-150%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-150%", duration: 0.5 }, "-=1");
}