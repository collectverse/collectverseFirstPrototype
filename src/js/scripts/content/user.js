const card = document.getElementById("user-card");

function usercard() {
  card.innerHTML = creatPost();
}

function creatPost() {
  const userData = JSON.parse(localStorage.getItem("userData"));

  const div = `
  <a href="${userData ? `href/perfil/index.html?id=${userData.id}` : "#"}" class="link-underline link-underline-opacity-0 text-black">
    <div class="card-body text-center">
      <div id="banner-profile" class="avatar avatar-lg rounded py-2 mb-4 position-relative bg-cover" style="background-image: url(${
        userData
          ? userData.banner
          : "https://color-hex.org/colors/0d6efd.png"
      });">
          <img class="avatar-img avatar-img-card rounded-circle border border-white border-3 position-absolute top-100 start-0 translate-middle ms-5" src="${
            userData ? userData.profile : "https://i.stack.imgur.com/EYX0L.png"
          }" alt="${
      userData
        ? "Foto de perfil do usuário " + userData.username
        : "imagem do usuário"
    }">
      </div>
      <h5 class="card-title">${
        userData
          ? userData.username
          : '<br>'
      }</h5>
      <p class="card-text mb-2">
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
  </a>
`;
  return div;
}

export { usercard };
