/*
SHOW MODAL PROJECT
Functionalities: 
Shows modal at click event, adds and removes classes.
Allows to close modal by clicking on close button, overlay or with Esc key.
*/

'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
/*Loops htorugh the .show-modal elements depending on which one is clicked and calls openModal()*/
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
let escKey = document.addEventListener('keydown', function (e) {
  e.code; /*Access the code attribute*/
  if ((escKey = 'Escape')) {
    closeModal();
  }
});
