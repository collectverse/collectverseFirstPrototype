//// funções externas

import { posts as databasePosts } from '/geral/database/posts.js';

// Verifique se os posts existem no localStorage
const postsLocalStorage = localStorage.getItem("posts");
let posts;

if (postsLocalStorage) {
  // Se existirem no localStorage, use-os
  posts = JSON.parse(postsLocalStorage);
} else {
  // Se não existirem no localStorage, use os do banco de dados
  posts = databasePosts;
}

import { users as databaseUsers } from '/geral/database/users.js';

//verifica se existe usuarios no localstorage
const usersLocalStorage = localStorage.getItem("users");
let users;

if (usersLocalStorage) {
  users = JSON.parse(usersLocalStorage);
} else {
  users = databaseUsers;
}

import { formatTimestamp, computeMostRecentCommentInOrder, } from '/geral/functions/content/timestamp.js';

// verifica se está na pagina do usuario
let urlsearch = checkPageUrl();

// Variáveis globais
let isLoading = false;
if(!urlsearch){
  var perPage = 15;
}else{
  var perPage = posts.length - 1;
}
let loadedCommentIds = new Set();
let allCommentsLoaded = false;

// Índice do próximo comentário a ser carregado
let nextCommentIndex = 0;

// ver se tem comentarios do usuario
var userFound = 0

// Função para simular os comentários vindos da API
function fetchComments() {
  if (isLoading || allCommentsLoaded) {
    return;
  }

  isLoading = true;

  const commentContainer = document.getElementById("comments-return");
  const loadingIndicator = document.getElementById("loading-indicator");

  if (loadingIndicator) {
    loadingIndicator.style.display = "block";
  }

  const commentsToAdd = [];
  let commentsLoaded = 0;

  // Carregue até perPage comentários não carregados
  while (commentsLoaded < perPage && nextCommentIndex < posts.length) {
    const comment = posts[nextCommentIndex];

    if (!loadedCommentIds.has(comment.id)) {
      commentsToAdd.push(comment);
      loadedCommentIds.add(comment.id);
      commentsLoaded++;
    }

    nextCommentIndex++;
  }

  commentsToAdd.forEach((comment) => {
    commentContainer.innerHTML += createCard(comment);
  });

  if (nextCommentIndex === posts.length) {
    if (!allCommentsLoaded) {
      commentContainer.innerHTML += withoutMoreComments();
      allCommentsLoaded = true;
    }
  }

  if (allCommentsLoaded) {
    if (loadingIndicator) {
      loadingIndicator.remove();
    }
  }

  isLoading = false;
}

function addCommentToTop(comment) {
  const commentContainer = document.getElementById("comments-return");
  const newCommentHtml = createCard(comment);

  // Insira o novo comentário no início da lista
  commentContainer.insertAdjacentHTML("afterbegin", newCommentHtml);
}

// ordena os comentarios por data

posts.sort(computeMostRecentCommentInOrder);

function returnUserInfosForComments(comment) {
  console.log("Comment userId:", comment.user);
  console.log("User Info:", users);

  const user = users.find((user) => user.id === comment.user);

  console.log("Found User:", user);

  return user;
}

function checkPageUrl() {
  // obtem a url
  const url = new URL(window.location.href);
  let idparameters = url.searchParams.get("id");

  if(idparameters){
    return true;
  }

  if(!idparameters){
    return false;
  }
}

function createCard(comment) {
  let user = returnUserInfosForComments(comment);
  let idsearch = localStorage.getItem("idsearch");
  let userData = JSON.parse(localStorage.getItem("userData"));

  if(urlsearch == true){

    if( idsearch && user.id !== idsearch ){
      return "";
    }else{
      userFound ++
    }

  }

  if (!user) {
    // Handle the case where the user is not found.
    return `<div class="card shadow-sm mb-3 border-0" id="${comment.id}">
        <div class="container mt-3">
          <div class="alert alert-primary" role="alert">
              <h4 class="alert-heading">Ah não!</h4>
              <p>Não foi possível encontrar a mensagem ou comentário na rede social.</p>
              <hr>
              <p class="mb-0">Por favor, recarregue a pagina ou tente novamente mais tarde.</p>
              <a href="#">Saiba mais</a>
          </div>
        </div>
    </div>`;
  }

  const timestampFormatado = formatTimestamp(comment.timestamp);

  let cardContent = `
    <div class="card mt-3 border-0" id="${comment.id}">
    <div class="card-header bg-white border-0 pb-0">
        <div class="d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center">
                <div class="avatar my-1 me-2">
                    <a href="href/perfil/index.html?id=${
                      user.id
                    }"><img class="avatar-img rounded-circle" src="
                    ${user.profile}
                    " alt="foto de perfil do usuário ${user.username}"></a>
                </div>
                <div>
                    <h6 class="card-title mb-0 text-break me-4"><a href="href/perfil/index.html?id=${
                      user.id
                    }">${user.username}</a></h6>
                    <div class="nav nav-divider">
                        <p class="nav-item mb-0 small">${timestampFormatado}</p>
                    </div>
                </div>
            </div>
            <div class="dropdown">
                <a href="#" class="nav-link text-secondary btn btn-secondary-soft-hover nav-link bg-light py-1 px-2 mb-0" id="cardShareAction3" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="bi bi-three-dots text-primary"></i>
                </a>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction3">
                    <li><a class="dropdown-item" href="#"><i class="bi bi-bookmark fa-fw pe-2"></i>Salvar Post</a></li>
                    ${

                      userData && userData.id == comment.user ?
                      `
                        <li><a class="dropdown-item" href="#"><i class="bi bi-trash3"></i> Excluir comentario</a></li>
                      ` :
                      `
                      <li><a class="dropdown-item" href="#"><i class="bi bi-x-circle fa-fw pe-2"></i>Não tenho interesse</a></li>
                      <li><a class="dropdown-item" href="#"><i class="bi bi-slash-circle fa-fw pe-2"></i>Bloquear</a></li>
                      <li><hr class="dropdown-divider"></li>
                      <li><a class="dropdown-item" href="#"><i class="bi bi-flag fa-fw pe-2"></i>Reportar Post</a></li>
                      `

                    }
                </ul>
            </div>
        </div>
    </div>
    <div class="card-body">
        <p>${comment.comment}</p>
        ${
          "commentAttachment" in comment
            ? `<img
              src="${comment.commentAttachment}"
              class="img-fluid rounded"
              alt="Imagem do comentário do usuário ${user.profile}"
              />`
            : ""
        }

        <ul class="nav nav-stack py-3 small">
                <li class="nav-item">
                <a class="nav-link mb-0" href="#!"><i class="bi bi-heart pe-1"></i>Curtir (?)</a>
                </li>
                <li class="nav-item dropdown">
                <a href="#" class="nav-link mb-0" id="cardShareAction4" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bi bi-reply-fill flip-horizontal ps-1"></i>Share (?)
                </a>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction4">
                    <li><a class="dropdown-item" href="#"><i class="bi bi-envelope fa-fw pe-2"></i>Enviar por Direct</a></li>
                    <li><a class="dropdown-item" href="#"><i class="bi bi-bookmark-check fa-fw pe-2"></i>Salvar</a></li>
                    <li><a class="dropdown-item" href="#"><i class="bi bi-link fa-fw pe-2"></i>Copiar link</a></li>
                    <li><a class="dropdown-item" href="#"><i class="bi bi-share fa-fw pe-2"></i>Compartilhar Post via …</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#"><i class="bi bi-pencil-square fa-fw pe-2"></i>Republicar</a></li>
                </ul>
            </li>
            <li class="nav-item ms-sm-auto">
                <a class="nav-link" href="#!"><i class="bi bi-chat-fill pe-1"></i>Comments (?)</a>
            </li>
        </ul>
    </div>
</div>        
      `;
  return cardContent;
}

function withoutMoreComments() {

  if(urlsearch == true){


    if(userFound <= 0){
      return `<div class="m-0 mt-2 alert alert-primary" role="alert"> O usuário ainda não fez publicações.</div>`
    }

    return `<div class="m-0 mt-2 alert alert-primary" role="alert"> Estás são todas as postagens do usuário.</div>`

  }

  return `<div class="m-0 mt-2 alert alert-primary" role="alert"> Todo o conteúdo foi visto acima, aguarde para mais conteúdo.</div>`;
}

export { fetchComments, addCommentToTop };
