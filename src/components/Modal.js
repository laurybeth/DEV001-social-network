export const Modal = (title, message) => {
  const $modalDiv = document.createElement('div');
  $modalDiv.id = 'myModal';
  $modalDiv.className = 'modal';

  $modalDiv.innerHTML = `
 <div class="modal-content"> 
  <span class="close">&times;</span>
  <h2>${title}</h2> 
  <p>${message}</p> </div>`;

  return $modalDiv;
};
