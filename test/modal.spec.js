import { Modal } from '../src/components/Modal.js';
/* import { modalOpen } from '../src/controllers/c-modal'; */

// const element = Modal();

describe('test function Modal', () => {
  /* const contentModal = element.querySelector('.modal__content'); */
  it('Should test if the modal element exists', () => {
    expect(Modal('hola soy modal', 'hola soy el mensaje de modal')).toMatchSnapshot();
  });

  it('Should check that the modal closes with X', () => {
    Modal('hola soy modal', 'hola soy el mensaje de modal');
    const $closeModalElement = document.getElementById('closeModal');

    $closeModalElement.click();

    expect(document.getElementById('modal').style.display).toBe('none');
  });

  it('Should check that the modal closes outside', () => {
    Modal('hola soy modal', 'hola soy el mensaje de modal');
    const $modal = document.getElementById('modal');

    $modal.click();

    expect(document.getElementById('modal').style.display).toBe('none');
  });
});
