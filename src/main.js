import './firebase';
import { Welcome } from './components/Welcome.js';
import { Login } from './components/Login.js';
import { Register } from './components/Register.js';
import { Wall } from './components/Wall.js';
import { userState } from './lib_firebase/auth';
// import { subscribedUser } from './controller/wall_controller';
// import { currentUser, user } from './lib_firebase/auth.js';

const root = document.getElementById('root');
const routes = {
  '/': Welcome,
  '/login': Login,
  '/register': Register,
  '/wall': Wall,
};

const onNavigate = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  root.removeChild(root.firstChild);
  root.appendChild(routes[pathname](onNavigate));
};

const components = routes[window.location.pathname];

window.onpopstate = () => {
  root.removeChild(root.firstChild);
  root.append(components(onNavigate));
};

userState(() => {
  root.appendChild(components(onNavigate));
});

/* subscribedUser((user) => {
  if (user) {
    console.log('suscribedUser en main', user);

    const $imgProfile = document.querySelector('.container-imgProfile');
    const $containerAddPost = document.querySelector('.container-addPost');
    console.log('soy en main....',$imgProfile, $containerAddPost);

    $imgProfile.innerHTML = `<img class="container-imgProfile__img" src='${user.photoURL}'>`;
    $containerAddPost.insertAdjacentHTML('afterend', `<div class="container-addPost__text" id="addPostBlock" >What are you thinking, ${user.displayName}? </div>`);
  }
});
 */
