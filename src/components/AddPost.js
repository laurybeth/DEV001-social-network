import { addPostTasks } from '../controller/addPost_controller';
import { Modal } from './Modal.js';

export const AddPost = () => {
  const $AddPost = document.createElement('div');
  $AddPost.id = 'addPost';
  $AddPost.className = 'container-modal';
  const $idCloseAddPost = 'closeAddPost';
  const $formID = 'registerForm';

  $AddPost.innerHTML = `
  <div class="container-modal__content container__addPost">
     
     <div class='container-AddPost__title'>
      <p> Crear publicación </p>
      <span class="container-modal__close" id="${$idCloseAddPost}">&times;</span>   
     </div>

     <form class='container-AddPost__form' id="${$formID}"> 
          <textarea class="containerInput__box textPost" id="textAddPost" name="user_post" placeholder="What are you thinking?" ></textarea>
         <div class="container-imgPreview">
        <img class="container-imgPreview__img" id="imgPreview" >
      </div>
        <div class=" container-UploadFile"> 
           <img  class="containerInput__uploadFileIcon" src="https://raw.githubusercontent.com/JENNYFERGAMBOA/DEV001-social-network/main/src/assets/img/icon_addImage.png
            " alt="upload file icon"> 
         
          <input type="file" id="fileAddPost" placeholder="Upload a file" required>
        </div> 
        
        <input class="container__button__login AddPost btnsubmit" type="submit" value="Publicar">
     </form>
  </div>
  `;
  /** *********previsualizar************************ */
  const $inputFile = $AddPost.querySelector('#fileAddPost');
  const $imgPreview = $AddPost.querySelector('#imgPreview');
  $inputFile.addEventListener('change', () => {
    if (!$inputFile.files || !$inputFile.files.length) {
      $imgPreview.src = '';
      return;
    }

    $imgPreview.src = URL.createObjectURL($inputFile.files[0]);// src="blob:http://localhost:5173/89cd66cf-5a27-4269-b4ba-33a34869aa40"
  });

  /** ***************************************** */

  const root = document.getElementById('root');
  root.appendChild($AddPost);

  $AddPost.style.display = 'block';
  const $closeAddPostElement = document.getElementById($idCloseAddPost);

  $closeAddPostElement.addEventListener('click', () => {
    $AddPost.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if ((e.target === $AddPost)) {
      $AddPost.style.display = 'none';
    }
  });

  const $form = document.getElementById($formID);

  $form.addEventListener('submit', (e) => {
    e.preventDefault();

    const texPost = $form[0].value;
    const objImg = $form[1].files[0];

    console.log($form);
    console.log('textPost en addPost: ', texPost);
    console.log('urlFile en addPost: ', objImg);

    addPostTasks(texPost, objImg)
      .then(() => { // then (postDoc)
        /* document.getElementById('addPost').style.display = 'none'; */
        Modal('Success:', 'Your post was successfully created');
        setTimeout(() => { document.getElementById('modal').style.display = 'none'; }, 2000);
      })
      .catch((error) => {
        console.log('Error en addPostTasks en addPost', error.code);
        /* document.getElementById('addPost').style.display = 'none'; */
        Modal('Error:', 'Something went wrong');
        setTimeout(() => { document.getElementById('modal').style.display = 'none'; }, 2000);
      });
  });

  return $AddPost;
};
