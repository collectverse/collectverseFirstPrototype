function applyUserStyles(user) {
  if (user) {
    switch (user.models.url) {
      case "/geral/model/01.glb":
        user.models.background = "#00FF00"; // Verde claro
        user.models.contrast = "#FFFFFF"; // Branco
        user.models.first = "#FFFFFF"; // Branco
        user.models.second = "#FFFFFF"; // Branco
        break;
      case "/geral/model/02.glb":
        user.models.background = "#E6E6E6"; // Cinza claro
        user.models.contrast = "#FFFFFF"; // Branco
        user.models.first = "#FFFFFF"; // Preto
        user.models.second = "#000000"; // Preto
        break;
      case "/geral/model/04.glb":
        user.models.background = "#ADD8E6"; // Azul claro
        user.models.contrast = "#FFFFFF"; // Branco
        user.models.first = "#DDA0DD"; // Violeta
        user.models.second = "#FF4500"; // Laranja avermelhado
        break;
      case "/geral/model/07.glb":
        user.models.background = "#262626"; // Rosa claro
        user.models.contrast = "#222222"; // Rosa claro
        user.models.first = "#AA95BF"; // Cinza claro
        user.models.second = "#F2F2F2"; // Cinza claro
        break;
      case "/geral/model/08.glb":
        user.models.background = "#FFC0CB"; // Rosa claro
        user.models.contrast = "#FFC0CB"; // Rosa claro
        user.models.first = "#F5F5F5"; // Cinza claro
        user.models.second = "#F5F5F5"; // Cinza claro
        break;
      case "/geral/model/11.glb":
        user.models.background = "#90EE90"; // Verde claro
        user.models.contrast = "#D2B48C"; // Marrom claro
        user.models.first = "#D2B48C"; // Marrom claro
        user.models.second = "#FFFFFF"; // Branco
        break;
      case "/geral/model/13.glb":
        user.models.background = "#800080"; // Roxo
        user.models.contrast = "#FF0000"; // Vermelho
        user.models.first = "#FFFFFF"; // Branco
        user.models.second = "#FFFFFF"; // Branco
        break;
      case "/geral/model/15.glb":
        user.models.background = "#D2B48C"; // Marrom claro
        user.models.contrast = "#8B4513"; // Marrom escuro
        user.models.first = "#8B4513"; // Marrom escuro
        user.models.second = "#8B4513"; // Marrom escuro
        break;
      default:
        // Mantenha as cores padrão (#262626, #222222, #AA95BF, #F2F2F2)
        break;
    }

    const perfilmodelviewer = document.getElementById("perfil-model-viewer");
    const backgroundColor = user.models.contrast;
    perfilmodelviewer.style.backgroundColor = `${backgroundColor}`;
    
    document.documentElement.style.setProperty(
      "--background-color",
      user.models.background
    );
    document.documentElement.style.setProperty(
      "--contrast-color",
      user.models.contrast
    );
    document.documentElement.style.setProperty(
      "--first-color",
      user.models.first
    );
    document.documentElement.style.setProperty(
      "--second-color",
      user.models.second
    );
  }
}

export { applyUserStyles };
