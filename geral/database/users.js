const users = [
  {
    id: "1694640690687224426104462828446",
    profile:
      "https://i.kym-cdn.com/photos/images/newsfeed/000/964/739/5ab.gif",
    banner:
      "https://i.pinimg.com/originals/37/af/24/37af24f04788b5fcfc363e70ebc4b49f.gif",
    username: "Hikage",
    password: "2202",
    email: "hikage@example.com",
    entryDate: "6/6/6",
    describe: "Olá, sou Gustavo Couto",
    birth: "2006-07-24",
    about: "Eae rapaziada, acabei de entrar no site, estou gostando da comunidade :)",
    models: {
      url: '/geral/model/07.glb'
    },
  },
  {
    id: "169464069068720426104462828443",
    profile:
      "https://wallpapers-clan.com/wp-content/uploads/2023/05/cool-pfp-02.jpg",
    username: "gabrielGames",
    password: "senha456",
    email: "gabriel@example.com",
    entryDate: "2023-09-20",
    describe: "Olá, sou o Gabriel, um grande fã de anime!",
    birth: "1995-03-15",
    about: "Amo assistir animes e fazer novos amigos.",
    models: {
      url: '/geral/model/01.glb'
    },
  },
  {
    id: "169464069068720426104462828444",
    profile:
      "https://wallpapers.com/images/hd/cool-anime-girl-pfp-aoi-hinami-f7u50zvrx77vpmsr.jpg",
    username: "mariaqwg",
    password: "senha789",
    email: "maria@example.com",
    entryDate: "2023-08-14",
    describe: "Oi, sou a Maria e adoro animes!",
    birth: "1998-06-25",
    about: "Gosto de desenhar e assistir animes nos meus tempos livres.",
    models: {
      url: '/geral/model/11.glb'
    },
  },
  {
    id: "169464069068720426104462828445",
    profile:
      "https://i.pinimg.com/564x/ac/a0/e8/aca0e8c3817192be8704da8fe03208d8.jpg",
      banner: 'https://i.pinimg.com/564x/4b/51/fa/4b51fa84306ea52b73ba7297b765f82d.jpg',
    username: "lucasGames",
    password: "senha101112",
    email: "lucas@example.com",
    entryDate: "2023-07-10",
    describe: "Oi, sou o Lucas, um grande fã de animes!",
    birth: "1997-04-05",
    about: "Gosto de jogar jogos online e colecionar action figures de animes.",
    models: {
      url: '/geral/model/03.glb'
    },
  },
  {
    id: "169464069068720426104462828446",
    profile:
      "https://dthezntil550i.cloudfront.net/ab/latest/ab2110240404186150021019451/1280_960/a514afd1-8b64-402c-afb6-d98b373da2e5.png",
    username: "Mika",
    password: "senha131415",
    email: "mika@example.com",
    entryDate: "2023-06-25",
    describe: "Olá, sou a Mika e adoro Hunter x Hunter!",
    birth: "1996-11-20",
    about: "Sempre em busca do meu anime favorito.",
    models: {
      url: '/geral/model/13.glb'
    },
  },
  {
    id: "169464069068720426104462828447",
    profile:
      "https://i.pinimg.com/564x/d5/5f/42/d55f42c1edee2c7f60b803a51f0f17df.jpg",
    username: "sakuraFã",
    password: "senha161718",
    email: "sakura@example.com",
    entryDate: "2023-05-14",
    describe: "Oi, sou a Sakura, uma grande fã de Cardcaptor Sakura!",
    birth: "1999-02-28",
    about: "Adoro cosplay e colecionar cartas mágicas.",
    models: {
      url: '/geral/model/08.glb'
    },
  },
  {
    id: "169464069068720426104462828448",
    profile:
      "https://i.pinimg.com/1200x/ee/61/37/ee61374e60f036d0d605c37b3a7bee8a.jpg",
    username: "naruto5235",
    password: "senha192021",
    email: "naruto@example.com",
    entryDate: "2023-04-03",
    describe: "Oi, sou o Naruto Uzumaki, o Hokage da Vila da Folha!",
    birth: "1997-10-10",
    about: "Acredito no poder da amizade e nunca desisto dos meus sonhos.",
    models: {
      url: '/geral/model/11.glb'
    },
  },
  {
    id: "169464069068720426104462828449",
    profile:
      "https://i.pinimg.com/564x/7b/f9/25/7bf925f35bfd9ada17291685fa755901.jpg",
    username: "luffy o Pirata",
    password: "senha222324",
    email: "luffy@example.com",
    entryDate: "2023-03-12",
    describe: "Oi, sou o Luffy, o futuro Rei dos Piratas!",
    birth: "1995-05-05",
    about: "Minha missão é encontrar o One Piece e me tornar o Rei dos Piratas.",
    models: {
      url: '/geral/model/13.glb'
    },
  },
  {
    id: "169464069068720426104462828450",
    profile:
      "https://i.pinimg.com/736x/5a/f9/34/5af934dc6c7b4f6c278ed410813b3afa.jpg",
    username: "Yuki",
    password: "senha252627",
    email: "yuri@example.com",
    entryDate: "2023-02-18",
    describe: "Oi, sou a Yuri e adoro animes de romance!",
    birth: "1996-09-08",
    about: "Gosto de ler mangás e assistir a adaptações de animes de romance.",
    models: {
      url: '/geral/model/13.glb'
    },
  },
  {
    id: "169464069068720426104462828451",
    profile:
      "https://i.pinimg.com/564x/6e/28/d5/6e28d5ba753dd0ef54225639c90bdeec.jpg",
    username: "Kaido",
    password: "senha282930",
    email: "kaido@example.com",
    entryDate: "2023-01-06",
    describe: "Oi, sou o Kaido, o homem mais forte do mundo!",
    birth: "1990-12-25",
    about: "Vivo em busca de desafios e sou invulnerável!",
    models: {
      url: '/geral/model/11.glb'
    },
  },
  {
    id: "169464069068720426104462828452",
    profile:
      "https://i.pinimg.com/564x/62/ff/89/62ff89ed1fee0e24f110ea229cca5188.jpg",
      banner:'https://i.pinimg.com/564x/d8/aa/07/d8aa07574af2e769755aabe93f39154d.jpg',
    username: "OtakuForever",
    password: "senha313233",
    email: "otaku@example.com",
    entryDate: "2022-10-30",
    describe: "Oi, sou um otaku para sempre!",
    birth: "2000-02-10",
    about: "Assisto animes desde criança e nunca vou parar!",
    models: {
      url: '/geral/model/08.glb'
    },
  },
  {
    id: "169464069068720426104462828453",
    profile:
      "https://i.pinimg.com/236x/9d/90/5e/9d905e53f4f0c390cd7e05c3a38aac97.jpg",
    username: "MangaFanatic",
    password: "senha343536",
    email: "manga@example.com",
    entryDate: "2022-11-25",
    describe: "Oi, sou um grande fã de mangás!",
    birth: "1999-07-20",
    about: "Adoro ler mangás e colecionar edições raras.",
    models: {
      url: '/geral/model/default.glb'
    },
  },
];

export { users };
