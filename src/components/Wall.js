/* import {wallFunction} from '../lib_firebase/auth'; */
/* import { querySnapshot } from '../lib_firebase/db.js'; */
import { Menu } from './Menu.js';
import { Modal } from './Modal.js';
import { currentUser } from '../lib_firebase/auth.js';

export const Wall = (onNavigate) => {

  const $section = document.createElement('section');
  $section.className = 'container containerWall';
  $section.innerHTML = `
    <header class="container-header">
        <img class="container-header__logo" src="./assets/img/logo_horizontal.png" alt="logo">
    </header>

    <section class="container-addPost">
        <div class="container-imgProfile">
            <img class="container-imgProfile__img" src="${currentUser().imgProfile}">
        </div>
        <div class="container-addPost__text" id="addPost" >What are you thinking,<br> Yin Yang?</div>
   </section>

   <section class='container-Posts'>
    <div class='container-Posts__Post'>
        <div class="container-headerPost">
          <div class="container-headerPost__img">
            <img  class='container-headerPost__img__user'src="${currentUser().imgProfile}" 
            width="25px" height="25px">
              <p> ${currentUser().displayName} </p>
            </div>
          
            <img class='container-headerPost__icon' src="./assets/img/icon_hamburguer.png">
        </div>
        <div class='container-imgPost'>
            <img   class='container-imgPost__img' src="./assets/img/cuy.jpg">
        </div>
        <div class="containerButtons">
            <div class="containerButtons__likes">
             <div class="containerLikes">
                <img  class="containerLikes__heart" src="assets/img/icon_like.png" >
                <span class="containerLikes__count"> 300k                     
                </span>    
                
              </div>
            </div>

            <div class="containerButtons__comments">
              <div class="containerComments" >
               <img  class="containerComments__comment" src="assets/img/icon_comments.png" >           
                <span class="containerComments__count"> 
                1 k                   
                </span>   
              </div>
            </div>
        </div>
          <div class="containerComment">
          <img class="containerComments__comment" src="./assets/img/user_photo_default.png">
          <textarea class='containerComment__text' placeholder="Add a comment"></textarea>
          </div>
      </div>


      <div class='container-Posts__Post'>
        <div class="container-headerPost">
          <div class="container-headerPost__img">
            <img  class='container-headerPost__img__user'src="./assets/img/user_photo_default.png" 
            width="25px" height="25px">
              <p>${currentUser().displayName}</p>
            </div>
          
            <img class='container-headerPost__icon' src="./assets/img/icon_hamburguer.png">
        </div>
        <div class='container-imgPost'>
            <img   class='container-imgPost__img' src="./assets/img/cuy.jpg" >
        </div>
        <div class="containerButtons">
            <div class="containerButtons__likes">
             <div class="containerLikes">
                <img  class="containerLikes__heart" src="assets/img/icon_like.png" >
                <span class="containerLikes__count"> 300k                     
                </span>    
                
              </div>
            </div>

            <div class="containerButtons__comments">
              <div class="containerComments" >
               <img  class="containerComments__comment" src="assets/img/icon_comments.png" >           
                <span class="containerComments__count"> 
                1 k                   
                </span>   
              </div>
            </div>
        </div>
        <div class="containerComment">
            <img class="containerComments__comment" src="./assets/img/user_photo_default.png">
            <textarea class='containerComment__text' placeholder="Add a comment"></textarea>
        </div>
      </div>
      
    </section>
  
   `;
  
  console.log('soygfhsddddddddd', currentUser());
  const root = document.getElementById('root');
  root.appendChild(Menu());

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
