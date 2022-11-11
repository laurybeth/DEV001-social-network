import { Welcome } from "./components/Welcome.js";
import { Login } from "./components/Login.js";
import { Register } from "./components/Register";

const root = document.getElementById("root");
const routes = {
  "/": Welcome,
  "/login": Login,
  "/Register": Register,
};

export const onNavigate = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  root.removeChild(root.firstChild);
  root.appendChild(routes[pathname]());
};

const components = routes[window.location.pathname];

root.appendChild(components());
