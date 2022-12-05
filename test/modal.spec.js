import {Modal } from '../src/components/Modal.js';
/* import { modalOpen } from '../src/controllers/c-modal'; */

// const element = Modal();

describe('test function Modal', () => {
  /* const contentModal = element.querySelector('.modal__content'); */
  it('Should test if the modal element exists', () => {
    expect(Modal('hola soy modal', 'hola soy el mensaje de modal')).toMatchSnapshot();
  });

  it('Should check that the modal closes', () => {
    const element = Modal('hola soy modal', 'hola soy el mensaje de modal');
    const closeModal = document.getElementById('modal-close');
    const e = new Event('click');
    closeModal.dispatchEvent(e);
    // closeClick(element, closeModal.id);
    // closeClick(element, closeModal, e.target);
    expect(element.style.display).toBe('none');
  });
});
