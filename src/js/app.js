// Importe as funções necessárias
import { modaisFunction } from '/geral/functions/content/modals.js';
import { fetchComments } from '/geral/functions/content/comments.js';
import { validationErrorResult } from '/geral/functions/acount/validation.js';
import { update } from '/geral/functions/acount/update.js';
import { post, publish } from '/geral/functions/content//post.js';
import { usercard } from './scripts/content/user.js';

// carrega as notificações
// showCommentOnce();

// carrega o post
post();

// carrega o card do usuario
usercard();

// Inicialização do carregamento de comentários quando a página carregar
fetchComments();

// Chame a função de validação
validationErrorResult();

// carregamento do documento
document.addEventListener("DOMContentLoaded", function () {
  // Evento de clique em elementos com a classe 'loginInput'
  // Evento de clique em elementos com a classe 'registerInput'
  modaisFunction();
  // evento para card com informações do usuário
  update();
});

// aciona o evento de publicar post
const submitButtonPost = document.getElementById("submit-button-post");
if (submitButtonPost) {
  submitButtonPost.addEventListener("click", () => {
    publish();
    fetchComments();
  });
}

const loadingIndicator = document.getElementById("loading-indicator");
window.addEventListener("scroll", function () {
  const scrollableHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  if (window.scrollY >= scrollableHeight - 100) {
    // Simula carregamento/requisição da DB
    loadingIndicator.style.display = "block"; // Mostra o indicador de carregamento
    setTimeout(function () {
      fetchComments();
    }, 500);
  }
});