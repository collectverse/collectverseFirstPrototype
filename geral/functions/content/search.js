import { users as databaseUsers } from "/geral/database/users.js";

//verifica se existe usuarios no localstorage
const usersLocalStorage = localStorage.getItem("users");
let users;

if (usersLocalStorage) {
  users = JSON.parse(usersLocalStorage);
} else {
  users = databaseUsers;
}

function searchUsers() {
  const searchInput = document.getElementById("search").value.toLowerCase();
  const userContainer = document.getElementById("user-container");

  userContainer.innerHTML = "";

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchInput)
  );

  if (searchInput.trim() === "") {
    userContainer.style.display = "none";
    return;
  }

  if (filteredUsers.length === 0) {
    const noResultsMessage = document.createElement("div");
    noResultsMessage.innerHTML = `
      <div class="my-2"> 
        <div class="text-center">
        <h1 class="display-1 fw-bold fs-5">404</h1>
        <p class="fs-6"> <span class="text-danger">Opps!</span> usuário não encontrado.</p>
      </div>
      </div>
    `;
    userContainer.appendChild(noResultsMessage);
  } else {
    // Exibe os resultados
    filteredUsers.forEach((user) => {
      const userElement = document.createElement("div");
      userElement.innerHTML = `
        <div class="my-2"> 
          <a href="/href/perfil/index.html?id=${user.id}" class="d-flex justify-content-start align-items-center link-underline link-underline-opacity-0 text-black">
              <img src="${
                user.profile
              }" class="avatar-DropDown rounded-circle"/>
              <p class=" ps-2 m-0">${
                user.username.length > 15
                  ? user.username.slice(0, 15) + "..."
                  : user.username
              }</p>
          </a>
        </div>
      `;
      userContainer.appendChild(userElement);
    });
  }

  userContainer.style.display = "block";
}

export { searchUsers };
