import { isUserLoggedIn, logout } from './create.js';

const perfilMethods = document.getElementById("perfil-methods");
const loggedIn = isUserLoggedIn();

function update() {
  if (!loggedIn) {
    return null;
  } else {
    perfilMethods.innerHTML = creatInfo();
  }

  // Adicione um event listener ao botão "Sair" depois de criá-lo
  const logoutButton = document.getElementById("logoutButton");
  if (logoutButton) {
    logoutButton.addEventListener("click", function () {
      logout();
      window.location.reload();
    });
  }
}

function creatInfo() {
  if (loggedIn) {
    const userData = JSON.parse(localStorage.getItem("userData"));

    if (userData) {
      let div = ` 
      <li class="nav-item dropdown z-3">
      <a class="nav-link dropdown-toggle d-flex align-items-center" href="#" id="profileDropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <div class="avatar ms-3 d-flex gap-2 justify-content-center align-items-center">
              <img class="avatar-img avatar-DropDown rounded-circle" src="${
                userData.profile
              }" alt="Avatar do usuario">
              <p class="m-0 remove-text-header-small">${userData.username}</p>
          </div>
      </a>
      <ul class="dropdown-menu dropdown-animation dropdown-menu-end pt-3 small me-md-n3 mt-md-4 border-0 shadow-sm" aria-labelledby="profileDropdown" data-bs-popper="static">
          <!-- Informações do perfil do usuário -->
          <li class="px-3">
              <div class="d-flex align-items-center position-relative">
                  <!-- Avatar do usuário -->
                  <div class="avatar me-3">
                      <!-- Coloque a foto do perfil do usuário aqui -->
                      <img class="avatar-img rounded-circle" src="${
                        userData.profile
                      }" alt="Avatar do usuario">
                  </div>
                  <div class="d-flex  flex-column">
                      <!-- Nome do usuário -->
                      <a class="h6 stretched-link" href="#">${
                        userData.username
                      }</a>
                      <!-- Cargo ou descrição -->
                      <p class="small m-0">${
                        "describe" in userData
                          ? userData.describe
                          : "Usuário sem Descrição"
                      }</p>
                  </div>
              </div>
              <!-- Link para visualizar o perfil -->
              <a class="dropdown-item btn btn-primary-soft btn-sm my-2 text-center text-primary bg-primary-subtle" href="/href/perfil/index.html?id=${userData.id}">Ver perfil</a>
          </li>
          <!-- Links do dropdown -->
          <li><a class="dropdown-item icon-link icon-link-hover" style="--bs-icon-link-transform: translate3d(0, -.125rem, 0);" href="#"><i class="bi bi-gear fa-fw me-2"></i>Configurações e Privacidade</a></li>
          <li><a class="dropdown-item icon-link icon-link-hover" style="--bs-icon-link-transform: translate3d(0, -.125rem, 0);" href="#" target="_blank"><i class="fa-fw bi bi-life-preserver me-2"></i>Suporte</a></li>
          <li><a class="dropdown-item icon-link icon-link-hover" style="--bs-icon-link-transform: translate3d(0, -.125rem, 0);" href="#" target="_blank"><i class="fa-fw bi bi-card-text me-2"></i>Documentação</a></li>
          <li class="dropdown-divider"></li>
          <!-- Opção de saída -->
          <li><a id="logoutButton" class="dropdown-item bg-danger-soft-hover" href="#"><i class="bi bi-power fa-fw me-2"></i>Sair</a></li>
          </ul>
      </li>
          `;
      return div;
    }
  }
  // erro
}

export { update };
