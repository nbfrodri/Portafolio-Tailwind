import home from "./home.js";
import sobre from "./sobre.js";
import proyectos from "./proyectos.js";
import contacto from "./contacto.js";
import tipografia from "./tipografia.js"; // Añade esto
import notFound from "./404.js";
import componentes from "./componentes.js";
import layouts from "./layouts.js";

export const views = {
  "/": home,
  "/sobre": sobre,
  "/proyectos": proyectos,
  "/contacto": contacto,
  "/tipografia": tipografia,
  "/componentes": componentes,
  "/layouts": layouts,
  404: notFound,
};
