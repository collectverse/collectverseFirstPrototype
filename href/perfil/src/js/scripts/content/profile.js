import { users as databaseUsers } from '/geral/database/users.js';

//verifica se existe usuarios no localstorage
const usersLocalStorage = localStorage.getItem("users");
let users;

if (usersLocalStorage) {
  users = JSON.parse(usersLocalStorage);
} else {
  users = databaseUsers;
}

function userId() {
  const url = new URL(window.location.href);
  let idparameters = url.searchParams.get("id");

  // Verifica se o ID não está na URL, mas existe no Local Storage
  if (!idparameters) {
    idparameters = localStorage.getItem("idsearch");

    if (idparameters) {
      url.searchParams.set("id", idparameters);
      window.history.replaceState({}, "", url.href);
    }
  } else {
    localStorage.setItem("idsearch", idparameters);
  }

  return idparameters;
}

function updateUserInfos() {

  const userIdentification = userId();
  // usuario que corresponde ao id
  const user = users.find((user) => user.id === userIdentification);

  if(user){
    //  postagens do usuario
    const userPost = document.getElementById('user-post');
    const textArea = updateUIForComments();

    userPost.innerHTML = textArea;
    // entrada do comentario
    const cardProfile = document.getElementById("card-profile-html");
    const div = updateUI();

    cardProfile.innerHTML = div;
    // sobre o usuario
    const aboutuser = document.getElementById("about-user");
    const about = updateUiForAboutUser();

    aboutuser.innerHTML = about;
    // 3d do usuario
    const perfilmodelviewer = document.getElementById("perfil-model-viewer");
    let models = user.models;
    const userModelsExist = 'models' in user;

    function setModelsConfig() {
      perfilmodelviewer.setAttribute("src", models);
      perfilmodelviewer.setAttribute("preload", "auto");
      perfilmodelviewer.setAttribute("shadow-intensity", "0.1");
      perfilmodelviewer.setAttribute("camera-controls", "");
    }

    if(!userModelsExist){
      models = '/geral/model/02.glb'
      setModelsConfig();
    }else{
      setModelsConfig();
    }
  }else{
    const main = document.querySelector('main');

    main.innerHTML = `
    <div class="d-flex align-items-center justify-content-center vh-100">
      <div class="text-center">
          <h1 class="display-1 fw-bold">404</h1>
          <p class="fs-3"> <span class="text-danger">Opps!</span> Pagina não achada.</p>
          <p class="lead">
              A pagina que está tentando entrar não existe.
            </p>
          <a href="/index.html" class="btn btn-primary">Voltar</a>
      </div>
    </div>
    `
  }
  
}

function updateUI() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const userIdentification = userId();
  // usuario que corresponde ao id
  const user = users.find((user) => user.id === userIdentification);
  let bannerExist = "banner" in user;

  if(user){
    let div = `
        <div class="container mt-4 p-0">
            <div class="card border-0">

                <div class="rounded-top banner-perfil-html position-relative" style="background-image: url(
                    ${  
                          bannerExist
                        ? user.banner
                        : "https://color-hex.org/colors/0d6efd.png"
                    }
                    );">
                
                    <!-- Button -->
                    <div class="d-flex mt-3 justify-content-center ms-sm-auto mt-lg-5 position-absolute end-0 bottom-0 m-2">
                        ${
                          userData && userData.id == userIdentification?
                          `<button class="btn btn-outline-light me-2" type="button"> <i class="bi bi-pencil-fill pe-1"></i> Editar </button>` :
                          ``
                        }
                        <div class="dropdown">
                        <button class="icon-md btn btn-outline-light" type="button" id="profileAction2" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi bi-three-dots"></i>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="profileAction2">
                            <li><a class="dropdown-item" href="#"> <i class="bi bi-share"></i> Compartilhar perfil</a></li>
                            ${
                              userData && userData.id == userIdentification ?
                              ` 
                              <li><a class="dropdown-item" href="#"> <i class="bi bi-lock fa-fw pe-2"></i> Privar perfil</a></li>
                              <li><hr class="dropdown-divider"></li>
                              <li><a class="dropdown-item" href="#"> <i class="bi bi-gear fa-fw pe-2"></i> Configurações do perfil</a></li>
                              ` :
                              `
                              <li><a class="dropdown-item" href="#"> <i class="bi bi-slash-circle"></i> Bloquear Perfil</a></li>
                              <li><hr class="dropdown-divider"></li>
                              <li><a class="dropdown-item" href="#"> <i class="bi bi-flag"></i> Denunciar abuso</a></li>
                              `
                            }
                        </ul>
                        </div>
                    </div>

                </div>

                <div class="card-body py-0">
                    <div>
                    <div class="d-flex mb-5 mt-3">

                        <div class="avatar">
                        <img class="avatar-img rounded-circle border border-white border-3 avatar-perfil-html" src="
                        ${
                          user.profile
                        }
                        " alt="Foto de perfil do usuário">
                        </div>
                        <div class="ms-sm-2 mt-3">

                        <h2 class="mb-0 h5 text-break">
                        ${
                          user.username
                        }
                        </h2>
                        <p class="text-break">
                        ${
                            user.describe
                            ? user.describe
                            : "Usuário sem Descrição"
                        }
                        </p>
                        
                        </div>

                    </div>
                    </div>

                    <ul class="list-inline mb-0 ms-3">
                    <li class="list-inline-item"><i class="bi bi-calendar2-plus me-1"></i> Entrou em: ${
                      user.entryDate
                    }</li>
                    </ul>

                </div>

                <div class="card-footer mt-3 pt-2 pb-0 bg-white pb-2">

                    <ul class="nav nav-bottom-line align-items-center justify-content-center justify-content-md-start mb-0 border-0">
                    <li class="nav-item"> <a class="nav-link active" href="#"> Postagens </a> </li>
                    <li class="nav-item"> <a class="nav-link" href="#"> Inventário </a> </li>
                    </ul>
                </div>
            </div>
        </div>
    `;

  return div;
  }
}

function updateUIForComments() {

  const userData = JSON.parse(localStorage.getItem("userData"));
  const userIdentification = userId();

  if(userData && userData.id == userIdentification){
    let div = `
    <br>
    <div class="card card-body border-0" id="user-post-card">
    <div class="d-flex mb-3">
        <!-- Avatar -->
        <div class="avatar avatar-img-post-area avatar-xs me-2">
            <a href="#"><img class="avatar-img rounded-circle" src="${userData.profile}" alt="Imagem de perfil do usuário ${userData.username}"></a>
        </div>
        <!-- Post input -->
        <form class="w-100">
            <textarea id="post-textarea" class="form-post-for-user form-control pe-4 border-0" rows="2" data-autoresize="" placeholder="Compartilhe o que está pensando..."></textarea>
        </form>
    </div>
    <!-- Share feed toolbar START -->
    <ul class="grid nav nav-pills nav-stack small fw-normal">
        <li class="nav-item">
            <a class="nav-link bg-light py-1 px-2 mb-0" href="#" data-bs-toggle="modal" data-bs-target="#feedActionPhoto">
                <i class="bi bi-image-fill text-success pe-2"></i><spam class="attachment">Foto</spam>
            </a>
        </li>
        <li class="px-2  nav-item">
            <a class="nav-link bg-light py-1 px-2 mb-0" href="#" data-bs-toggle="modal" data-bs-target="#feedActionVideo">
                <i class="bi bi-camera-reels-fill text-info pe-2"></i><spam class="attachment">Vidêo</spam>
            </a>
        </li>
        <li class="nav-item">
            <a href="#" class="nav-link bg-light py-1 px-2 mb-0" data-bs-toggle="modal" data-bs-target="#modalCreateEvents">
                <i class="bi bi-calendar2-event-fill text-danger pe-2"></i><spam class="attachment">Evento</spam>
            </a>
        </li>
        <li class="nav-item dropdown ms-lg-auto">
            <a class="nav-link bg-light py-1 px-2 mb-0 ms-2" href="#" id="feedActionShare" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-three-dots"></i>
            </a>
            <!-- Dropdown menu -->
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="feedActionShare">
                <li><a class="dropdown-item" href="#"><i class="bi bi-bookmark-check fa-fw pe-2"></i>Fazer pergunta</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#"><i class="bi bi-pencil-square fa-fw pe-2"></i>Ajuda</a></li>
            </ul>
        </li>
    </ul>
    <button id="submit-button-post" type="button" class="btn btn-primary mt-2 w-100">Publicar</button>
    </div>
  `
  return div
  }else{
    let div =``;

    return div
  }

}

function updateUiForAboutUser() {
  
  const userIdentification = userId();
  // usuario que corresponde ao id
  const user = users.find((user) => user.id === userIdentification);

  if(user){
    let div = `
    <div class="card border-0">
    <div class="border-0 pb-0">
        <h5 class="card-title ps-3 p-4 pb-2">Sobre</h5>
    </div>
    <div class="card-body position-relative pt-0">
        <p>${user.about}</p>
        <ul class="list-unstyled mt-3 mb-0">
            <li class="mb-2"> <i class="bi bi-calendar-date fa-fw pe-1"></i> Data de Nascimento: <strong> ${user.birth} </strong> </li>
            <li class="mb-2"> <i class="bi bi-heart fa-fw pe-1"></i> Status: <strong> ${user.status} </strong> </li>
            <li> <i class="bi bi-envelope fa-fw pe-1"></i> Contato: <strong> ${user.contact} </strong> </li>
        </ul>
    </div>
  </div> 
  `;

  return div
  }else{
    return;
  }
}

export { updateUserInfos, updateUiForAboutUser };
