import { deleteItem } from '../lib_firebase/db';

export const deletePost = (idPost) => {
  const collectionName = 'posts';
  return deleteItem(idPost, collectionName);
};
