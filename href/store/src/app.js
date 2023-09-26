import { modaisFunction } from '/geral/functions/content/modals.js';
import { validationErrorResult } from '/geral/functions/acount/validation.js';
import { update } from '/geral/functions/acount/update.js';

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