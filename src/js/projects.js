import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';



var swiper = new Swiper(".project-swiper", {
	slidesPerView: 1,
	spaceBetween: 30,
	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	speed: 900,
});


// import 'swiper/css/bundle';

// document.addEventListener('DOMContentLoaded', function () {
//     const swiper = new Swiper('.swiper', {
//         modules: [Navigation, Pagination],
//         loop: false,
//         keyboard: {
//             enabled: true,
//             onlyInViewport: false,
//         },
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev', 
//         },
//         pagination: {
//             el: '.swiper-pagination',
//             clickable: true,
//         }
//     })
// })


//     function updateDisabledButtons() {
//                 const nextButton = document.querySelector('.swiper-button-next');
//                 const prevButton = document.querySelector('.swiper-button-prev');
        
//                 if (swiper.isEnd) {
//                     nextButton.classList.add('swiper-button-disabled');
//                 } else {
//                     nextButton.classList.remove('swiper-button-disabled');
//                 }
        
//                 if (swiper.isBeginning) {
//                     prevButton.classList.add('swiper-button-disabled');
//                 } else {
//                     prevButton.classList.remove('swiper-button-disabled');
//                 }
//             }

//             updateDisabledButtons();

// swiper.on('slideChange', updateDisabledButtons);
