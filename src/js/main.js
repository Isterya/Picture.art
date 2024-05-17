import modals from './modules/modals';
import sliders from './modules/sliders';

window.addEventListener('DOMContentLoaded', () => {
   'use strict';
   new WOW().init();

   modals();
   sliders('.feedback-slider-item', 'horizonal', '.main-prev-btn', '.main-next-btn');
   sliders('.main-slider-item', 'vertical');
});
