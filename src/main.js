import { Welcome } from './components/Welcome.js';
import { Login } from './components/Login.js';
import { Register } from './components/Register';
import './firebase';

const root = document.getElementById('root');
const routes = {
  '/': Welcome,
  '/login': Login,
  '/Register': Register,
};

const onNavigate = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  root.removeChild(root.firstChild);
  root.appendChild(routes[pathname](onNavigate));
};

const components = routes[window.location.pathname];

window.onpopstate = () => {
  root.removeChild(root.firstChild);
  root.append(components(onNavigate));
};

root.appendChild(components(onNavigate));
