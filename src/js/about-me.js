import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Pagination, Keyboard, Mousewheel } from 'swiper/modules';

import { onOpenHandle } from './utilits';

// *** Accordion ***

const accordion = new Accordion('.about-me__accord_list', {
  duration: 350,
  elementClass: 'about-me__accord_item',
  triggerClass: 'about-me__accord_trigger',
  panelClass: 'about-me__accord_panel',
  onOpen: onOpenHandle,
});

accordion.detachEvents();

accordion.open(0);

setTimeout(() => {
  accordion.attachEvents();
}, 1000);

// *** Swiper-Slider ***

const swiperAbout = new Swiper('.about-swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 0,
  loop: true,
  modules: [Navigation, Pagination, Keyboard, Mousewheel],
  navigation: {
    nextEl: '.about-button-swip',
  },

  simulateTouch: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  mousewheel: {
    sensitivity: 1,
  },
});

updateActiveSlideColor();

swiperAbout.on('slideChangeTransitionEnd', updateActiveSlideColor);

export function updateActiveSlideColor() {
  document
    .querySelectorAll('#custom-swiper .about-swiper-skills')
    .forEach(slide => {
      slide.style.removeProperty('background-color');
    });

  let currentColor;

  try {
    switch (JSON.parse(localStorage.getItem('currentTheme'))) {
      case 'blue':
        currentColor = '#0041e8';
        break;

      case 'green':
        currentColor = '#2b4441';
        break;

      case 'yellow':
        currentColor = '#c6e327';
        break;

      default:
        currentColor = '#ed3b44';
        break;
    }
  } catch (error) {
    console.error(error);
    currentColor = '#ed3b44';
  }

  const activeSlide = document.querySelector(
    '#custom-swiper .about-swiper-skills.swiper-slide-active'
  );
  if (activeSlide) {
    const selectedColor = currentColor;
    activeSlide.style.setProperty('background-color', selectedColor);
  }
}
