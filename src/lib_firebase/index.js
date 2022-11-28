// aqui exportaras las funciones que necesites

// When the user clicks the button, open the modal
export const modalOpen = (modal) => {
  modal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
export const modalClose = (modal) => {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
export const outsideClick = (modal, e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
};
