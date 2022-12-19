import { currentUser } from '../lib_firebase/auth.js';

export const Posts = (arrayPost) => {
  const $section = document.createElement('div');
  $section.className='container-Posts__Post'
  $section.innerHTML = `
   
        <div class="container-headerPost">
          <div class="container-headerPost__img">
            <img  class='container-headerPost__img__user'src="${currentUser().photoURL}" 
            width="25px" height="25px">
            <p> ${currentUser().displayName} </p>
          </div>
            <img class='container-headerPost__icon' src="https://raw.githubusercontent.com/JENNYFERGAMBOA/DEV001-social-network/main/src/assets/img/icon_hamburguer.png">
        </div>

        <div class='container-imgPost'>
            <img   class='container-imgPost__img' src="./assets/img/cuy.jpg">
        </div>
        <div class="containerButtons">
            <div class="containerButtons__likes">
             <div class="containerLikes">
                <img  class="containerLikes__heart" src="https://raw.githubusercontent.com/JENNYFERGAMBOA/DEV001-social-network/main/src/assets/img/icon_like.png" >
                <span class="containerLikes__count"> 300k                     
                </span>    
                
              </div>
            </div>

            <div class="containerButtons__comments">
              <div class="containerComments" >
               <img  class="containerComments__commentIcon" src="https://raw.githubusercontent.com/JENNYFERGAMBOA/DEV001-social-network/main/src/assets/img/icon_comments.png" >           
                <span class="containerComments__count"> 
                1 k                   
                </span>   
              </div>
            </div>
        </div>
          <div class="containerComment">
          <img class="containerComments__comment-imgProfile" src="${currentUser().photoURL}">
          <textarea class='containerComment__text' placeholder="Add a comment"></textarea>
          </div>
      `;

  return $section;
};
