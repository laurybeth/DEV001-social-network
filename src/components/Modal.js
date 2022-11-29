import { closeClick } from '../controllers/c-modal';

export const Modal = (title, message) => {
  const $modalDiv = document.createElement('div');
  $modalDiv.id = 'myModal';
  $modalDiv.className = 'modal';
  const $closeId = 'modal-close';
  $modalDiv.innerHTML = `
 <div class="modal__content"> 
  <span class="modal__close" id="${$closeId}">&times;</span>
  <h2>${title}</h2> 
  <p>${message}</p> </div>`;

  document.body.appendChild($modalDiv);

  const closeModal = document.getElementById($closeId);

  // When the user clicks on <span> (x), close the modal
  window.addEventListener('click', (e) => {
    closeClick($modalDiv, closeModal.id, e);
  });

  return $modalDiv;
};
