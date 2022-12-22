import { currentUser } from '../lib_firebase/auth.js';
import { deletePost } from '../controller/posts_controller';

export const Posts = (post, postId) => {
  const $section = document.createElement('div');
  $section.className = 'container-Posts__Post';
  $section.id = postId;
  console.log('soy id de post en posts.js', $section.id);
  $section.innerHTML = `
   
        <div class="container-headerPost">
          <div class="container-user">
            <img  class='container-user__imgUser'src="${currentUser().photoURL}">
            <p class='container-user__nameUser'> ${currentUser().displayName} </p>
          </div>
          <button id='${postId}' class="container-headerPost__options">
            <img class='container-headerPost__hamburguerIcon' src="./assets/img/icon_delete.png">
          </button>
        </div>
        <div class='container-content'>
              <div  class='container-content__textPost'>
              <p>${post.text}</p> 
              </div>
              <div class='container-content__imgPost'>
              <img class='container-content__imgPost-img' src="${post.file}">
              </div>
        </div>

        <div class="containerButtons">
            <div class="containerButtons__likes">
             <div class="containerLikes">
                <img  class="containerLikes__heart" src="https://raw.githubusercontent.com/JENNYFERGAMBOA/DEV001-social-network/main/src/assets/img/icon_like.png" >
                <span class="containerLikes__count">  ${post.likes}                    
                </span>                 
              </div>
            </div>
            <div class="containerButtons__comments">
              <div class="containerComments" >
               <img  class="containerComments__commentIcon" src="https://raw.githubusercontent.com/JENNYFERGAMBOA/DEV001-social-network/main/src/assets/img/icon_comments.png" >           
                <span class="containerComments__count">  ${post.nComments}               
                </span>   
              </div>
            </div>
        </div>
        
        <div class="containerComment">
          <img class="containerComments__comment-imgProfile" src="${currentUser().photoURL}">
          <textarea class='containerComment__text' placeholder="Add a comment"></textarea>
        </div>
      `;

  console.log('post en wall', post);

  const $postDelete = $section.querySelector('.container-headerPost__options');
  $postDelete.addEventListener('click', () => {
    console.log('idPost en posts', postId);
    deletePost(postId).then(() => {
      alert('your post deleted successfully');
    })
      .catch((error) => {
        alert(' Uh-oh, an error occurred!',error.code);
      });
  });

  return $section;
};
