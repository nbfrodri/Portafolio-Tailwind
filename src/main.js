import "./style.css";
import SimpleRouter from "./router.js";
import { views } from "./views/index.js";

// Inicializar router
const router = new SimpleRouter(views);

// Opcional: Scroll suave para anclas internas SIN romper el ruteo SPA
// 1) Delegación de eventos: un solo listener captura clicks en anchors.
// 2) Solo manejamos hashes que apuntan a secciones internas (ej. #app).
// 3) Ignoramos enlaces del router que empiezan por "#/" para que el router gestione la navegación.
document.addEventListener("click", (e) => {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return; // No es un enlace con hash
  const href = link.getAttribute("href");
  if (href.startsWith("#/")) return; // enlace del router: lo gestiona el router
  const target = document.querySelector(href);
  if (target) {
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});
