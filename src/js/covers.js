const targetElement = document.querySelector('#covers');
const topLine = targetElement.querySelector('.top-line');
const midLine = targetElement.querySelector('.mid-line');
const bottomLine = targetElement.querySelector('.bottom-line');
const additionalLine = targetElement.querySelector('.additional-line');

const options = {
  rootMargin: '0px',
  threshold: 0,
};

const observerCallback = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      topLine.classList.add('animation');
      midLine.classList.add('animation-reverse');
      bottomLine.classList.add('animation');
      additionalLine.classList.add('animation-reverse');
    } else {
      topLine.classList.remove('animation');
      midLine.classList.remove('animation-reverse');
      bottomLine.classList.remove('animation');
      additionalLine.classList.remove('animation-reverse');
    }
  });
};

const observer = new IntersectionObserver(observerCallback, options);
observer.observe(targetElement);
