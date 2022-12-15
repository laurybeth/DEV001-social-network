import { currentUser } from "../lib_firebase/auth";


export const AddPost = (onNavigate) => {
  const $section = document.createElement('section');
 $section.className = 'container';
  $section.innerHTML = `
    <div class='container-Posts__Post'>
        <div class="container-headerPost">
          <div class="container-headerPost__img">
            <img  class='container-headerPost__img__user'src="./assets/img/user_photo_default.png" 
            width="25px" height="25px">
              <p> ${currentUser().email} </p>
            </div>
          
            <img class='container-headerPost__icon' src="./assets/img/icon_hamburguer.png">
        </div>
        <div class='container-imgPost'>
            <img   class='container-imgPost__img' src="./assets/img/cuy.jpg">
        </div>
        <div class="containerButtons">
            <div class="containerButtons__likes">
             <div class="containerLikes">
                <img  class="containerLikes__heart" src="assets/img/icon_like.png" >
                <span class="containerLikes__count"> 300k                     
                </span>    
                
              </div>
            </div>

            <div class="containerButtons__comments">
              <div class="containerComments" >
               <img  class="containerComments__comment" src="assets/img/icon_comments.png" >           
                <span class="containerComments__count"> 
                1 k                   
                </span>   
              </div>
            </div>
        </div>
          <div class="containerComment">
          <img class="containerComments__comment" src="./assets/img/user_photo_default.png">
          <textarea class='containerComment__text' placeholder="Add a comment"></textarea>
          </div>
      </div>`;
  console.log(currentUser());

  return $section;
};
