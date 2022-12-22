import { readAllCollectionPosts, deleteItem } from '../lib_firebase/db';

export const showAllPosts = (callback) => readAllCollectionPosts(callback);

export const deletePost = (idPost) => deleteItem(idPost);