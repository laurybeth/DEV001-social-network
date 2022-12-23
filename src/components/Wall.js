import { currentUser } from '../lib_firebase/auth.js';
import { Menu } from './Menu.js';
import { AddPost } from './AddPost';
import { Posts } from './Posts.js';
import { showAllPosts } from '../controller/wall_controller';

export const Wall = () => {
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

  const root = document.getElementById('root');
  root.appendChild(Menu());
  return $section;
};
