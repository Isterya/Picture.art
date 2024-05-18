import modals from './modules/modals';
import sliders from './modules/sliders';
import forms from './modules/forms';
import mask from './modules/mask';
import checkTextInputs from './modules/checkTextInputs';

window.addEventListener('DOMContentLoaded', () => {
   'use strict';
   new WOW().init();

   modals();
   sliders('.feedback-slider-item', 'horizonal', '.main-prev-btn', '.main-next-btn');
   sliders('.main-slider-item', 'vertical');
   forms();
   mask('[name="phone"]');
   checkTextInputs('[name="name"]');
   checkTextInputs('[name="message"]');
});
