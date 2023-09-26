const posts = [
  {
    user: "169464069068720426104462828443",
    id: "1",
    comment:
      "Sempre tive um interesse em assistir Charlotte. Na época que ele estava saindo, eu não consegui acompanhar semanalmente, pois estava muito ocupado e, tinha outras prioridades. Porém, o povo estava falando muito bem, que era um dos melhores da temporada, recomendavam em todos os lugares, etc.",
    timestamp: "2023-09-12T14:30:00",
  },
  {
    user: "169464069068720426104462828444",
    id: "2",
    comment:
      "Esse episódio de BDZ foi incrível, mal posso esperar pelo próximo!",
    timestamp: "2022-10-05T08:15:00",
  },
  {
    user: "169464069068720426104462828445",
    id: "3",
    comment: "O personagem principal é tão carismático!",
    timestamp: "2023-08-20T17:45:00",
  },
  {
    user: "169464069068720426104462828446",
    id: "4",
    comment: "Hunter x Hunter é o melhor anime de todos os tempos!",
    commentAttachment:
      "https://media.gq-magazin.de/photos/628e35d2be670efaab242579/16:9/w_2560%2Cc_limit/HunterxHunter-Aufmacher.jpg",
    timestamp: "2023-07-25T12:00:00",
  },
  {
    user: "169464069068720426104462828447",
    id: "5",
    comment:
      "Lançaram uma nova temporada de Sakura Cardcaptor, estou emocionada!",
    timestamp: "2022-01-30T19:20:00",
  },
  {
    user: "169464069068720426104462828448",
    id: "6",
    comment: "A jornada de Naruto é uma inspiração para todos nós!",
    timestamp: "2022-02-14T10:10:00",
  },
  {
    user: "169464069068720426104462828449",
    id: "7",
    comment: "One Piece é uma aventura que nunca acaba, e isso é incrível!",
    timestamp: "2023-03-08T15:55:00",
  },
  {
    user: "169464069068720426104462828450",
    id: "8",
    comment: "Yuri on Ice é uma obra-prima da animação japonesa!",
    commentAttachment:
      "https://images.mubicdn.net/images/film/285327/cache-610220-1605524434/image-w1280.jpg?size=800x",
    timestamp: "2023-04-17T06:45:00",
  },
  {
    user: "169464069068720426104462828451",
    id: "9",
    comment: "Adorei a trilha sonora de Boku no Hero!",
    commentAttachment:
      "https://i.ytimg.com/vi/3jf_Z68c4LQ/maxresdefault.jpg",
    timestamp: "2023-05-22T22:30:00",
  },
  {
    user: "169464069068720426104462828452",
    id: "10",
    comment: "Este anime é baseado em um ótimo mangá!",
    commentAttachment:
      "https://i.pinimg.com/736x/7d/d3/0c/7dd30cf279f70c1a2dc078072452daa2.jpg",
    timestamp: "2023-06-10T03:05:00",
  },
  {
    user: "169464069068720426104462828453",
    id: "11",
    comment: "Nunca vou me cansar de assistir animes!",
    timestamp: "2023-07-18T11:25:00",
  },
  {
    user: "169464069068720426104462828454",
    id: "12",
    comment:
      "Todo mundo que me conhece ou se pelo menos acompanha meus posts aqui, sabe que sou muito fã de ToG. Acabei de assistir o primeiro episódio do anime e decidi escrever sobre as primeiras impressões que tive dele. Isso nunca aconteceu comigo. Eu nunca tive vontade alguma de fazer isso com nenhuma obra, mas farei com Tower of God porque me sinto na obrigação de guiar os futuros fãs dessa lenda. ",
    timestamp: "2023-08-02T14:40:00",
  },
  {
    user: "169464069068720426104462828455",
    id: "13",
    comment: "A arte em Sakura Cardcaptor é incrível!",
    timestamp: "2023-06-29T20:50:00",
  },
  {
    user: "169464069068720426104462828456",
    id: "14",
    comment: "Boku no Hero tem os melhores personagens!",
    timestamp: "2023-05-15T09:15:00",
  },
  {
    user: "169464069068720426104462828457",
    id: "15",
    comment: "Alguém mais adora animes de mistério aqui? Recomendem alguns!",
    timestamp: "2023-01-11T16:00:00",
  },
  {
    user: "169464069068720426104462828458",
    id: "16",
    comment:
      "Estou procurando um bom anime de romance para assistir. Alguma sugestão?",
    timestamp: "2023-09-10T14:30:00", // Exemplo de data no formato ISO 8601
  },
  {
    user: "169464069068720426104462828459",
    id: "17",
    comment: "Qual é o melhor anime de fantasia que vocês já assistiram?",
    timestamp: "2023-09-06T14:30:00", // Exemplo de data no formato ISO 8601
  },
  {
    user: "169464069068720426104462828460",
    id: "18",
    comment: "Nada como uma boa cena de luta em um anime de ação, certo?",
    timestamp: "2023-09-08T14:30:00", // Exemplo de data no formato ISO 8601
  },
  {
    user: "169464069068720426104462828461",
    id: "19",
    comment:
      "Finalmente comecei a assistir Charlotte e estou amando! Melhor tarde do que nunca.",
    timestamp: "2023-09-12T14:29:00", // Exemplo de data no formato ISO 8601
  },
  {
    user: "169464069068720426104462828462",
    id: "20",
    comment:
      "A trilha sonora de Boku no Hero é realmente épica. Mal posso esperar pelo próximo episódio!",
    timestamp: "2023-09-12T14:15:00", // Exemplo de data no formato ISO 8601
  },
  {
    user: "169464069068720426104462828463",
    id: "21",
    comment:
      "O Gear five é incrivelmente insano, sorte dele que ele é o principal :)",
    commentAttachment:
      "https://i0.wp.com/www.jwave.com.br/wp-content/uploads/2023/07/one-piece-1.jpg",
    timestamp: "2023-09-12T05:30:00", // Exemplo de data no formato ISO 8601
  },
  {
    user: "169464069068720426104462828443",
    id: "23",
    comment:
      "Participei de um evento de anime no último fim de semana. Foi épico! Conheci muitos fãs e cosplayers incríveis.",
    timestamp: "2023-09-10T14:30:00", // Exemplo de data no formato ISO 8601
  },
  {
    user: "169464069068720426104462828444",
    id: "24",
    comment:
      "Assisti a um torneio de luta em tempo real ontem à noite. As batalhas foram emocionantes, e o vencedor surpreendeu a todos!",
    timestamp: "2023-09-09T14:30:00", // Exemplo de data no formato ISO 8601
  },
  {
    user: "169464069068720426104462828445",
    id: "25",
    comment:
      "Li o último capítulo do meu mangá favorito, e estou emocionalmente abalado. A jornada desses personagens foi incrível.",
    timestamp: "2023-09-05T14:30:00", // Exemplo de data no formato ISO 8601
  },
  {
    user: "169464069068720426104462828446",
    id: "26",
    comment:
      "Consegui um autógrafo do criador de One Piece durante um evento de anime. Este é o tesouro mais valioso que já possuí!",
    timestamp: "2023-09-01T14:30:00", // Exemplo de data no formato ISO 8601
  },
  {
    user: "169464069068720426104462828447",
    id: "27",
    comment:
      "Conheci um autor de mangá em uma convenção. Ele compartilhou algumas histórias dos bastidores da criação de sua obra-prima.",
    timestamp: "2023-08-29T14:30:00", // Exemplo de data no formato ISO 8601
  },
  {
    user: "169464069068720426104462828448",
    id: "28",
    comment:
      "Meu amigo e eu assistimos a um filme de anime juntos ontem à noite. Ficamos discutindo a trama até tarde.",
    timestamp: "2023-08-25T14:30:00", // Exemplo de data no formato ISO 8601
  },
  {
    user: "169464069068720426104462828449",
    id: "29",
    comment:
      "Participei de um concurso de cosplay como Sakura Cardcaptor. Ganhei o primeiro lugar!",
    timestamp: "2023-08-20T14:30:00", // Exemplo de data no formato ISO 8601
  },
  {
    user: "169464069068720426104462828450",
    id: "30",
    comment:
      "Escrevi um artigo sobre a evolução dos animes de mecha ao longo dos anos. Mal posso esperar para compartilhá-lo com a comunidade!",
    timestamp: "2023-08-15T14:30:00", // Exemplo de data no formato ISO 8601
  },
  {
    user: "169464069068720426104462828451",
    id: "31",
    comment:
      "Assisti a um novo anime de mistério ontem à noite. O enredo me deixou intrigado!",
    timestamp: "2023-08-10T14:30:00", // Exemplo de data no formato ISO 8601
  },
  {
    user: "169464069068720426104462828452",
    id: "32",
    comment:
      "Estou lendo um mangá incrível atualmente. Mal posso esperar para ver como a história se desenrola!",
    timestamp: "2023-08-07T14:30:00", // Exemplo de data no formato ISO 8601
  },
  {
    user: "169464069068720426104462828453",
    id: "33",
    comment:
      "Participei de uma convenção de animes no último fim de semana. Conheci cosplayers talentosos!",
    timestamp: "2023-08-01T14:30:00", // Exemplo de data no formato ISO 8601
  },
  {
    user: "169464069068720426104462828454",
    id: "34",
    comment:
      "Assisti ao primeiro episódio de um novo anime de ficção científica. As possibilidades são infinitas!",
    timestamp: "2023-07-25T14:30:00", // Exemplo de data no formato ISO 8601
  },
  {
    user: "169464069068720426104462828455",
    id: "35",
    comment:
      "Fui a uma loja de quadrinhos hoje e encontrei uma edição rara de um mangá antigo. Meu dia está feito!",
    timestamp: "2023-07-21T14:30:00", // Exemplo de data no formato ISO 8601
  },
  {
    user: "169464069068720426104462828456",
    id: "36",
    comment:
      "Assisti a um filme de animação ontem à noite. A animação e a história eram deslumbrantes!",
    timestamp: "2023-07-15T14:30:00", // Exemplo de data no formato ISO 8601
  },
  {
    user: "169464069068720426104462828457",
    id: "37",
    comment:
      "Estou revisando todos os episódios do meu anime favorito. A nostalgia é real!",
    timestamp: "2023-07-10T14:30:00", // Exemplo de data no formato ISO 8601
  },
  {
    user: "169464069068720426104462828458",
    id: "38",
    comment:
      "Fui a um café temático de anime com amigos. Os lanches eram deliciosos e decorados com personagens!",
    timestamp: "2023-07-05T14:30:00", // Exemplo de data no formato ISO 8601
  },
  {
    user: "169464069068720426104462828459",
    id: "39",
    comment:
      "Li uma adaptação em mangá de um romance clássico. A arte era impressionante!",
    timestamp: "2023-06-30T14:30:00", // Exemplo de data no formato ISO 8601
  },
  {
    user: "169464069068720426104462828460",
    id: "40",
    comment: "Assisti a um anime de comédia hilário hoje. Ri do início ao fim!",
    timestamp: "2023-06-25T14:30:00", // Exemplo de data no formato ISO 8601
  },
  {
    user: "169464069068720426104462828461",
    id: "41",
    comment:
      "Estou jogando um jogo de vídeo baseado em um anime popular. Os gráficos são incríveis!",
    timestamp: "2023-06-20T14:30:00", // Exemplo de data no formato ISO 8601
  },
  {
    user: "169464069068720426104462828462",
    id: "42",
    comment:
      "Conheci um dublador famoso durante uma convenção. Fiquei emocionado!",
    timestamp: "2023-06-15T14:30:00", // Exemplo de data no formato ISO 8601
  },
  {
    user: "169464069068720426104462828463",
    id: "43",
    comment:
      "Assisti a um episódio emocionante de um anime de esportes. O trabalho em equipe é inspirador!",
    timestamp: "2023-06-10T14:30:00", // Exemplo de data no formato ISO 8601
  },
  {
    user: "169464069068720426104462828443",
    id: "44",
    comment:
      "Recebi meu primeiro cosplay personalizado e mal posso esperar para usá-lo!",
    timestamp: "2023-06-05T14:30:00", // Exemplo de data no formato ISO 8601
  },
  {
    user: "169464069068720426104462828444",
    id: "45",
    comment:
      "Estou acompanhando um mangá de fantasia que tem um mundo de magia complexo. É fascinante!",
    timestamp: "2023-06-01T14:30:00", // Exemplo de data no formato ISO 8601
  },
  {
    user: "169464069068720426104462828445",
    id: "46",
    comment:
      "Conheci um grupo de discussão de anime online e estou adorando interagir com outros fãs!",
    timestamp: "2023-05-29T14:30:00", // Exemplo de data no formato ISO 8601
  },
  {
    user: "169464069068720426104462828446",
    id: "47",
    comment:
      "Assisti a um anime histórico que me ensinou muito sobre uma época passada. Aprendizado divertido!",
    timestamp: "2023-05-25T14:30:00", // Exemplo de data no formato ISO 8601
  },
  {
    user: "169464069068720426104462828447",
    id: "48",
    comment:
      "Estou escrevendo uma análise detalhada sobre a arte em animes. É uma paixão minha!",
    timestamp: "2023-05-20T14:30:00", // Exemplo de data no formato ISO 8601
  },
  {
    user: "169464069068720426104462828448",
    id: "49",
    comment:
      "Assisti a um episódio de um anime de romance e fiquei com um sorriso bobo no rosto!",
    timestamp: "2023-05-15T14:30:00", // Exemplo de data no formato ISO 8601
  },
  {
    user: "169464069068720426104462828449",
    id: "50",
    comment:
      "Estou indo para uma convenção de anime no próximo mês. Mal posso esperar para ver as atrações!",
    timestamp: "2023-05-10T14:30:00", // Exemplo de data no formato ISO 8601
  },
];

export { posts };
