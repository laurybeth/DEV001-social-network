import { saveCollectionPostDoc } from '../lib_firebase/db.js';
import { currentUser } from '../lib_firebase/auth.js';
import { uploadImg } from '../lib_firebase/storage.js';

export const addPostTasks = (textPost, urlFile) => {
  const newUid = currentUser().uid;
  const newUrlFile = uploadImg(urlFile, newUid).then((snapshot) => {
    console.log('SOY CONSOLE.LOG DE ADDPOST CONTROLLER', snapshot);
    return saveCollectionPostDoc(newUid, textPost, newUrlFile);
  });
};