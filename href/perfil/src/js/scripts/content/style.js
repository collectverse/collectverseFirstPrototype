function applyUserStyles(user) {
  if (user) {
    switch (user.models.url) {
      case "/geral/model/01.glb":
        user.models.background = "#B7E4C7"; // Verde claro
        user.models.contrast = "#95D5B2"; // Branco
        user.models.first = "#1B4332"; // Branco
        user.models.second = "#081C15"; // Branco
        break;
      case "/geral/model/03.glb":
        user.models.background = "#3C096C"; // Azul claro
        user.models.contrast = "#240046"; // Branco
        user.models.first = "#fffcf2"; // Violeta
        user.models.second = "#ccc5b9"; // Laranja avermelhado
        break;
      case "/geral/model/07.glb":
        user.models.background = "#262626"; // Rosa claro
        user.models.contrast = "#222222"; // Rosa claro
        user.models.first = "#AA95BF"; // Cinza claro
        user.models.second = "#F2F2F2"; // Cinza claro
        break;
      case "/geral/model/08.glb":
        user.models.background = "#FFC8DD"; // Rosa claro
        user.models.contrast = "#FFAFCC"; // Rosa claro
        user.models.first = "#BDE0FE"; // Cinza claro
        user.models.second = "#fff"; // Cinza claro
        break;
      case "/geral/model/11.glb":
        user.models.background = "#588157"; // Verde claro
        user.models.contrast = "#3a5a40"; // Marrom claro
        user.models.first = "#dad7cd"; // Marrom claro
        user.models.second = "#cad2c5"; // Branco
        break;
      case "/geral/model/13.glb":
        user.models.background = "#001233"; // Roxo
        user.models.contrast = "#001845"; // Vermelho
        user.models.first = "#80FFDB"; // Branco
        user.models.second = "#72EFDD"; // Branco
        break;
      case "/geral/model/15.glb":
        user.models.background = "#C0A78A"; // Marrom claro
        user.models.contrast = "#c6ac8f"; // Marrom escuro
        user.models.first = "#0A0908"; // Marrom escuro
        user.models.second = "#0A0908"; // Marrom escuro
        break;
      case "/geral/model/default.glb":
        user.models.background = "#f8f9fa"; // Cinza claro
        user.models.contrast = "#FFFFFF"; // Branco
        user.models.first = "#FFFFFF"; // Branco
        user.models.second = "#000000"; // Preto
        break;
      default:
        user.models.background = "#f8f9fa"; // Cinza claro
        user.models.contrast = "#FFFFFF"; // Branco
        user.models.first = "#FFFFFF"; // Branco
        user.models.second = "#000000"; // Preto
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
