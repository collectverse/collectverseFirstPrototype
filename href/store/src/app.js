import { modaisFunction } from '/geral/functions/content/modals.js';
import { validationErrorResult } from '/geral/functions/acount/validation.js';
import { update } from '/geral/functions/acount/update.js';
import { searchUsers } from '/geral/functions/content/search.js'
import { usercard } from '/geral/functions/content/user.js';

// carrega o card do usuario
usercard();
// Chame a função de validação
validationErrorResult();
// pesquisar usuario
const searchInput = document.getElementById("search");
searchInput.addEventListener("input", searchUsers);

// carregamento do documento
document.addEventListener("DOMContentLoaded", function () {
  // Evento de clique em elementos com a classe 'loginInput'
  // Evento de clique em elementos com a classe 'registerInput'
  modaisFunction();
  // evento para card com informações do usuário
  update();
});