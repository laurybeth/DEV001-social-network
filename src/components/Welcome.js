import { onNavigate } from "../main.js";

export const Welcome = () => {
  const $div = document.createElement("div");
  const $title = document.createElement("h2");
  const $buttonLogin = document.createElement("button");
  const $buttonRegister = document.createElement("button");

  $title.textContent = "Welcome to PetBook";
  $buttonLogin.textContent = "Login";
  $buttonRegister.textContent = "Sign In";
  $buttonLogin.addEventListener("click", () => {
    onNavigate("/login");
  });

  $buttonRegister.addEventListener("click", () => {
    onNavigate("/Register");
    console.log("Register");
  });

  $div.append($title, $buttonRegister, $buttonLogin);
  return $div;
};
