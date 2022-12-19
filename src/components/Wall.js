/* import {wallFunction} from '../lib_firebase/auth'; */
/* import { querySnapshot } from '../lib_firebase/db.js'; */
import { Menu } from './Menu.js';
import { AddPost } from './AddPost';
import { currentUser } from '../lib_firebase/auth.js';
import { Posts } from './Posts.js';


export const Wall = (onNavigate) => {
  const $section = document.createElement('section');
  $section.className = 'container containerWall';
  $section.innerHTML = `
    <header class="container-header">
        <img class="container-header__logo" src="https://raw.githubusercontent.com/JENNYFERGAMBOA/DEV001-social-network/main/src/assets/img/logo_horizontal.png
        " alt="logo">
    </header>

    <section class="container-addPost">
        <div class="container-imgProfile">
            <img class="container-imgProfile__img" src="${currentUser().photoURL}">
        </div>
        <div class="container-addPost__text" id="addPost" >What are you thinking, ${currentUser().displayName} ?</div>
   </section>

   <section class='container-Posts'>
  
    
    </section>
  
   `;
  $section.querySelector('.container-Posts').insertAdjacentElement('afterbegin', Posts());
  
  console.log('soy currentUser en wall', currentUser());
  const root = document.getElementById('root');
  root.appendChild(Menu());

  $section.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('target:', e.target);

    console.log('id', e.target.getAttribute('id'));

    if (e.target.getAttribute('id') === 'addPost') {
      AddPost();
    }
  });

  return $section;
};
