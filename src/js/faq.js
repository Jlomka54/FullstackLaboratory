import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.faq-accordion-container', {
  duration: 350,
  showMultiple: true,
  onOpen: onOpenHandle,
});

function onOpenHandle(currElement) {
  const activeAcRect = currElement.getBoundingClientRect();

  const viewHeight = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight
  );

  if (activeAcRect.bottom > viewHeight) {
    window.scrollTo({
      top:
        activeAcRect.top +
        window.scrollY -
        (viewHeight - activeAcRect.height) / 2,
      behavior: 'smooth',
    });
  }
}
