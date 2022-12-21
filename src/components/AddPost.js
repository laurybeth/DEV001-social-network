import { addPostTasks } from '../controller/addPost_controller';
import { Modal } from './Modal.js';

export const AddPost = (onNavigate) => {
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
         <div class="container__previsualizacion">
        <img class="img__previsualizacion" id="imagPrevisualizacion" >
      </div>
        <div class=" container-UploadFile"> 
           <img  class="containerInput__uploadFileIcon" src="https://raw.githubusercontent.com/JENNYFERGAMBOA/DEV001-social-network/main/src/assets/img/icon_addImage.png
            " alt="upload file icon"> 
         
          <input type="file" class="" id="fileAddPost" placeholder="Upload a file" required>
        </div> 
        
        <input class="container__button__login AddPost btnsubmit" type="submit" value="Publicar">
     </form>
  </div>
  `;
  /** *********previsualizar************************ */
  const $seleccionArchivos = $AddPost.querySelector('#fileAddPost');
  const $imagenPrevisualizacion = $AddPost.querySelector('#imagPrevisualizacion');
  const $previsualizacion = $AddPost.querySelector('.container__previsualizacion');
  $seleccionArchivos.addEventListener('change', () => {
    if (!$seleccionArchivos.files || !$seleccionArchivos.files.length) {
      $imagenPrevisualizacion.src = '';
      return;
    }

    $previsualizacion.insertAdjacentHTML('afterbegin', '<span id="img__previsualizacion__close">X</span>');
    $imagenPrevisualizacion.src = URL.createObjectURL($seleccionArchivos.files[0]);
  });
  const $close = $AddPost.querySelector('.container__previsualizacion');

  /** ***************************************** */

  // console.log(currentUser());
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
      .then((postDoc) => {
        Modal('Success:', 'Your post was successfully created');
      })
      .catch((error) => {
        Modal('Error:', 'Something went wrong');
      });
  });

  return $AddPost;
};
