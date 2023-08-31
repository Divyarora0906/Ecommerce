const swiper2 = new Swiper('.sec2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
  
  
    // Navigation arrows

    autoplay: {
        delay: 3000,
      },
  
    // And if we need scrollbar
   
  });
  

  const swiper = new Swiper('.sec', {
    // Optional parameters
    direction: 'horizontal',

  
    // If we need pagination


    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2.5,
        spaceBetween: 10
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      780: {
        slidesPerView: 4,
        spaceBetween: 30
      },
      // when window width is >= 640px
      1300: {
        slidesPerView: 5,
        spaceBetween: 40
      },
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    freeMode: true,
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    

  
    // And if we need scrollbar
   
  });


