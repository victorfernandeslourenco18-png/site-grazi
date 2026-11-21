(function () {
  const S = window.SITE || {};
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = (t = "") => String(t).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const ICONS = {
    whats: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.4-.3Z"/></svg>',
    insta: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 3c.3 2.2 1.6 3.6 3.9 3.8v2.6a6.4 6.4 0 0 1-3.8-1.2v5.6a5.6 5.6 0 1 1-5.6-5.6h.6v2.7a2.9 2.9 0 1 0 2.2 2.8V3h2.7Z"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',
  };

  // ---- Data bindings ----
  $$("[data-bind]").forEach((el) => (el.textContent = S[el.dataset.bind] || ""));
  $$("[data-src-bind]").forEach((el) => {
    const src = S[el.dataset.srcBind];
    if (src) el.src = src;
    el.onerror = () => (el.style.visibility = "hidden"); // fallback: mostra o gradiente do fundo
    if (!src) el.style.visibility = "hidden";
    el.addEventListener("load", () => el.parentElement.classList.add("has-img"));
  });
  $("#year").textContent = new Date().getFullYear();

  // ---- Links ----
  const whatsUrl = S.whatsapp
    ? `https://wa.me/${S.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(S.mensagemWhatsapp || "")}`
    : S.instagram;
  $$(".js-whats").forEach((a) => { a.href = whatsUrl; a.target = "_blank"; a.rel = "noopener"; });
  $$(".js-insta").forEach((a) => (a.href = S.instagram));
  const mapsUrl = S.mapsLink || (S.endereco ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(S.endereco)}` : null);

  const socials = [
    S.whatsapp && { url: whatsUrl, icon: "whats", label: "WhatsApp" },
    S.instagram && { url: S.instagram, icon: "insta", label: "Instagram" },
    S.tiktok && { url: S.tiktok, icon: "tiktok", label: "TikTok" },
    mapsUrl && { url: mapsUrl, icon: "pin", label: "Localização" },
  ].filter(Boolean);
  const socialHtml = socials.map((s) => `<a href="${esc(s.url)}" target="_blank" rel="noopener" aria-label="${s.label}">${ICONS[s.icon]}</a>`).join("");
  $("#heroSocials").innerHTML = socialHtml;
  $("#footerSocials").innerHTML = socialHtml;

  const linkCards = [
    S.whatsapp && { url: whatsUrl, icon: "whats", t: "Agendar pelo WhatsApp", s: "Resposta rápida" },
    S.instagram && { url: S.instagram, icon: "insta", t: "Instagram", s: S.instagramUser },
    S.tiktok && { url: S.tiktok, icon: "tiktok", t: "TikTok", s: S.tiktokUser },
    mapsUrl && { url: mapsUrl, icon: "pin", t: "Como chegar", s: S.endereco || "Abrir no Google Maps" },
    ...(S.linksExtras || []).map((l) => ({ url: l.url, icon: "link", t: l.titulo, s: "" })),
  ].filter(Boolean);
  $("#linksList").innerHTML = linkCards.map((l) => `
    <a class="link-card reveal" href="${esc(l.url)}" target="_blank" rel="noopener">
      <span class="link-card__icon">${ICONS[l.icon]}</span>
      <span class="link-card__text"><strong>${esc(l.t)}</strong>${l.s ? `<small>${esc(l.s)}</small>` : ""}</span>
      <span class="link-card__arrow">→</span>
    </a>`).join("");

  // ---- Serviços ----
  $("#servicesGrid").innerHTML = (S.servicos || []).map((s) => `
    <article class="service reveal"><span class="service__icon">${esc(s.icone)}</span><h3>${esc(s.titulo)}</h3><p>${esc(s.texto)}</p></article>`).join("");

  // ---- Galeria ----
  // Cada item: { src: "img/galeria/01.jpg", post: "link do post", legenda: "..." }
  // Com "post", a foto leva direto ao Instagram. Sem "src", mostra um cartão estilizado.
  const gal = S.galeria || [];
  $("#galleryGrid").innerHTML = gal.length
    ? gal.map((g, i) => {
        const cap = g.legenda ? `<figcaption>${esc(g.legenda)}</figcaption>` : "";
        if (g.src && g.post) return `<a class="gallery__item gallery__item--link reveal" href="${esc(g.post)}" target="_blank" rel="noopener"><img src="${esc(g.src)}" alt="${esc(g.legenda || "Post do Instagram")}" loading="lazy" /><span class="gallery__badge">${ICONS.insta}</span>${cap}</a>`;
        if (g.src) return `<figure class="gallery__item reveal" data-i="${i}"><img src="${esc(g.src)}" alt="${esc(g.legenda || "")}" loading="lazy" />${cap}</figure>`;
        return `<a class="gallery__placeholder reveal" href="${esc(g.post)}" target="_blank" rel="noopener"><span class="gallery__placeholder-icon">${ICONS.insta}</span><strong>${esc(g.legenda || "Post em destaque")}</strong><span>Ver no Instagram →</span></a>`;
      }).join("")
    : `<p class="empty">Adicione as fotos em <code>img/galeria/</code> e liste-as em <code>js/config.js</code>.</p>`;
  if (gal.some((g) => !g.src)) $("#galleryGrid").classList.add("gallery__grid--cards");

  // Lightbox
  const lb = $("#lightbox"), lbImg = $("img", lb), lbCap = $("figcaption", lb);
  let cur = 0;
  const show = (i) => { cur = (i + gal.length) % gal.length; lbImg.src = gal[cur].src; lbCap.textContent = gal[cur].legenda || ""; };
  const close = () => { lb.classList.remove("open"); lb.setAttribute("aria-hidden", "true"); };
  $("#galleryGrid").addEventListener("click", (e) => {
    const f = e.target.closest(".gallery__item"); if (!f) return;
    show(+f.dataset.i); lb.classList.add("open"); lb.setAttribute("aria-hidden", "false");
  });
  $(".lightbox__close").onclick = close;
  $(".lightbox__prev").onclick = () => show(cur - 1);
  $(".lightbox__next").onclick = () => show(cur + 1);
  lb.addEventListener("click", (e) => e.target === lb && close());
  document.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(cur - 1);
    if (e.key === "ArrowRight") show(cur + 1);
  });

  // ---- Vídeos (TikTok / Instagram / YouTube) ----
  // Cada vídeo vira um cartão com capa + título que abre direto no TikTok.
  // "capa" (opcional) = imagem em img/videos/. Sem capa, usa um fundo estilizado.
  const vids = S.videos || [];
  $("#videosGrid").innerHTML = vids.length
    ? vids.map((v, n) => `
        <article class="video reveal">
          <a class="video__cover ${v.capa ? "has-capa" : ""}" href="${esc(v.url)}" target="_blank" rel="noopener" aria-label="Assistir no TikTok: ${esc(v.titulo || "vídeo")}">
            ${v.capa ? `<img class="video__img" src="${esc(v.capa)}" alt="" loading="lazy" />` : ""}
            <span class="video__badge">${/tiktok/.test(v.url) ? ICONS.tiktok + " TikTok" : ICONS.play + " Vídeo"}</span>
            <span class="video__play">${ICONS.play}</span>
            <span class="video__num">${String(n + 1).padStart(2, "0")}</span>
            <strong class="video__title">${esc(v.titulo || "Assistir vídeo")}</strong>
            <span class="video__cta">Assistir no TikTok →</span>
          </a>
        </article>`).join("")
    : `<p class="empty">Adicione os links dos vídeos em <code>js/config.js</code>.</p>`;
  if (!vids.length && !S.tiktok) $("#videos").style.display = "none";

  // ---- Localização ----
  if (S.endereco) {
    $("#addr").textContent = S.endereco;
    $("#mapsBtn").href = mapsUrl;
    $("#mapBox").innerHTML = `<iframe loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Mapa" src="https://www.google.com/maps?q=${encodeURIComponent(S.endereco)}&hl=pt-BR&output=embed"></iframe>`;
  } else {
    $("#addr").textContent = mapsUrl ? "Clique em “Como chegar” para abrir a rota no Google Maps." : "Endereço em breve.";
    if (mapsUrl) {
      $("#mapsBtn").href = mapsUrl;
      $("#mapBox").innerHTML = `<a class="map-card" href="${esc(mapsUrl)}" target="_blank" rel="noopener"><span class="map-card__pin">${ICONS.pin}</span><strong>Graziele Maciel Beauty</strong><span>Abrir localização no Google Maps →</span></a>`;
    } else $("#mapsBtn").style.display = "none";
  }

  // ---- Nav ----
  const nav = $("#nav"), toggle = $(".nav__toggle");
  const onScroll = () => nav.classList.toggle("scrolled", scrollY > 30);
  addEventListener("scroll", onScroll, { passive: true }); onScroll();
  toggle.onclick = () => { const o = nav.classList.toggle("open"); toggle.setAttribute("aria-expanded", o); document.body.style.overflow = o ? "hidden" : ""; };
  $$(".nav__menu a").forEach((a) => a.addEventListener("click", () => { nav.classList.remove("open"); document.body.style.overflow = ""; }));

  // ---- Reveal on scroll ----
  const io = new IntersectionObserver((ents) => ents.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
  }), { threshold: 0.12 });
  $$(".reveal").forEach((el, i) => { el.style.transitionDelay = `${(i % 4) * 80}ms`; io.observe(el); });
})();
