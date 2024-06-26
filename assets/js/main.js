document.addEventListener("DOMContentLoaded", function () {
  // declaration
  // gsap.registerPlugin(ScrollTrigger);

  var tl = gsap.timeline();

  tl.from(".fadeUp", {
    opacity: 0,
    duration: 0.6,
    y: 100,
    stagger: 0.5,
  });

  // tl.from(".deliveryTruck",{
  //   x:"10",
  //   x:"-500",
  //   opacity:0,
  //   duration:1,
  //   delay:0,
  //   yoyo:true,
  //   repeat:-1
  // });

  tl.from(".deliveryTruck_rtl",{
    // x:"10",
    x:"500",
    
    opacity:0,
    duration:1,
    delay:0,
  });

  const tooltipTriggerList=document.querySelectorAll('[data-bs-toggle="tooltip"]'),tooltipList=[...tooltipTriggerList].map(t=>new bootstrap.Tooltip(t));

  window.addEventListener("scroll", () => {document.querySelector(".site-header").classList.toggle("header-sticky", window.scrollY > 80)});
  window.addEventListener("scroll", () => {document.querySelector(".site-header").classList.toggle("shadow", window.scrollY > 80)});
  {window.innerWidth >= 992?document.querySelectorAll("._menu .collapse").forEach(e =>{e.classList.add('collapse');e.classList.add('show')}):null}
 
  /* companiesSwipr */
  const companiesSwipr = new Swiper('.companiesSwipr', {
    slidesPerView: 2.75,
    spaceBetween: 10,
    loop: true,
    speed:7000,
    autoplay:{delay:0},
    centeredSlides: true,
    breakpoints: {
      476: { slidesPerView: 3.5, spaceBetween: 10 },
      768: { slidesPerView: 4, spaceBetween: 12 },
      1024: { slidesPerView: 7, spaceBetween: 12 },
    },
  });
  /* tractionSwipr */
  const tractionSwipr = new Swiper('.tractionSwipr', {
    slidesPerView: 1.5,
    spaceBetween: 30,
    loop: true,
    pagination:{el: ".swiper-pagination",clickable: true,},
    breakpoints: {
      476: { slidesPerView: 1.5, spaceBetween: 30,},
      768: { slidesPerView: 2, spaceBetween: 60,},
      1024: { slidesPerView: 3, spaceBetween: 84,},
      1440: { slidesPerView: 4, spaceBetween: 84,loop:false,pagination:false},
    },
  });
  /* uspSwipr */
  const uspSwipr = new Swiper('.uspSwipr', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: false,
    breakpoints: {
      600: { slidesPerView: 1.5, spaceBetween: 30 },
      992: { slidesPerView: 2.25, spaceBetween: 30 },
      1400: { slidesPerView: 2.875, spaceBetween: 30 },
    },
  });
  /* testimonial */
  const happyCustomersSwipr = new Swiper('.happyCustomersSwipr', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    centeredSlides:true,
    pagination:{el: ".swiper-pagination",clickable: true,},
    breakpoints: {
      600: { slidesPerView: 1.5, spaceBetween: 30 },
      992: { slidesPerView: 2.5, spaceBetween: 30 },
      1400: { slidesPerView: 3.8, spaceBetween: 34 },
    },
  });
  /* blogsSwipr */
  const blogsSwipr = new Swiper('.blogsSwipr', {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    pagination:{el: ".swiper-pagination",clickable: true,},
    breakpoints: {
      992: { slidesPerView: 2, spaceBetween: 20 },
      600: { slidesPerView: 2, spaceBetween: 20 },
      1400: { slidesPerView: 3, spaceBetween: 24 },
    },
  });

    /* supportedLogo */
    const supportedLogo = new Swiper('.supportedLogo', {
      slidesPerView: 4,
      spaceBetween: 0,
      loop: true,
      // speed:7000,
      autoplay:{delay:1000},
      centeredSlides: true,
      pagination:{el: ".swiper-pagination",clickable: true,},
      breakpoints: {
        0: { slidesPerView: 1, spaceBetween: 8 },
        600: { slidesPerView: 3, spaceBetween: 8 },
        992: { slidesPerView: 4, spaceBetween: 10 },
        1400: { slidesPerView: 5, spaceBetween: 10},
      },
    });

    /* ThumbGallery */
    var swiper = new Swiper(".thumbGallery2", {
      spaceBetween: 10,
      slidesPerView: 5,
      freeMode: true,
      watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".thumbGallery", {
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: swiper,
      },
    });

    /* uspSwipr */
  const powerGPS_Slide = new Swiper('.powerGPS_Slide', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: false,
    speed:800,
    breakpoints: {
      0: { slidesPerView: 1, spaceBetween: 20 },
      600: { slidesPerView: 1.5, spaceBetween: 30 },
      992: { slidesPerView: 3, spaceBetween: 30 },
      1400: { slidesPerView: 3, spaceBetween: 30 },
    },
  });


    // Blog Load More BTN
    let loadMoreBtn = document.querySelector("#load-more-btn");
    let currentItem = 6;

    loadMoreBtn.onclick = () => {
      let boxes = [...document.querySelectorAll(".blogWrapper > div")];

      for (var i = currentItem; i < currentItem + 3; i++) {
        boxes[i].style.display = "inline-block";
      }

      currentItem += 3;

      if (currentItem >= boxes.length) {
        loadMoreBtn.style.display = "none";
      }
    };
    // Blog Load More BTN Scripted End




  /* hr animation 
  const slideText = document.querySelectorAll(".text__marquee");
  slideText.forEach(function(element) {
    gsap.set(element,{xPercent:100,});
    gsap.to(element,{xPercent:-100,duration:6,immediateRender:true,repeat:-1,ease:'none'});
  });
  */
  /* download links hover 
  function setAnimationListeners(btn, card) {
    gsap.set(card, { duration: 0.3, opacity: 0, scale: 0, display: 'none' });
    btn.addEventListener('mouseover', () => gsap.to(card, { duration: 0.3, opacity: 1, scale: 1, display: 'block' }));
    btn.addEventListener('mouseout', () => gsap.to(card, { duration: 0.3, opacity: 0, scale: 0, display: 'none' }));
  }
  
  if(document.querySelector('.btnAppStore') && document.querySelector('.appCard')){
    let btnAppStore = document.querySelector('.btnAppStore');
    let appCard = document.querySelector('.appCard');
    setAnimationListeners(btnAppStore, appCard);
    
    let btnPlayStore = document.querySelector('.btnPlayStore');
    let playCard = document.querySelector('.playCard');
    setAnimationListeners(btnPlayStore, playCard);
  } */
  
  
    // DOMContentLoaded end here
});

  // for jQuery
(function () {

  

})()
