import './firebase';
import { Welcome } from './components/Welcome.js';
import { Login } from './components/Login.js';
import { Register } from './components/Register.js';
import { Wall } from './components/Wall.js';
// import { subscribedUser } from './controller/wall_controller';
// import { currentUser, user } from './lib_firebase/auth.js';

const root = document.getElementById('root');
const routes = {
  '/': Welcome,
  '/login': Login,
  '/register': Register,
  '/wall': Wall,
};

const onNavigate = (pathname) => {
  // browser session history estado, título y dominio
  window.history.pushState({}, pathname, window.location.origin + pathname);
  // a string containing the canonical form of the origin of the specific location. (https://....)
  root.removeChild(root.firstChild);
  root.appendChild(routes[pathname](onNavigate));
};

// A string containing an initial '/' followed by the path of the URL
const components = routes[window.location.pathname];

window.onpopstate = () => {
  root.removeChild(root.firstChild);
  root.append(components(onNavigate));
};

root.appendChild(components(onNavigate));
