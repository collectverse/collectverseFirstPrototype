import { storageCreate } from '/geral/functions/acount/create.js';

function showCommentOnce(toastId, storageKey) {
  const toast = document.getElementById(toastId);

  const isCommentShown = localStorage.getItem(storageKey);
  const aceptCookies = localStorage.getItem("aceptCookies");

  if (!isCommentShown && toast) {
    const toastBootstrap = new bootstrap.Toast(toast);
    toastBootstrap.show();

    if (aceptCookies == true) {
      return null;
    } else {
      // Limpa todos os itens no localStorage
      localStorage.clear();
    }
  }
}

function userOptionForCookies() {
  const aceptCookies = document.getElementById("aceptCookies");
  const rejectCookies = document.getElementById("rejectCookies");

  aceptCookies.addEventListener("click", () => {
    storageCreate("aceptCookies", true);
  });

  rejectCookies.addEventListener("click", () => {
    storageCreate("aceptCookies", false);
  });
}

export { showCommentOnce };
