import {wallFunction} from '../lib_firebase/auth';

export const Wall = (onNavigate) => {
    const $section = document.createElement('section');
    $section.className = 'container';
    $section.innerHTML = `
    <div>
        <img src="">
        <textarea rows="5" placeholder="¿Que estás <br> pensando ,Yin Yang?"></textarea>
        <img src="">
    </div>
   `;
   

  return $section;
}