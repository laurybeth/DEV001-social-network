import { deletePost } from '../controller/posts_controller';
import { Modal } from './Modal.js';

export const Posts = (post, postId, postOwner) => {
  const $div = document.createElement('div');
  $div.className = 'container-Posts__Post';
  $div.dataset.post = postId;
  console.log('atributo data-post: ', $div.dataset.post);
  // $section.id = postId;
  // console.log('soy id de post en posts.js', $section.id);
  $div.innerHTML = `
   
        <div class="container-headerPost">
          <div class="container-user">
            <img  class='container-user__imgUser'src="${postOwner.imgProfile}">
            <p class='container-user__nameUser'> ${postOwner.name} </p>
          </div>
          <button class="container-headerPost__options">
            <img class='container-headerPost__hamburguerIcon' src="https://raw.githubusercontent.com/JENNYFERGAMBOA/DEV001-social-network/main/src/assets/img/icon_delete.png">
          </button>
        </div>
        <div class='container-content'>
              <div  class='container-content__textPost'>
              <p class='container-AddPost__title_text'>${post.text}</p> 
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
        </div>   
      `;

  /* <div class="containerButtons__comments">
              <div class="containerComments" >
               <img  class="containerComments__commentIcon" src="https://raw.githubusercontent.com/JENNYFERGAMBOA/DEV001-social-network/main/src/assets/img/icon_comments.png">
                <span class="containerComments__count">  ${post.nComments}
                </span>
              </div>
        </div> */
  /* <div class="containerComment">
          <img class="containerComments__comment-imgProfile" src="${currentUser().photoURL}">
          <textarea class='containerComment__text' placeholder="Add a comment"></textarea>
        </div> */

  console.log('post en wall', post);

  const $postDelete = $div.querySelector('.container-headerPost__options');
  $postDelete.addEventListener('click', () => {
    console.log('idPost en posts', postId);
    deletePost(postId).then(() => {
      Modal('your post deleted successfully ');
      setTimeout(() => {
        document.getElementById('modal').style.display = 'none';
      }, 2000);
    })
      .catch((error) => {
        const errorCode = error.code;
        Modal('Uh-oh, an error occurred! ', errorCode);
        setTimeout(() => {
          document.getElementById('modal').style.display = 'none';
        }, 2000);
      });
  });

  return $div;
};
