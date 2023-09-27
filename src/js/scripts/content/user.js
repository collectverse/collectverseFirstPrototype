const card = document.getElementById("user-card");

function usercard() {
  card.innerHTML = creatPost();
}

function creatPost() {
  const userData = JSON.parse(localStorage.getItem("userData"));

  const div = `
  <div class="card-body text-center">
    <div id="banner-profile" class="avatar avatar-lg rounded py-2 mb-4 position-relative bg-cover" style="background-image: url(${
      userData
        ? userData.banner
        : "https://color-hex.org/colors/0d6efd.png"
    });">
      <a href="#">
        <img class="avatar-img rounded-circle border border-white border-3 position-absolute top-100 start-50 translate-middle" src="${
          userData ? userData.profile : "https://i.stack.imgur.com/EYX0L.png"
        }" alt="${
    userData
      ? "Foto de perfil do usuário " + userData.username
      : "imagem do usuário"
  }">
      </a>
    </div>
    <h5 class="card-title">${
      userData
        ? userData.username
        : '<br>'
    }</h5>
    <p class="card-text">
    ${
      userData && "describe" in userData
        ? userData.describe
        : `
     <span class="placeholder col-4"></span>
      <span class="placeholder col-6"></span>
      <span class="placeholder col-8"></span>
     `
    }</p>
  </div>
  <hr />
  <ul class="nav flex-column">
    <li class="nav-item">
      <a class="nav-link link-secondary link-underline-opacity-0 icon-link icon-link-hover" style="--bs-icon-link-transform: translate3d(0, -.125rem, 0);" href="#">
        <i class="bi bi-people"></i> Amigos
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link link-secondary link-underline-opacity-0 icon-link icon-link-hover" style="--bs-icon-link-transform: translate3d(0, -.125rem, 0);" href="#">
        <i class="bi bi-calendar2-event"></i> Eventos
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link link-secondary link-underline-opacity-0 icon-link icon-link-hover" style="--bs-icon-link-transform: translate3d(0, -.125rem, 0);" href="#">
        <i class="bi bi-collection"></i> Grupos
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link link-secondary link-underline-opacity-0 icon-link icon-link-hover" style="--bs-icon-link-transform: translate3d(0, -.125rem, 0);" href="#">
        <i class="bi bi-bell"></i> Notificações
      </a>
    </li>
    <li class="nav-item new-last-a">
      <a class="nav-link link-secondary link-underline-opacity-0 icon-link icon-link-hover" style="--bs-icon-link-transform: translate3d(0, -.125rem, 0);" href="#">
        <i class="bi bi-alarm"></i> Novidades
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link link-secondary link-underline-opacity-0 icon-link icon-link-hover" style="--bs-icon-link-transform: translate3d(0, -.125rem, 0);" href="#">
        <i class="bi bi-nut"></i> Configurações
      </a>
    </li>
  </ul>
  <div class="text-center py-3">
    <a class="btn btn-link btn-sm link-secondary link-underline-opacity-0" href="${
      userData ? `href/perfil/index.html?id=${userData.id}` : "#"
    }">Ver Perfil</a>
  </div>
`;
  return div;
}

export { usercard };
