import { modaisFunction } from '/geral/functions/content/modals.js';
import { fetchComments } from '/geral/functions/content/comments.js';
import { validationErrorResult } from '/geral/functions/acount/validation.js';
import { update } from '/geral/functions/acount/update.js';
import { publish } from '/geral/functions/content/post.js';
import { updateUserInfos, userId } from './js/scripts/content/profile.js';
import { applyUserStyles } from './js/scripts/content/style.js';
import { searchUsers } from '/geral/functions/content/search.js'

// Chame a função de validação
validationErrorResult();
// pega o id do usuario requisitado
updateUserInfos();

// =================================================================
// altera o estilo do usuario
import { users as databaseUsers } from '/geral/database/users.js';

//verifica se existe usuarios no localstorage
const usersLocalStorage = localStorage.getItem("users");
let users;

if (usersLocalStorage) {
  users = JSON.parse(usersLocalStorage);
} else {
  users = databaseUsers;
}

// Obtém o ID do usuário
const userIdProifle = userId();

// Obtém o usuário com base no ID
const user = getUserById(userIdProifle);

function getUserById(userId) {
  const user = users.find((user) => user.id === userId);
  return user;
}
applyUserStyles(user);

// =================================================================
// Inicialização do carregamento de comentários quando a página carregar
fetchComments();
// pesquisar usuario
const searchInput = document.getElementById("search");
searchInput.addEventListener("input", searchUsers);

// aciona o evento de publicar post
const submitButtonPost = document.getElementById("submit-button-post");
if (submitButtonPost) {
  submitButtonPost.addEventListener("click", () => {
    publish();
    fetchComments();
  });
}

// carregamento do documento
document.addEventListener("DOMContentLoaded", function () {
  // Evento de clique em elementos com a classe 'loginInput'
  // Evento de clique em elementos com a classe 'registerInput'
  modaisFunction();
  // evento para card com informações do usuário
  update();

  // carrega os comentarios do usuario
  const loadingIndicator = document.getElementById("loading-indicator");
  const commentContainer = document.getElementById("comments-return");
    if(commentContainer){
    // Simula carregamento/requisição da DB
    loadingIndicator.style.display = "block";
    setTimeout(function () {
      fetchComments();
    }, 500);
    }
});