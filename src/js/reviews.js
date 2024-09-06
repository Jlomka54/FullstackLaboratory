import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import axios from 'axios';

const reviewEl = document.querySelector('.card-review');

// -----class swiper-----//

const swiper = new Swiper('.myReviewSwiper', {
  slidesPerView: 4,
  spaceBetween: 16,
  navigation: {
    nextEl: '.review-slide-next',
    prevEl: '.review-slide-back',
  },
});

// -----get reviews-----//

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';
const fetchReview = () => {
  return axios.get('/reviews');
};

// -----render functions-----//

const createReviewTemplate = imgInfo => {
  return `
  <li class="card-review-item">
  <div class="swiper-slide swiper-slide-review">
	<a class="review-link" href="${imgInfo.avatar_url}">
		<img 
			class="review-image" 
			src="${imgInfo.avatar_url}" 
			alt="${imgInfo.author}" 
			/>
	</a>
  <div class='review-wraper'>
    <div>
      <h4 class='review-title'>${imgInfo.author}</h4>
      <p class='review-text'>${imgInfo.review}</p>
    </div>
    
  </div>
</li>

  `;
};

// -----show reviews-----//
const showReviews = async event => {
  try {
    const response = await fetchReview();
    console.dir(response);

    const reviewCardsTemplate = response.data
      .map(imgDetails => createReviewTemplate(imgDetails))
      .join('');
    reviewEl.innerHTML = reviewCardsTemplate;
  } catch (err) {
    console.log(err);
  }
};

showReviews();
