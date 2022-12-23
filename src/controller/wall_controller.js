import { readAllCollectionPosts, readCollectionUserDoc } from '../lib_firebase/db';
import { userState } from '../lib_firebase/auth';

export const showAllPosts = (callback) => readAllCollectionPosts(callback);

export const subscribedUser = (callback) => userState(callback);

export const postOwner = (idPostOwner) => readCollectionUserDoc(idPostOwner);
