/* import {wallFunction} from '../lib_firebase/auth'; */

export const Wall = (onNavigate) => {
  const $section = document.createElement('section');
  $section.className = 'container';
  $section.innerHTML = `
    <header class="container-header">
        <img class="container-header__logo" src="./assets/img/logo_horizontal.png" alt="logo">
    </header>

    <section class="container-addPost">
        <img src="">
        <textarea rows="5" placeholder="What are you thinking, Yin Yang?"></textarea>
        <img src="">
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
            <button src="../src/assets/img/icon_like.png" class="containerLikes">
              <span class="containerLikes__heart">                     
              </span>            
              <span class="containerLikes__count">                     
              </span>    
            </button>
            </div>
            <div class="containerButtons__comments">
            <button src="../src/assets/img/icon_comments.png" class="containerComments">
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

  return $section;
};
