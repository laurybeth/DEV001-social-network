import { currentUser } from '../lib_firebase/auth.js';
import { Menu } from './Menu.js';
import { AddPost } from './AddPost';
import { Posts } from './Posts.js';
import { showAllPosts, postOwner } from '../controller/wall_controller';

/* const currentUser = subscribedUser((user) => {
  console.log('suscribedUser en wall', user);
  return user;
}); */

// console.log('retorna suscribedUser en wall', currentUser());

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
            <img class="container-imgProfile__img" src='${currentUser() ? currentUser().photoURL : 0}'>
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
      const idPostOwner = post.data().uid;
      postOwner(idPostOwner)
        .then((docPostOwner) => {
          $section.querySelector('.container-Posts').insertAdjacentElement('afterbegin', Posts(post.data(), post.id, docPostOwner.data()));
          console.log('soy docPostOwner en wall', docPostOwner.data());
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log('Error en obtener el id del propietario del post', errorCode);
        });
    });
  });

  const $addPostElement = $section.querySelector('.container-addPost__text');

  $addPostElement.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('escucha para agregar un post:', e.target);

    if (e.target.getAttribute('id') === 'addPost') {
      AddPost();
    }
  });

  const root = document.getElementById('root');
  root.appendChild(Menu());

  return $section;
};
