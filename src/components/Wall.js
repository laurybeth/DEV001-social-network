/* import {wallFunction} from '../lib_firebase/auth'; */

export const Wall = (onNavigate) => {
  const $section = document.createElement('section');
  $section.className = 'container';
    $section.innerHTML = `
    <header>
        <img class="container__logo-register"src="./assets/img/logo_horizontal.png" alt="logo">
    </header>

    <section class="createPost">
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
            <button src="../src/assets/img/icon_like.png" class="containerButtons__likes"></button>
            <button src="../src/assets/img/icon_comments.png" class="containerButtons__comments"></button>
        </div>
        <div>
            <img src="">
            <textarea placeholder="Add a comment"></textarea>
        </div>
    </section>
   `;

  return $section;
 
};
