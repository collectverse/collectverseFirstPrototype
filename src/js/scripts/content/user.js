const card = document.getElementById("user-card");

function usercard() {
  card.innerHTML = creatPost();
}

function creatPost() {
  const userData = JSON.parse(localStorage.getItem("userData"));

  const div = `
  <a href="${userData ? `href/perfil/index.html?id=${userData.id}` : "#"}" class="link-underline link-underline-opacity-0 text-black">
  
  <div class="card-body text-center">
    <div id="banner-profile" class=" avatar avatar-lg rounded py-2 position-relative bg-cover" style="background: #87abda50;">
          
          <div class="d-flex justify-content-center align-items-center gap-4 flex-column">
          
            <div class="d-flex gap-3 flex-column align-items-center">

              <div class="d-flex justify-content-start align-items-center gap-2 w-100 ms-4">

                <img class="avatar-img-card rounded-circle " src="${
                  userData ? userData.profile : "https://i.stack.imgur.com/EYX0L.png"
                }" alt="${
                  userData ? 
                  "Foto de perfil do usuário " + userData.username
                  : "imagem do usuário"
                }">
              
                <h5 class="card-title">${
                  userData
                    ? userData.username
                    : ``
                }
                </h5>

              </div>

              <div class="d-flex text-center gap-5 justify-content-center align-items-center m-auto fs-6">
            
                <p class="fs-6"> 
                  <span class="fw-bold">500</span>
                  <br>
                  <span class="fw-semibolder"><i class="bi bi-people"></i></span>
                </P>
                <p class="fs-6"> 
                  <span class="fw-bold">23</span>
                  <br>
                  <span class="fw-semibolder"><i class="bi bi-person-check"></i></span>
                </P>
                <p class="fs-6"> 
                  <span class="fw-bold">23</span>
                  <br>
                  <span class="fw-semibolder"><i class="bi bi-chat-left-dots"></i></span>
                </P>
                
              </div>

            </div>

          </div>
    </div>
  </div>

  </a>
`;
  return div;
}

export { usercard };
