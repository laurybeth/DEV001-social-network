/* import {wallFunction} from '../lib_firebase/auth'; */
/* import { querySnapshot } from '../lib_firebase/db.js'; */
import { Menu } from './Menu.js';
import { AddPost } from './AddPost';
import { currentUser } from '../lib_firebase/auth.js';
import { Posts } from './Posts.js';
import { showAllPosts } from '../controller/wall_controller';

export const Wall = (onNavigate) => {
  const $section = document.createElement('section');
  $section.className = 'container container-wall';
  $section.innerHTML = `
    <header class="container-header">
        <img class="container-header__logo" src="https://raw.githubusercontent.com/JENNYFERGAMBOA/DEV001-social-network/main/src/assets/img/logo_horizontal.png
        " alt="logo">
    </header>

    <section class="container-addPost">
        <div class="container-imgProfile">
            <img class="container-imgProfile__img" src="${currentUser() ? currentUser().photoURL : 0}">
        </div>
        <div class="container-addPost__text" id="addPost" >What are you thinking, ${currentUser() ? currentUser().displayName : 'usuario'}? </div>
   </section>

   <section class='container-Posts'>
    
    </section>
  
   `;

  console.log('soy currentUser en wall', currentUser());

  showAllPosts((posts) => {
    $section.querySelector('.container-Posts').innerHTML = '';
    posts.forEach((post) => {
      $section.querySelector('.container-Posts').insertAdjacentElement('afterbegin', Posts(post.data(), post.id));
    });
  });

  const $addPostElement = $section.querySelector('.container-addPost__text');

  $addPostElement.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('target:', e.target);

    if (e.target.getAttribute('id') === 'addPost') {
      AddPost();
    }
  });

  /*  const idPost=e.target.getAttribute('id');
console.log(e.target.getAttribute('class'));

    if (e.target.getAttribute('çlass') === 'container-headerPost__options') {
      deletePost(idPost).then(() => {
        alert('your post deleted successfully');
      })
        .catch((error) => {
          alert(' Uh-oh, an error occurred!');
        });
    }
    console.log('class', e.target.getAttribute('class'));  */

  const root = document.getElementById('root');
  root.appendChild(Menu());
  return $section;
};
