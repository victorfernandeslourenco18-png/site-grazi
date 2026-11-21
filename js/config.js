/* =========================================================
   CONFIGURAÇÃO DO SITE — Graziele Maciel Beauty
   Edite SOMENTE este arquivo para trocar textos, links,
   fotos e vídeos. Campos marcados com  ⚠ PREENCHER  ainda
   precisam dos dados reais da cliente.
   ========================================================= */
window.SITE = {
  nome: "Graziele Maciel",
  marca: "Beauty",
  slogan: "Cílios, sobrancelhas e nanopigmentação para realçar a sua beleza natural.",
  especialidades: "Lash • Brow • Nanopigmentação",
  descricao:
    "Atendimento personalizado, técnicas atualizadas e todo o cuidado que você merece. Agende seu horário e viva essa experiência.",

  // Foto de perfil / capa (coloque o arquivo em img/)
  fotoPerfil: "img/perfil.jpg", // ⚠ PREENCHER (salve a foto de perfil do Instagram aqui)

  // WhatsApp: só números, com DDI 55 + DDD. Ex: "5511999998888"
  whatsapp: "554792077276",
  mensagemWhatsapp: "Olá, Graziele! Vim pelo site e gostaria de agendar um horário 💖",

  instagram: "https://www.instagram.com/grazielemaciel_beauty",
  instagramUser: "@grazielemaciel_beauty",
  tiktok: "https://www.tiktok.com/@grazielemaciel_beauty",
  tiktokUser: "@grazielemaciel_beauty",

  // Localização (a mesma do perfil do Instagram)
  endereco: "", // opcional: endereço por extenso (ex: "Rua X, 123 - Bairro, Cidade - SC") — ativa o mapa embutido
  mapsLink: "https://maps.app.goo.gl/m59g83TT7j42997n6", // link do Google Maps (botão "Como chegar")
  horario: "Atendimento com hora marcada", // opcional

  // Serviços (edite livremente)
  servicos: [
    { icone: "✦", titulo: "Nanopigmentação", texto: "Fios desenhados um a um para sobrancelhas naturais, definidas e duradouras." },
    { icone: "❀", titulo: "Cílios", texto: "Extensão de cílios com acabamento leve e personalizado para o seu olhar." },
    { icone: "✧", titulo: "Brow & Reconstrução de Sobrancelhas", texto: "Design, correção e reconstrução para sobrancelhas harmoniosas e cheias." },
  ],

  /* Fotos que mais viralizaram no Instagram.
     Salve as imagens em img/galeria/ e liste aqui.
     "link" (opcional) = link do post original. */
  galeria: [
    { post: "https://www.instagram.com/p/DfbC7CzRFep/" },
    { post: "https://www.instagram.com/p/Df8G2n9MsLJ/" },
    { post: "https://www.instagram.com/p/DdM8lIWtvrn/" },
    // Fotos locais também funcionam: { src: "img/galeria/01.jpg", legenda: "Resultado" },
  ],

  /* Vídeos do bio site. Aceita links do TikTok, Instagram (reel/post) e YouTube.
     O site gera o player automaticamente. */
  videos: [
    // Links curtos do TikTok abrem o vídeo no app. Com o link completo
    // (tiktok.com/@usuario/video/123...) o player aparece embutido no site.
    { url: "https://vt.tiktok.com/ZSpoQPH4r/", titulo: "Aprenda a higienizar sua extensão" },
    { url: "https://vt.tiktok.com/ZSpoQQgvK/", titulo: "Tutorial: mimo para clientes" },
    { url: "https://vt.tiktok.com/ZSpoQ6EJh/", titulo: "Conheça o Demodex! O bichinho que vive aí nos seus olhos" },
    { url: "https://vt.tiktok.com/ZSpoQm3LN/", titulo: "Aprenda a treinar acoplagem sem modelo!" },
  ],

  // Links extras (ficam na seção "Links rápidos", estilo bio)
  linksExtras: [
    // { titulo: "Catálogo de serviços", url: "https://..." },
  ],
};
