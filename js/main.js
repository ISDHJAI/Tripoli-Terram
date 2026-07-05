/**
 * TRÍPOLI — main.js
 * Motor de interacción de la página. Lee el contenido desde
 * property-data.js — no requiere edición para actualizar textos,
 * plantas o fotos.
 */
(function () {
  "use strict";

  /* ---------------- Header on scroll ---------------- */
  const header = document.getElementById("siteHeader");
  const progressPeaks = document.getElementById("progressPeaks");
  const peakFills = document.querySelectorAll(".peak-fill");
  const heroImg = document.getElementById("heroImg");

  function onScroll() {
    const y = window.scrollY;
    header.classList.toggle("scrolled", y > 40);

    const docH = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docH > 0 ? Math.min(1, y / docH) : 0;
    progressPeaks.style.setProperty("--scroll", pct.toFixed(4));

    // Each peak fills in its own third of the scroll range.
    peakFills.forEach((el) => {
      const i = Number(el.dataset.peak); // 0,1,2
      const start = i / 3, end = (i + 1) / 3;
      const local = Math.max(0, Math.min(1, (pct - start) / (end - start)));
      el.style.setProperty("--fill", local.toFixed(3));
    });

    // Subtle parallax on the hero photo.
    if (heroImg && y < window.innerHeight) {
      heroImg.style.transform = `scale(1.05) translateY(${y * 0.08}px)`;
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------------- Precio ---------------- */
  const priceFrom = document.getElementById("priceFrom");
  const priceTo = document.getElementById("priceTo");
  const priceCur = document.getElementById("priceCur");
  if (priceFrom && PROPERTY.precio) {
    priceFrom.textContent = PROPERTY.precio.desde;
    priceTo.textContent = PROPERTY.precio.hasta;
    priceCur.textContent = PROPERTY.precio.moneda || "";
  }

  /* ---------------- Hero entrance ---------------- */
  const hero = document.getElementById("hero");
  requestAnimationFrame(() => setTimeout(() => hero.classList.add("play"), 60));

  /* ---------------- Stats ---------------- */
  const statsRow = document.getElementById("statsRow");
  PROPERTY.specs.forEach((s) => {
    const el = document.createElement("div");
    el.className = "stat";
    el.innerHTML = `
      <div class="stat-value">${s.valor}${s.unidad ? `<sup>${s.unidad}</sup>` : ""}</div>
      <div class="stat-label">${s.etiqueta}</div>`;
    statsRow.appendChild(el);
  });

  /* ---------------- Plantas (tabs) ---------------- */
  const planPanel = document.getElementById("planPanel");
  const tabBtns = document.querySelectorAll(".tab-btn");

  function renderPlan(key) {
    const data = PROPERTY.distribucion[key];
    const tagText = key === "plantaBaja" ? "Planta Baja" : "Planta Alta";
    planPanel.innerHTML = `
      <div class="plan-figure">
        <span class="plan-tag">${tagText}</span>
        <img src="${data.imagen}" alt="${tagText} — Trípoli">
      </div>
      <ul class="plan-list">
        ${data.ambientes
          .map(
            (a, i) =>
              `<li><span class="idx">${String(i + 1).padStart(2, "0")}</span><span>${a}</span></li>`
          )
          .join("")}
      </ul>`;
    const img = planPanel.querySelector("img");
    if (img.complete) img.classList.add("loaded");
    else img.addEventListener("load", () => img.classList.add("loaded"));
  }

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabBtns.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      renderPlan(btn.dataset.plan);
    });
  });

  renderPlan("plantaBaja");

  /* ---------------- Galería ---------------- */
  const galleryContainer = document.getElementById("galleryContainer");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxClose = document.getElementById("lightboxClose");

  if (PROPERTY.galeria && PROPERTY.galeria.some((s) => s.fotos && s.fotos.length)) {
    const figObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            figObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            sectionObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    PROPERTY.galeria.forEach((seccion) => {
      if (!seccion.fotos || seccion.fotos.length === 0) return;

      const wrap = document.createElement("div");
      wrap.className = "gallery-section reveal";

      const head = document.createElement("div");
      head.className = "gallery-section-head";
      head.innerHTML = `
        <span class="gallery-section-count">${String(seccion.fotos.length).padStart(2, "0")}</span>
        <h3 class="gallery-section-title">${seccion.titulo}</h3>`;
      wrap.appendChild(head);

      const grid = document.createElement("div");
      grid.className = "gallery-grid";
      if (seccion.fotos.length === 1) grid.classList.add("cols-1");
      else if (seccion.fotos.length === 2) grid.classList.add("cols-2");
      seccion.fotos.forEach((foto, i) => {
        const fig = document.createElement("figure");
        fig.style.setProperty("--d", `${(i % 6) * 0.08}s`);
        fig.innerHTML = `<img src="${foto.src}" alt="${foto.alt || seccion.titulo}" loading="lazy">`;
        fig.addEventListener("click", () => openLightbox(foto.src, foto.alt || seccion.titulo));
        grid.appendChild(fig);
        figObserver.observe(fig);
      });
      wrap.appendChild(grid);

      galleryContainer.appendChild(wrap);
      sectionObserver.observe(wrap);
    });
  } else {
    galleryContainer.innerHTML = `
      <div class="gallery-empty">
        <svg class="peaks-sm" viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 40 L12 14 L24 40 Z" fill="#767571"/>
          <path d="M14 40 L26 6 L38 40 Z" fill="#b7b6b2"/>
          <path d="M28 40 L40 12 L52 40 Z" fill="#f7c948"/>
        </svg>
        <strong>Fotos próximamente</strong>
        <p>Estamos preparando las fotografías de Trípoli. Vuelve pronto para verla a detalle.</p>
      </div>`;
  }

  function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightbox.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function closeLightbox() {
    lightbox.classList.remove("open");
    document.body.style.overflow = "";
  }
  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });

  /* ---------------- Scroll reveal ---------------- */
  const revealEls = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealEls.forEach((el) => io.observe(el));
})();
