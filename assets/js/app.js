const elMenuBtn = document.querySelector('.hamburger');
const elNavModal = document.querySelector('.modal');

let menuOpen = false;
elMenuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    elMenuBtn.classList.add('open');
    elNavModal.style.opacity = '1';
    elNavModal.style.visibility = 'visible';
    menuOpen = true;
  } else {
    elMenuBtn.classList.remove('open');
    elNavModal.style.opacity = '0';
    elNavModal.style.visibility = 'hidden'
    menuOpen = false;
  }
});
const navbar = document.querySelector('#header');
window.onscroll = () => {
  if (window.scrollY > 120) {
    navbar.style.background = '#141414';
  } else {
    navbar.style.background = 'transparent';
  }
};

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'false',
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

var swiper2 = new Swiper(".work__slider", {
  slidesPerView: 1,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'false',
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});