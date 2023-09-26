import { posts } from '/geral/database/posts.js';
import { storageCreate } from '/geral/functions/content/storageLocal.js';
import { addCommentToTop } from './comments.js';

function generateUniqueIdForPost() {
  const timestamp = new Date().getTime();
  const randomValue = Math.random(1, 10) * 10; // Multiplicar por um número grande para aumentar a aleatoriedade
  const uniqueId = `${randomValue}${timestamp}`.replace(".", "");
  return uniqueId;
}

function post() {
  const avatarImg = document.querySelector(
    "#user-post-card .avatar-img-post-area"
  );
  avatarImg.innerHTML = creatPost();
}

function getISO8601DateTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Mês começa em 0
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
}

function publish() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const postInput = document.getElementById("post-textarea");
  if (userData) {
    const id = generateUniqueIdForPost();

    if (postInput.value !== "") {
      const newPost = {
        user: userData.id,
        id: id,
        comment: postInput.value,
        timestamp: getISO8601DateTime(),
      };

      posts.push(newPost);
      storageCreate("posts", posts);

      // Chame a função para adicionar o novo comentário ao topo da lista
      addCommentToTop(newPost);

      postInput.value = "";
      if (postInput.classList.contains("is-invalid")) {
        postInput.classList.remove("is-invalid");
      }
    } else {
      postInput.classList.add("is-invalid");
      postInput.focus();
    }
  } else {
    postInput.classList.add("is-invalid");
    postInput.focus();
    postInput.value = "Ah!Não estou logado!";
  }
}

function creatPost() {
  const userData = JSON.parse(localStorage.getItem("userData"));

  if (!userData) {
    let div = `
        <a href="#"><img class="avatar-img rounded-circle" src="https://i.stack.imgur.com/EYX0L.png" alt="Imagem padrão para o perfil de usuario"></a>
        `;

    return div;
  } else {
    let div = `
        <a href="#"><img class="avatar-img rounded-circle" src="${userData.profile}" alt="Imagem de perfil do usuário ${userData.username}"></a>
        `;

    return div;
  }
}

export { post, publish };
