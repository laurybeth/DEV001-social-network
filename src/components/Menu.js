import { AddPost } from "./AddPost";
export const Menu = (onNavigate) => {
  const $header = document.createElement('header');
  $header.className = 'containerHeader';
  $header.innerHTML = `
  <nav class='containeMenu'>
  <a href='#' class='containeMenu__wall-icon'>
   <img  class='containeMenu__iconImg' src='./assets/img/icon_wall.png' alt='icon wall'></a>
  <a href='#'class='containeMenu__addPost-icon'> 
   <img  class='containeMenu__iconImg'src='https://raw.githubusercontent.com/JENNYFERGAMBOA/DEV001-social-network/main/src/assets/img/icon_addPost.png' alt='icon wall'>
   </a>
  <a href='#' class='containeMenu__user-icon'> 
  <img  class='containeMenu__iconImg'src='./assets/img/icon_user.png' alt='icon wall'>
  </a>
  </nav>
  `;
   $header.querySelector('.containeMenu__addPost-icon').addEventListener('click', (e) => {
    e.preventDefault();
    AddPost();
  });
  return $header;
}

