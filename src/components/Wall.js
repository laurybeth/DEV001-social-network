/* import {wallFunction} from '../lib_firebase/auth'; */
/*import { querySnapshot } from '../lib_firebase/db.js';*/

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
        <div class="container-addPost__text" rows="5" placeholder="What are you thinking, Yin Yang?"></div>
        <img class="container-addPost__add" src="./assets/img/icon_addImage.png">
    </section>

    <section class='viewPost'>
        <div>
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
    </section>
   `;

   const divContainerPost = document.getElementsByClassName("container-addPost__text");
   divContainerPost.addEventListener("click");

  return $section;
};

