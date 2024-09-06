import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accordion = new Accordion('.about-me__accord_list', {
  duration: 350,
  elementClass: 'about-me__accord_item',
  triggerClass: 'about-me__accord_trigger',
  panelClass: 'about-me__accord_panel',
  showMultiple: true,
  onOpen: onOpenHandle,
});

accordion.detachEvents();

accordion.open(0);

setTimeout(() => {
  accordion.attachEvents();
}, 1000);

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
