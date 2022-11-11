import { onNavigate } from "../main.js";

export const Login = () => {
  const $div = document.createElement("div");
  const $title = document.createElement("h2");
  const $button = document.createElement("button");
  const $buttonBack = document.createElement("button");
  const $inputName = document.createElement("input");

  $title.textContent = "Welcome the login";
  $button.textContent = "Login";
  $buttonBack.textContent = "Return";

  $buttonBack.addEventListener("click", () => {
    onNavigate("/");
  });

  $div.append($title, $inputName, $button, $buttonBack);
  return $div;
};
