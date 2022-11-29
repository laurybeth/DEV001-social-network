// aqui exportaras las funciones que necesites

// When the user clicks the button, open the modal
export const modalOpen = (modal) => {
  console.log('modalOpen', modal);
  modal.style.display = 'block';
};

// When the user clicks anywhere outside of the modal, close it
export const closeClick = (modal, closeModalId, e) => {
  if ((e.target === modal) || (e.target.getAttribute('id') === closeModalId)) {
    modal.style.display = 'none';
  }
};
