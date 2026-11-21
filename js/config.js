/* =========================================================
   CONFIGURAÇÃO DO SITE — Graziele Maciel Beauty
   Edite SOMENTE este arquivo para trocar textos, links,
   fotos e vídeos.
   ========================================================= */
window.SITE = {
  nome: "Graziele Maciel",
  marca: "Beauty",
  slogan: "Cílios, sobrancelhas e nanopigmentação para realçar a sua beleza natural.",
  especialidades: "Lash • Brow • Nanopigmentação",
  descricao:
    "Atendimento personalizado, técnicas atualizadas e todo o cuidado que você merece. Agende seu horário e viva essa experiência.",

  // Foto de perfil / capa (coloque o arquivo em img/)
  fotoPerfil: "img/perfil.jpg",

  // WhatsApp: só números, com DDI 55 + DDD. Ex: "5511999998888"
  whatsapp: "554792077276",
  mensagemWhatsapp: "Olá, Graziele! Vim pelo site e gostaria de agendar um horário 💖",

  instagram: "https://www.instagram.com/grazielemaciel_beauty",
  instagramUser: "@grazielemaciel_beauty",
  tiktok: "https://www.tiktok.com/@grazielemaciel_beauty",
  tiktokUser: "@grazielemaciel_beauty",

  // Localização (a mesma do perfil do Instagram)
  endereco: "R. Ella Stahmer - Pouso Redondo, SC, 89172-000",
  mapsLink: "https://maps.app.goo.gl/m59g83TT7j42997n6", // link do Google Maps (botão "Como chegar")
  horario: "Atendimento com hora marcada", // opcional

  // Serviços (edite livremente)
  servicos: [
    { icone: "✦", titulo: "Nanopigmentação", texto: "Fios desenhados um a um para sobrancelhas naturais, definidas e duradouras." },
    { icone: "❀", titulo: "Cílios", texto: "Extensão de cílios com acabamento leve e personalizado para o seu olhar." },
    { icone: "✧", titulo: "Brow & Reconstrução de Sobrancelhas", texto: "Design, correção e reconstrução para sobrancelhas harmoniosas e cheias." },
  ],

  /* Fotos que mais viralizaram no Instagram.
     src  = imagem salva em img/galeria/ (ex: "img/galeria/post1.jpg")
     post = link do post (ao clicar na foto, abre no Instagram) */
  galeria: [
    { post: "https://www.instagram.com/p/DfbC7CzRFep/" },
    { post: "https://www.instagram.com/p/Df8G2n9MsLJ/" },
    { post: "https://www.instagram.com/p/DdM8lIWtvrn/" },
    // Fotos locais também funcionam: { src: "img/galeria/01.jpg", legenda: "Resultado" },
  ],

  /* Vídeos do bio site: cartão com capa + título que abre direto no TikTok.
     capa = imagem salva em img/videos/ (ex: "img/videos/video1.jpg") */
  videos: [
    { url: "https://www.tiktok.com/@grazielemaciel_beauty/video/7429424428087315718", titulo: "Aprenda a higienizar sua extensão" },
    { url: "https://www.tiktok.com/@grazielemaciel_beauty/video/7482800778604809477", titulo: "Tutorial: mimo para clientes" },
    { url: "https://www.tiktok.com/@grazielemaciel_beauty/video/7498473794906885381", titulo: "Conheça o Demodex! O bichinho que vive aí nos seus olhos" },
    { url: "https://www.tiktok.com/@grazielemaciel_beauty/video/7416355138392083717", titulo: "Aprenda a treinar acoplagem sem modelo!" },
  ],

  // Links extras (ficam na seção "Links rápidos", estilo bio)
  linksExtras: [
    // { titulo: "Catálogo de serviços", url: "https://..." },
  ],
};
