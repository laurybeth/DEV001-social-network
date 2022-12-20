import { saveCollectionPostDoc, readCollectionPost } from '../lib_firebase/db.js';
import { currentUser } from '../lib_firebase/auth.js';
import { uploadImg, downloadImg } from '../lib_firebase/storage.js';

export const addPostTasks = (textPost, objImg) => {
  const newUid = currentUser().uid;
  return uploadImg(objImg, newUid).then((snapshot) => {
    console.log('SOY snapshot DE ADDPOST CONTROLLER', snapshot);
    const newUrlImg = snapshot.metadata.fullPath;
    return saveCollectionPostDoc(newUid, textPost, newUrlImg);
  });
};

export const showPostTasks = (idPost) => {
  readCollectionPost().then((docRef) => {
    console.log('doc ref en add post.....', docRef.file);
    // downloadImg(docRef.file);
  });
};
