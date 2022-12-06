/* import {wallFunction} from '../lib_firebase/auth'; */
/* import { querySnapshot } from '../lib_firebase/db.js'; */
import { Modal } from './Modal.js';

export const Wall = (onNavigate) => {
  const $section = document.createElement('section');
  $section.className = 'container';
  $section.innerHTML = `
    <header class="container-header">
        <img class="container-header__logo" src="./assets/img/logo_horizontal.png" alt="logo">
    </header>

    <section class="container-addPost">
        <div class="container-imgProfile">
            <img class="container-imgProfile__img" src="./assets/img/user_photo_default.png">
        </div>
        <div class="container-addPost__text" id="addPost" >What are you thinking, Yin Yang?</div>
   </section>

   <section class='container-Posts'>
    <div class='container-Posts__Post'>
        <div class="container-headerPost">
            <img src="">
            <label></label>
            <img src="">
        </div>
        <div>
            <img src="">
        </div>
        <div class="containerButtons">
            <div class="containerButtons__likes">
            <button class="containerLikes">
              <img src="ssets/img/icon_like.png" >
              <span class="containerLikes__heart">                     
              </span>            
              <span class="containerLikes__count">                     
              </span>    
            </button>
            </div>
            <div class="containerButtons__comments">
            <button src="./assets/img/icon_comments.png" class="containerComments">
            <span class="containerComments__comment">                     
            </span>            
            <span class="containerComments__count">                     
            </span>   
            </button>
            </div>
        </div>
        <div class="containerComments">
            <img src="">
            <textarea placeholder="Add a comment"></textarea>
        </div>
      </div>
    </section>
   `;

  $section.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('target:', e.target);

    console.log('id', e.target.getAttribute('id'));

    if (e.target.getAttribute('id') === 'addPost') {
      Modal('hola modal', 'body');
    }
  });

  return $section;
};
