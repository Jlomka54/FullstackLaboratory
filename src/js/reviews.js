import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import axios from 'axios';
import { invokeToast } from './utilits';

const reviewEl = document.querySelector('.swiper-review-wrapper');

// -----class swiper-----//

const paramSwiperReview = {
  slidesPerView: 1,
  spaceBetween: 15,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  mousewheel: {
    invert: true,
  },
  navigation: {
    nextEl: '.review-swiper-button-next',
    prevEl: '.review-swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
  },
};
const swiper = new Swiper('.swiper-review', paramSwiperReview);

// -----get reviews-----//

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';
const fetchReview = () => {
  return axios.get('/reviews');
};

// -----render functions-----//

const createReviewTemplate = reviewCard => {
  return `
  
  <li class="swiper-slide swiper-review-slide">
  <div class="swiper-review-img">  
		<img 
			class="review-image" 
			src="${reviewCard.avatar_url}" 
			alt="${reviewCard.author}" 
			/>	
  </div>
      <h3 class="review-container-title section-text">${reviewCard.author}</h3>
      <p class="review-text section-text">${reviewCard.review}</p>
</li> 
  `;
};

// -----show reviews-----//
const showReviews = async event => {
  try {
    const response = await fetchReview();
    const reviewCardsTemplate = response.data
      .map(reviewDetails => createReviewTemplate(reviewDetails))
      .join('');
    reviewEl.innerHTML = reviewCardsTemplate;
  } catch (err) {
    invokeToast('error', 'Sorry, no reviews found yet');
    swiper.disable();
    reviewEl.previousElementSibling.classList.remove('review-hidden');
  }
};

showReviews();
