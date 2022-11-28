import { modalClose, outsideClick } from '../lib_firebase/index';

export const Modal = (title, message) => {
  const $modalDiv = document.createElement('div');
  $modalDiv.id = 'myModal';
  $modalDiv.className = 'modal';
  const $contentModal = document.createElement('div');
  $contentModal.className = 'modal__content';
  const $spanClose = document.createElement('span');
  $spanClose.className = 'modal__close';
  $spanClose.id = 'modal-close';
  $spanClose.textContent = '&times';

  const $h2Modal = document.createElement('h2');
  $h2Modal.textContent = title;
  const $pModal = document.createElement('p');
  $pModal.textContent = message;
  
  $contentModal.append($spanClose, $h2Modal, $pModal);
  $modalDiv.appendChild($contentModal);

  // When the user clicks on <span> (x), close the modal
  $spanClose.addEventListener('click', () => {
    modalClose($modalDiv);
  });

  window.addEventListener('click', (e) => {
    outsideClick($modalDiv, e);
  });

  return $modalDiv;
};
