function toggleHeaderClass() {
  var header = document.getElementById("header");
  var main = document.getElementById("main");

  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }

  var mainPosition = main.getBoundingClientRect().top;

  if (mainPosition <= 100) {
    header.classList.add("active2");
  } else {
    header.classList.remove("active2");
  }
}
window.onscroll = toggleHeaderClass;

function menuButton() {
    const button = document.getElementById('menuButton');
    const navbar = document.getElementById('navbar');
    const body = document.body;
  
    button.addEventListener('click', function () {
      if (this.classList.contains('clickeado')) {
        this.classList.remove('clickeado');
      } else {
        this.classList.add('clickeado');
      }
    });
  }
  
  menuButton();


  /* hero */


gsap.to(".left",{
  duration: 2,
  delay: 0.8,
  width: '50%',
  ease: Power2.easeInOut
});

gsap.to(".right",{
  duration: 2,
  delay: 0.6,
  width: '50%',
  ease: Power3.easeInOut
});

gsap.from(".texthero h1",{
  duration: 2,
  delay: 0.6,
  x: 1000,
  ease: Circ.easeInOut
});

gsap.from(".texthero p",{
  duration: 2,
  delay: 0.7,
  x: 1000,
  ease: Circ.easeInOut
});

gsap.to(".video-container",{
  duration: 2,
  delay: 1.5,
  width: '57vw',
  ease: Power2.easeInOut
});

gsap.from(".name",{
  duration: 2,
  delay: 1.5,
  x: -600,
  ease: Circ.easeInOut
});

gsap.from(["nav li", "nav button"], {
  duration: 2,
  delay: 2,
  y: 20,
  opacity: 0,
  ease: Expo.easeInOut,
  stagger: 0.1,
});

gsap.from(".social li", {
  duration: 2,
  delay: 2.5,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
  stagger: 0.1,
});

gsap.from([".decoration1", ".decoration2"],{
  duration: 2,
  delay: 2.8,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
  stagger: 0.1,
});


/* intro */

gsap.registerPlugin(ScrollTrigger);

function textReveal() {

  gsap.to(".intro-img", {
    duration: 1.8,
    width: "446px",
    ease: Power2.easeInOut,
    scrollTrigger: {
      trigger: ".intro-content",
      start: "top 100%",
    },
  })

  gsap.from([".textreveal h2", ".textreveal p"], {
    duration: 1.8,
    delay: 0.4,
    y: 160,
    stagger: 0.2,
    ease: Expo.easeInOut,
    scrollTrigger: {
      trigger: ".intro-content",
      start: "top 100%",
    },
  });
}

textReveal();







