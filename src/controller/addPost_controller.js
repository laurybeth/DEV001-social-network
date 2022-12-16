import { saveCollectionPostDoc } from '../lib_firebase/db.js';
import { currentUser } from '../lib_firebase/auth.js';

export const addPostTasks = (textPost, urlFile) => {
  const newUrlFile = uploadFileToStorage(urlFile);

  const uid = currentUser.uid;
  return saveCollectionPostDoc(uid, textPost, newUrlFile);
};
