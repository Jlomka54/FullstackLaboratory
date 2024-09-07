import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const reviewEl = document.querySelector('.swiper-review-wrapper');
const a = document.querySelector('review-swiper-button-next');

// -----class swiper-----//

const swiper = new Swiper('.swiper-review', {
  slidesPerView: 1,
  spaceBetween: 10,

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
});

// -----get reviews-----//

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/ap';
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
      <h3 class="review-container-title">${reviewCard.author}</h3>
      <p class="review-text">${reviewCard.review}</p>
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
    const numberEl = response.data.length;
    const slideNumber = numberEl - swiper.params.slidesPerView;
  } catch (err) {
    iziToast.error({
      message: 'Sorry, no reviews found yet',
      messageColor: '#fafafa',
      messageSize: '16px',
      messageLineHeight: '150%',
      backgroundColor: 'rgba(250, 250, 250, 0.4)',
      position: 'topRight',
      maxWidth: 432,
    });
    swiper.disable();
    reviewEl.previousElementSibling.classList.remove('review-hidden');
  }
};

showReviews();
