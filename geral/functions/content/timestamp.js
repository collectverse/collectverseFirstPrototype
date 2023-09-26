// a data é armazenada em formato ISO 8601
// YYYY-MM-DDTHH:MM:SS
// exemplo 2023-09-12T14:30:00
// Função para formatar o timestamp com base na diferença de tempo
function formatTimestamp(timestamp) {
  const now = new Date();
  const dateComment = new Date(timestamp);
  const msdiference = now - dateComment;
  const ssdiference = Math.floor(msdiference / 1000);

  if (ssdiference < 60) {
    return "Há menos de um minuto atrás";
  } else if (ssdiference < 3600) {
    const minutos = Math.floor(ssdiference / 60);
    return `Há ${minutos} minutos atrás`;
  } else if (ssdiference < 86400) {
    const horas = Math.floor(ssdiference / 3600);
    if (horas === 1) {
      return `Há ${horas} hora atrás`;
    }
    return `Há ${horas} horas atrás`;
  } else if (ssdiference < 2592000) {
    const dias = Math.floor(ssdiference / 86400);
    if (dias === 1) {
      return `Há ${dias} dia atrás`;
    }
    return `Há ${dias} dias atrás`;
  } else if (ssdiference < 31536000) {
    const meses = Math.floor(ssdiference / 2592000);
    if (meses === 1) {
      return `Há ${meses} mês atrás`;
    }
    return `Há ${meses} meses atrás`;
  } else {
    const anos = Math.floor(ssdiference / 31536000);
    if (anos === 1) {
      return `Há ${anos} ano atrás`;
    }
    return `Há ${anos} anos atrás`;
  }
}

function computeMostRecentCommentInOrder(a, b) {
  const dateA = new Date(a.timestamp);
  const dateB = new Date(b.timestamp);
  return dateB - dateA;
}

export { formatTimestamp, computeMostRecentCommentInOrder };
