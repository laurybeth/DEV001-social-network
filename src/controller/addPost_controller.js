import { saveCollectionPostDoc } from '../lib_firebase/db.js';
import { currentUser } from '../lib_firebase/auth.js';
import { uploadImg, downloadImg } from '../lib_firebase/storage.js';

export const addPostTasks = (textPost, objImg) => {
  const newUid = currentUser().uid;
  return uploadImg(objImg, newUid)
    .then((snapshot) => {
      const newUrlImg = snapshot.metadata.fullPath;
      console.log('newUrlImg en uploadImg', newUrlImg);
      const date = snapshot.metadata.timeCreated;
      return downloadImg(newUrlImg)// CHECK
        .then((url) => {
          console.log('url en downloadImg', url);
          return saveCollectionPostDoc(newUid, textPost, url, date)
            .then((postDoc) => {
              console.log('Se guardó el documento en la colleción Posts', postDoc);
            })
            .catch((error) => {
              console.log('ERROR no guardó el documento en la colección Posts', error.code);
            });
        })
        .catch((error) => {
          console.log('ERROR URL NO devuelto en downloadImg en controller addPost', error.code);
        });
    })
    .catch((error) => {
      console.log('ERROR snapshot NO devuelto en uploadImg en controller addPost', error.code);
    });
};
