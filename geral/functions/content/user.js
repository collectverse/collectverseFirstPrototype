const card = document.getElementById("user-card");

function usercard() {
  card.innerHTML = creatPost();
}

function creatPost() {
  const userData = JSON.parse(localStorage.getItem("userData"));

  const div = `
  <a href="${userData ? `href/perfil/index.html?id=${userData.id}` : "#"}" class="link-underline link-underline-opacity-0 text-black">
  
  <div class="card-body">
    <div id="banner-profile" class=" avatar avatar-lg rounded py-2 position-relative bg-cover" style="background: ${userData ? `url(${userData.banner})` : '#87abda50'}; background-repeat:no-repeat; background-position:center; background-size:cover;"></div>

    <div class="mt-2 d-flex justify-content-start align-items-center gap-3">

      ${
        userData ?
        `
        <img src="${userData.profile}" class="rounded-circle d-block avatar-img-card" alt="Imagem de perfil do usuário">
        <p class="h5 text-left">
        ${userData.username}
        <br>
        <span class="fs-6">${userData.describe}</span>
        </p>
        `
        : ``
      }

    </div>
    
  </div>

  </a>
`;
  return div;
}

export { usercard };
