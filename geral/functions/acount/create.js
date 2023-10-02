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

const register = {
  email: document.getElementById("floatingEmailRegister"),
  user: document.getElementById("floatingNameRegister"),
  password: document.getElementById("floatingPasswordRegister"),
  confirmPassword: document.getElementById("floatingRePasswordRegister"),
  terms: document.getElementById("RememberMeRegisterCheckBox"),
  rememberMe: document.getElementById("TermsRegisterCheckBox"),
};

function generateUniqueId() {
  const timestamp = new Date().getTime();
  const randomValue = Math.random(1, 10) * 10; // Multiplicar por um número grande para aumentar a aleatoriedade
  const uniqueId = `${timestamp}${randomValue}`.replace(".", "");
  return uniqueId;
}

function getISO8601DateTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Mês começa em 0
  const day = String(now.getDate()).padStart(2, "0");

  return `${day}/${month}/${year}`;
}

function create() {
  const id = generateUniqueId(); // Gera um ID único para o usuário
  const defaultProfileImage = "https://i.stack.imgur.com/EYX0L.png"; // URL da imagem padrão
  const defaultProfilebanner =
    "https://color-hex.org/colors/0d6efd.png"; // background do perfil
  const defaultdescribeUser = "Olá Entrei No CollectVerse 👋";
  const user = register.user.value;
  const registerDate = getISO8601DateTime();
  const email = register.email.value;
  const password = register.password.value;
  const defaultInfo = "não definido";

  const newUser = {
    id: id,
    profile: defaultProfileImage,
    banner: defaultProfilebanner,
    username: user,
    describe: defaultdescribeUser,
    entryDate: registerDate,
    email: email,
    password: password,
    birth: defaultInfo,
    about: defaultInfo,
    status: defaultInfo,
    contact: defaultInfo
  };

  users.push(newUser);
  const ultimoUsuario = users.length - 1;
  console.log("----------------");
  console.log(users[ultimoUsuario]);
  console.log("----------------");
  console.log(users);

  storageCreate("users", users);
  storageCreate("userData", newUser);
  console.log(newUser);
}

// Ao fazer logout, remova as informações do usuário do localStorage
function logout() {
  localStorage.removeItem("userData");
}

// Função para verificar se o usuário está logado
function isUserLoggedIn() {
  // Verifica se as informações do usuário estão no localStorage
  const userData = localStorage.getItem("userData");
  return userData !== null;
}

export { create, isUserLoggedIn, logout };
