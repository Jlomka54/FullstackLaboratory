import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import { onOpenHandle } from './utilits';

new Accordion('.faq-accordion-container', {
  duration: 350,
  showMultiple: false,
  onOpen: onOpenHandle,
});
