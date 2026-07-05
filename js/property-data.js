/**
 * TRÍPOLI — Terram Residencial / Privada Agave Azul
 * Archivo de datos de la propiedad.
 *
 * Para actualizar contenido, edita solo este archivo.
 * No es necesario tocar index.html, style.css ni main.js.
 */

const PROPERTY = {
  nombre: "Trípoli",
  desarrollo: "Terram Residencial",
  privada: "Privada Agave Azul",
  ubicacionTexto: "San Luis Potosí, S.L.P.",

  heroImagen: "assets/hero-fachada.jpg",

  precio: {
    desde: "$2,369,000",
    hasta: "$2,469,000",
    moneda: "MXN",
  },

  specs: [
    { valor: "120", unidad: "m²", etiqueta: "Terreno" },
    { valor: "140.41", unidad: "m²", etiqueta: "Construcción" },
    { valor: "3", unidad: "", etiqueta: "Recámaras" },
    { valor: "2.5", unidad: "", etiqueta: "Baños" },
  ],

  distribucion: {
    plantaBaja: {
      imagen: "assets/plantas/planta-baja.jpg",
      ambientes: [
        "Sala",
        "Comedor",
        "Cocina",
        "Hall de TV con baño completo",
        "Patio",
        "Área de lavado",
      ],
    },
    plantaAlta: {
      imagen: "assets/plantas/planta-alta.jpg",
      ambientes: [
        "Habitación principal con vestidor y baño",
        "2 habitaciones secundarias",
        "Baño completo",
      ],
    },
  },

  /**
   * GALERÍA DE FOTOS — organizada por espacio de la casa
   * ------------------------------------------------------------
   * Cada sección tiene un título (lo que ve el cliente) y su
   * propio arreglo de fotos. Para agregar una foto nueva, colócala
   * en assets/fotos/ y agrégala dentro de la sección que le
   * corresponda. Para crear una sección nueva, copia el bloque
   * { titulo: "...", fotos: [...] } y agrégalo donde quieras que
   * aparezca.
   *
   * Si una sección se queda sin fotos (arreglo vacío), simplemente
   * no se muestra.
   */
  galeria: [
    {
      titulo: "Fachada",
      fotos: [{ src: "assets/fotos/01-fachada.jpg", alt: "Fachada Trípoli" }],
    },
    {
      titulo: "Sala",
      fotos: [
        { src: "assets/fotos/02-sala.jpg", alt: "Sala" },
        { src: "assets/fotos/03-sala.jpg", alt: "Sala" },
        { src: "assets/fotos/04-sala.jpg", alt: "Sala" },
        { src: "assets/fotos/05-sala-cocina.jpg", alt: "Sala" },
      ],
    },
    {
      titulo: "Comedor",
      fotos: [
        { src: "assets/fotos/06-sala-comedor.jpg", alt: "Comedor" },
        { src: "assets/fotos/07-sala-comedor.jpg", alt: "Comedor" },
      ],
    },
    {
      titulo: "Cocina",
      fotos: [
        { src: "assets/fotos/08-cocina.jpg", alt: "Cocina" },
        { src: "assets/fotos/09-cocina.jpg", alt: "Cocina" },
      ],
    },
    {
      titulo: "Hall de TV",
      fotos: [{ src: "assets/fotos/10-hall-tv.jpg", alt: "Hall de TV" }],
    },
    {
      titulo: "Baño completo",
      fotos: [{ src: "assets/fotos/12-bano.jpg", alt: "Baño" }],
    },
    {
      titulo: "Escalera",
      fotos: [{ src: "assets/fotos/11-escalera.jpg", alt: "Escalera" }],
    },
    {
      titulo: "Recámara principal",
      fotos: [{ src: "assets/fotos/13-recamara-principal.jpg", alt: "Recámara principal" }],
    },
    {
      titulo: "Recámaras secundarias",
      fotos: [
        { src: "assets/fotos/14-recamara-secundaria.jpg", alt: "Recámara secundaria" },
        { src: "assets/fotos/15-recamara-secundaria.jpg", alt: "Recámara secundaria" },
        { src: "assets/fotos/16-recamara-secundaria.jpg", alt: "Recámara secundaria" },
      ],
    },
  ],
};
