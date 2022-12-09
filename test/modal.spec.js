import { Modal } from '../src/components/Modal.js';
/* import { modalOpen } from '../src/controllers/c-modal'; */

// const element = Modal();

describe('test function Modal', () => {
  /* const contentModal = element.querySelector('.modal__content'); */
  it('Should test if the modal element exists', () => {
    expect(Modal('hola soy modal', 'hola soy el mensaje de modal')).toMatchSnapshot();
  });

  it('Should check that the modal closes', () => {
    Modal('hola soy modal', 'hola soy el mensaje de modal');
    const $closeModalElement = document.getElementById('closeModal');

    // const e = new Event('click',{bubbles: true});
    // closeModal.dispatchEvent(e);

    $closeModalElement.click();

    // console.log(document.getElementById('modal').style.display, element.style.display);
    // closeClick(element, closeModal.id);
    // closeClick(element, closeModal, e.target);
    expect(document.getElementById('modal').style.display).toBe('none');
  });
});
