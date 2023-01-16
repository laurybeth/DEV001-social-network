import { readAllCollectionPosts, readCollectionUserDoc } from '../lib_firebase/db';

export const showAllPosts = (callback) => readAllCollectionPosts(callback);

export const postOwner = (idPostOwner) => readCollectionUserDoc(idPostOwner);
