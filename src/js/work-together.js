'use strict';

import axios, { AxiosError } from 'axios';
// import iziToast from 'izitoast';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import svgSprite from '../img/icon.svg';
import '../css/work-together.css';

const formData = { client_email: '', client_comment: '' };
const form = document.querySelector('.wt-form');

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';
export const TOAST_CONFIG = {
  titleSize: "16px",
  maxWidth: 432,
  position: "topRight",
  closeOnEscape: true,
  theme: "dark",
};

const postClientData = async formData => {
  const params = {
    email: formData.client_email,
    comment: formData.client_comment,
  };

  return await axios.post('/requests', params);
};

const createModal = data => {
  return basicLightbox.create(
    `
    <div class="wt-modal-overlay">
      <div class="wt-modal">
        <button type="button" class="wt-modal-close-btn">
          <svg class="wt-icon">
            <use href="${svgSprite}#icon-close-mob-menu-bt"></use>
          </svg>
        </button>
        <p class="wt-modal-tittle">${data.title.trim()}</p>
        <p class="wt-modal-message">${data.message.trim()}</p>
      </div>
    </div>
    `,
    {
      onShow: instance => {
        document.body.classList.add('no-scroll');
        instance.element().querySelector('.wt-modal-close-btn').onclick =
          instance.close;

        const closeOnEsc = e => {
          if (e.key === 'Escape' || e.keyCode === 27) {
            instance.close();
            document.removeEventListener('keydown', closeOnEsc);
          }
        };
        document.addEventListener('keydown', closeOnEsc);
      },
      onClose: () => {
        document.body.classList.remove('no-scroll');
      },
    }
  );
};

const wtInputCallback = (e) => {
  formData[e.target.name] = e.target.value.trim();
  localStorage.setItem('wt-form-data', JSON.stringify(formData));
};

const wtSubmitCallback = async (e) => {
  e.preventDefault();

  if (formData.client_email === '' || formData.client_comment === '') {
    return;
  }

  try {
    const { data } = await postClientData(formData);
    const modal = createModal(data);
    modal.show();
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error("Axios Error:", error.message);
      console.error("Error Details:", error.config);
      // iziToast.error({
      //   ...TOAST_CONFIG,
      //   message: `Sorry, error occurred: ${error.message}. Please try again!`,
      // });
    } else {
      console.error(error);
      // iziToast.error({
        // ...TOAST_CONFIG,
        // message: "Sorry, unexpected error occurred. Please try again!",
      // });
    }
    return;
  }

  formData.client_email = '';
  formData.client_comment = '';
  localStorage.removeItem('wt-form-data');
  form.reset();
};

const wtObserverCallback = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      form.addEventListener('input', wtInputCallback);
      form.addEventListener('submit', wtSubmitCallback);
    } else {
      form.removeEventListener('input', wtInputCallback);
      form.removeEventListener('submit', wtSubmitCallback);
    }
  });
};

if (localStorage.length > 0) {
  const storedData = localStorage.getItem('wt-form-data');
  if (storedData) {
    const { client_email, client_comment } = JSON.parse(storedData);
    formData.client_email = client_email ?? '';
    formData.client_comment = client_comment ?? '';
  }
}

form.elements.client_email.value = formData.client_email;
form.elements.client_comment.value = formData.client_comment;

const wtObserver = new IntersectionObserver(wtObserverCallback);
wtObserver.observe(form);