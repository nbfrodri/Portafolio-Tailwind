import { SimpleRouter } from "./router.js";
import { views } from "./views/index.js";
import LocomotiveScroll from "locomotive-scroll";
import { gsap } from "gsap/dist/gsap";
import "./style.css";

const scroll = new LocomotiveScroll();

new SimpleRouter(views);

// Desplazamiento suave opcional para anclas en la página que no son enlaces del router
document.addEventListener("click", (e) => {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;
  const href = link.getAttribute("href");
  if (href.startsWith("#/")) return; // enlace del router
  const target = document.querySelector(href);
  if (target) {
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});
// Desplazamiento suave opcional para anclas en la página que no son enlaces del router
document.addEventListener("click", (e) => {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;
  const href = link.getAttribute("href");
  if (href.startsWith("#/")) return; // enlace del router
  const target = document.querySelector(href);
  if (target) {
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

// Función para enlazar interacciones globales
function bindInteractions(app) {
  // Guardar (loading + analytics + navegación)
  app.addEventListener("click", async (event) => {
    const guardar = event.target.closest('[data-action="guardar"]');
    if (guardar) {
      guardar.disabled = true;
      guardar.setAttribute("aria-busy", "true");
      const original = guardar.textContent;
      guardar.textContent = "Guardando...";
      try {
        await new Promise((r) => setTimeout(r, 1200)); // Simular API
        console.log("analytics: boton_guardar");
        location.hash = "#/proyectos";
      } catch (e) {
        alert("No se pudo guardar. Intenta de nuevo.");
      } finally {
        guardar.disabled = false;
        guardar.removeAttribute("aria-busy");
        guardar.textContent = original;
      }
      return;
    }

    // Favorito (toggle)
    const favorito = event.target.closest('[data-action="favorito"]');
    if (favorito) {
      favorito.classList.toggle("text-red-600");
      console.log("analytics: toggle_favorito");
      return;
    }

    // Abrir modal
    const abrirModal = event.target.closest('[data-action="abrir-modal"]');
    if (abrirModal) {
      document.getElementById("modal")?.classList.remove("hidden");
      return;
    }

    // Volver
    const volver = event.target.closest('[data-action="volver"]');
    if (volver) {
      history.back();
      return;
    }
  });

  // Enviar formulario
  app.addEventListener("submit", async (event) => {
    const form = event.target.closest('form[data-action="enviar-form"]');
    if (!form) return;
    event.preventDefault();
    const submitBtn = form.querySelector('[type="submit"]');
    submitBtn?.setAttribute("disabled", "");
    try {
      await new Promise((r) => setTimeout(r, 1000)); // Simular API
      alert("Formulario enviado");
    } finally {
      submitBtn?.removeAttribute("disabled");
    }
  });
}

// Enlaza una sola vez (delegación en #app persiste entre vistas)
document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  if (app) bindInteractions(app);
});
