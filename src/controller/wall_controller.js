import { readAllCollectionPosts } from '../lib_firebase/db';

export const showAllPosts = (callback) => readAllCollectionPosts(callback);
