class SimpleRouter {
  constructor(routes) {
    this.routes = routes;
    this.currentView = null;

    // Escuchar cambios de hash
    window.addEventListener("hashchange", () => this.handleRoute());
    window.addEventListener("load", () => this.handleRoute());
  }

  handleRoute() {
    const hash = window.location.hash.slice(1) || "/";
    const route = this.routes[hash] || this.routes["404"];

    if (route !== this.currentView) {
      this.renderView(route);
      this.updateActiveNav(hash);
      this.currentView = route;
    }
  }

  renderView(route) {
    const app = document.getElementById("app");
    app.innerHTML = route.template;

    // Ejecutar JavaScript específico de la vista
    if (route.script) {
      route.script();
    }
  }

  updateActiveNav(currentHash) {
    // Solo considerar enlaces del router SPA que empiezan por "#/".
    // Evita tocar anclas internas como "#app" (skip links, enlaces de sección).
    document.querySelectorAll('nav a[href^="#/"]').forEach((link) => {
      link.removeAttribute("aria-current");
    });

    // currentHash es como "/", "/sobre", ...
    // Construimos el selector completo como `#${currentHash}` para coincidir con hrefs (ej. href="#/sobre").
    const activeLink = document.querySelector(`nav a[href="#${currentHash}"]`);
    if (activeLink) {
      activeLink.setAttribute("aria-current", "page");
    }
  }
}

export default SimpleRouter;
