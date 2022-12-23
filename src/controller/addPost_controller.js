import { saveCollectionPostDoc } from '../lib_firebase/db.js';
import { currentUser } from '../lib_firebase/auth.js';
import { uploadImg, downloadImg } from '../lib_firebase/storage.js';

export const addPostTasks = (textPost, objImg) => {
  const newUid = currentUser().uid;
  return uploadImg(objImg, newUid).then((snapshot) => {
    console.log('soy snapshot !!!!!!!!!!!!!', snapshot);
    const newUrlImg = snapshot.metadata.fullPath;

    const date = snapshot.metadata.timeCreated;
    return downloadImg(newUrlImg).then((url) => saveCollectionPostDoc(newUid, textPost, url, date));
  });
};
