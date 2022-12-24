import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase';

export const uploadImg = (objImg, userId) => {
  // Create a child reference

  console.log('userId en storage.js', userId);
  const imgName = objImg.name;

  const imgRef = ref(storage, (`posts-${userId}/${imgName}`));
  // spaceRef now points to "images/space.jpg"
  // imagesRef still points to "images"
  return uploadBytes(imgRef, objImg);
};

export const downloadImg = (urlImg) => {
  const imgRef = ref(storage, urlImg);
  return getDownloadURL(imgRef);
};
