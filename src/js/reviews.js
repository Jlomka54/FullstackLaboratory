import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import axios from 'axios';

const reviewEl = document.querySelector('.swiper-review-wrapper');

// -----class swiper-----//

const swiper = new Swiper('.swiper-review', {
  // Default parameters

  slidesPerView: 1,
  spaceBetween: 10,
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

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';
const fetchReview = () => {
  return axios.get('/reviews');
};

// -----render functions-----//

const createReviewTemplate = reviewCard => {
  return `
  
  <div class="swiper-slide swiper-review-slide">
  <a class="review-link" href="${reviewCard.avatar_url}">
		<img 
			class="review-image" 
			src="${reviewCard.avatar_url}" 
			alt="${reviewCard.author}" 
			/>
	</a>
      <h3 class="review-container-title">${reviewCard.author}</h3>
      <p class="review-text">${reviewCard.review}</p>
</div> 
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
    console.log(err);
  }
};

showReviews();
