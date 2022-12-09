const closeModal = ($modal, $closeModalElement, e) => {
  if ((e.target === $modal) || (e.target === $closeModalElement)) {
    $modal.style.display = 'none';
  }
};

export const Modal = (title, message) => {
  const $modal = document.createElement('div');
  $modal.id = 'modal';
  $modal.className = 'container-modal';
  const $closeId = 'closeModal';
  $modal.innerHTML = `
  <div class="container-modal__content"> 
  <span class="container-modal__close" id="${$closeId}">&times;</span>
  <h2>${title}</h2> 
  <p>${message}</p> </div>`;

  document.body.appendChild($modal);
  $modal.style.display = 'block';

  const $closeModalElement = document.getElementById($closeId);

  // When the user clicks on <span> (x), close the modal
  $modal.addEventListener('click', (e) => {
    closeModal($modal, $closeModalElement, e);
  });

  return $modal;
};
