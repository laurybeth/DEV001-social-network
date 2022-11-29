import { Modal } from '../src/components/Modal.js';
/* import { modalOpen } from '../src/controllers/c-modal'; */

/* const element = Modal(); */

const data = document.createElement('div');
data.innerHTML = `<div class="modal" id="myModal">
<div class="modal__content"> 
 <span class="modal__close" id="modal-close">&times;</span>
 <h2>hola soy modal</h2>
 <p>hola soy el mensaje de modal</p> 
 </div>
 </div>`;
describe('Test a elemento modal', () => {
  /* const contentModal = element.querySelector('.modal__content'); */
  it('Probar si existe el elemento modal', () => {
    expect(Modal('hola soy modal', 'hola soy el mensaje de modal')).toBe(data);
  });
});

/*
expected"
    <div class=\"modal__content\">·
    <span class=\"modal__close\" id=\"modal-close\">×</span>
    <h2>hola soy modal</h2>
    <p>hola soy el mensaje de modal</p>·
    </div>"
*/

/* Received
<div class="modal" id="myModal">
     <div class="modal__content">·
      <span class="modal__close" id="modal-close">×</span>
      <h2>hola soy modal</h2>·
     <p>hola soy el mensaje de modal</p> </div></div>*/