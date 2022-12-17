import { ref, uploadBytes } from 'firebase/storage';
import { storage } from '../firebase';

export const uploadImg = (urlImg, userId) => {
  // Create a child reference

  console.log('mirame!!!', userId);
  const spaceRef = ref(storage, 'images/space.jpg');
  // imagesRef now points to 'images'
  // Child references can also take paths delimited by '/'
  const imgRef = ref(storage, (`post-${userId}`));
  // spaceRef now points to "images/space.jpg"
  // imagesRef still points to "images"
  console.log('SOY imgRef de storage.js', imgRef);
  return uploadBytes(imgRef, imgRef);
};
