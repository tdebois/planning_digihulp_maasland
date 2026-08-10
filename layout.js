document.addEventListener("DOMContentLoaded", () => {
  /* Plaats de lay-outlaag na de ingebouwde basisstijl, zodat deze bewust wint. */
  const layoutLink = document.querySelector('link[href="assets/layout.css"]');
  if (layoutLink) document.head.appendChild(layoutLink);

  const brand = document.querySelector("header .brand");
  if (brand) {
    brand.innerHTML = `
      <img class="logo" src="assets/favicon-192.png" width="50" height="50" alt="">
      <span class="brand-copy"><b>Digitale Helpers Maasland</b><small>Hulp & advies dichtbij</small></span>`;
  }

  const heroVisual = document.querySelector(".hero .visual");
  if (heroVisual) {
    heroVisual.removeAttribute("aria-hidden");
    heroVisual.innerHTML = '<img src="assets/logo-origineel.png" width="1144" height="679" alt="Logo Digitale Helpers van het Maasland — hulp en advies">';
  }

  const hero = document.querySelector(".hero");
  if (hero) {
    hero.insertAdjacentHTML("afterend", `
      <section class="benefits" aria-label="Voordelen van een Digipunt">
        <div class="benefit"><span class="benefit-icon" aria-hidden="true">✓</span><span><b>Gratis hulp</b><span>U betaalt niets voor de ondersteuning.</span></span></div>
        <div class="benefit"><span class="benefit-icon" aria-hidden="true">☻</span><span><b>Rustige uitleg</b><span>Stap voor stap en in duidelijke taal.</span></span></div>
        <div class="benefit"><span class="benefit-icon" aria-hidden="true">⌖</span><span><b>Dicht bij u</b><span>Vind een locatie in uw gemeente.</span></span></div>
      </section>`);
  }

  const footer = document.querySelector("footer");
  const first = footer?.querySelector("b");
  if (first) first.outerHTML = '<div class="footer-brand"><img src="assets/favicon-192.png" width="55" height="55" alt=""><b>Digitale Helpers<br>van het Maasland</b></div>';
});
