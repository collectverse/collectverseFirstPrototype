import { create } from './create.js';
import { storageCreate } from '/geral/functions/content/storageLocal.js';
import { users as databaseUsers } from '/geral/database/users.js';

//verifica se existe usuarios no localstorage
const usersLocalStorage = localStorage.getItem("users");
let users;

if (usersLocalStorage) {
  users = JSON.parse(usersLocalStorage);
} else {
  users = databaseUsers;
}
import { update } from "./update.js";

const login = {
  enterMethod: document.getElementById("floatingInputLogin"),
  password: document.getElementById("floatingPasswordLogin"),
  rememberMe: document.getElementById("RememberMeLoginCheckBox"),
};

const register = {
  email: document.getElementById("floatingEmailRegister"),
  user: document.getElementById("floatingNameRegister"),
  password: document.getElementById("floatingPasswordRegister"),
  confirmPassword: document.getElementById("floatingRePasswordRegister"),
  rememberMe: document.getElementById("RememberMeRegisterCheckBox"),
  terms: document.getElementById("TermsRegisterCheckBox"),
};

function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
}

function isValidPassword(password) {
  return password.length >= 6 && /[!@#$%^&*]/.test(password);
}

function handleEvent(event) {
  if (!event.target.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
  }
  event.target.classList.add("was-validated");
}

function registerValidation(event) {
  if (event.target.id === "registerForm") {
    const emailField = register.email;
    const passwordField = register.password;
    const confirmPasswordField = register.confirmPassword;
    const userField = register.user;

    const emailErrorElement = document.getElementById(
      "registerEmailErrorElement"
    );
    const usernameErrorElement = document.getElementById("usernameError");
    const passwordErrorElement = document.getElementById("passwordError");

    emailErrorElement.innerText = "";
    usernameErrorElement.innerText = "";
    passwordErrorElement.innerText = "";

    let emailExists = false;

    const usersdb = localStorage.getItem("users");
    if (usersdb) {
      emailExists = JSON.parse(usersdb).some(
        (user) => user.email === emailField.value
      );
    } else {
      emailExists = users.some((user) => user.email === emailField.value);
    }

    // Validar o email
    if (!isValidEmail(emailField.value)) {
      handleEvent(event);
      emailField.classList.add("is-invalid");
      registerEmailErrorElement.innerText =
        "Por favor, insira um endereço de email válido.";
      return;
    } else if (emailExists) {
      handleEvent(event);
      emailField.classList.add("is-invalid");
      registerEmailErrorElement.innerText = "Este email já está em uso.";
      return;
    } else {
      emailField.classList.remove("is-invalid");
      emailField.classList.add("is-valid");
    }

    let usernameExists = false;

    if (usersdb) {
      usernameExists = JSON.parse(usersdb).some(
        (user) => user.username === userField.value
      );
    } else {
      usernameExists = users.some(
        (user) => user.username.toLowerCase() === userField.value.toLowerCase()
      );
    }

    if (userField.value === "") {
      handleEvent(event);
      userField.classList.add("is-invalid");
      usernameErrorElement.innerText = "O nome de usuário é obrigatório.";
    } else if (usernameExists) {
      handleEvent(event);
      userField.classList.add("is-invalid");
      usernameErrorElement.innerText = "Este nome de usuário já está em uso.";
    } else {
      userField.classList.remove("is-invalid");
      userField.classList.add("is-valid");
    }

    // Validar a senha
    if (passwordField.value === "") {
      handleEvent(event);
      passwordField.classList.add("is-invalid");
      passwordErrorElement.innerText = "A senha é obrigatória.";
    } else if (!isValidPassword(passwordField.value)) {
      handleEvent(event);
      passwordField.classList.add("is-invalid");
      passwordErrorElement.innerText =
        "A senha deve ter pelo menos 6 caracteres e incluir caracteres especiais (!@#$%&*).";
    } else {
      passwordField.classList.remove("is-invalid");
      passwordField.classList.add("is-valid");
    }

    // Validar a confirmação de senha
    if (passwordField.value == confirmPasswordField.value) {
      confirmPasswordField.classList.remove("is-invalid");
      confirmPasswordField.classList.add("is-valid");
    } else {
      handleEvent(event);
      confirmPasswordField.classList.add("is-invalid");
    }

    // Verifique se todos os campos são válidos e, em seguida, crie o usuário
    if (
      emailField.classList.contains("is-valid") &&
      !emailExists &&
      userField.classList.contains("is-valid") &&
      !usernameExists &&
      passwordField.classList.contains("is-valid") &&
      confirmPasswordField.classList.contains("is-valid") &&
      register.terms.checked
    ) {
      create();
      update();
    }
  }
}

function loginValidation(event) {
  if (event.target.id === "loginForm") {
    const loginField = login.enterMethod.value;
    const passwordField = login.password.value;

    const enterMethodErrorElement = document.getElementById(
      "enterMethodErrorElement"
    );
    const loginPasswordErrorElement = document.getElementById(
      "loginPasswordErrorElement"
    );

    enterMethodErrorElement.innerText = "";
    loginPasswordErrorElement.innerText = "";

    if (loginField === "") {
      enterMethodErrorElement.innerText = "O usuário é obrigatório.";
      login.enterMethod.classList.add("is-invalid");
    } else if (passwordField === "") {
      loginPasswordErrorElement.innerText = "A senha é obrigatória.";
      login.password.classList.add("is-invalid");
    } else {
      // Verifique se o usuário existe
      const usersdb = localStorage.getItem("users");
      let user;

      if (usersdb) {
        const parsedUsers = JSON.parse(usersdb);
        user = parsedUsers.find(
          (user) =>
            user.username.toLowerCase() === loginField.toLowerCase() ||
            user.email === loginField
        );
      } else {
        user = users.find(
          (user) =>
            user.username.toLowerCase() === loginField.toLowerCase() ||
            user.email === loginField
        );
      }

      if (!user) {
        // Usuário não existe
        enterMethodErrorElement.innerText = "Usuário não existe";
        login.enterMethod.classList.add("is-invalid");
        event.preventDefault();
      } else {
        login.enterMethod.classList.remove("is-invalid");
        // Se o login for bem-sucedido, atualize as informações do usuário
        if (user.password === passwordField) {
          localStorage.setItem("userData", JSON.stringify(user));
          update();
          storageCreate("users", users);
          storageCreate("userData", newUser);
        } else {
          // Senha incorreta, exiba um erro
          loginPasswordErrorElement.innerText = "Senha incorreta";
          login.password.classList.add("is-invalid");
          event.preventDefault();
        }
      }
    }
  }
}

function validationErrorResult() {
  "use strict";

  const forms = document.querySelectorAll(".needs-validation");

  Array.from(forms).forEach((form) => {
    form.addEventListener("submit", handleEvent, false);

    if (form.id === "registerForm") {
      form.addEventListener("submit", registerValidation, false);
    }

    if (form.id === "loginForm") {
      form.addEventListener("submit", loginValidation, false);
    }
  });
}

export { validationErrorResult };
