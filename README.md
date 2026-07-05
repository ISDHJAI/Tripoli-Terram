# Trípoli — Galería para clientes

Página de una sola propiedad (Terram Residencial · Privada Agave Azul) lista para publicarse en GitHub Pages, dentro de tu repositorio `casas-castdim`.

## Estructura

```
tripoli/
├── index.html              → la página
├── css/style.css           → estilos y animaciones
├── js/
│   ├── property-data.js    → AQUÍ editas textos, plantas y fotos
│   └── main.js             → motor de interacción (no requiere edición)
└── assets/
    ├── castdim-logo.png
    ├── castdim-piramide.png
    ├── terram-logo.png
    ├── plantas/
    │   ├── planta-baja.jpg
    │   └── planta-alta.jpg
    └── fotos/               → aquí van las fotos reales de la casa
```

## Cómo cambiar el precio

En `js/property-data.js`:

```js
precio: {
  desde: "$2,369,000",
  hasta: "$2,469,000",
  moneda: "MXN",
},
```

## Cómo agregar las fotos de la propiedad

1. Copia tus fotos dentro de `assets/fotos/` (nómbralas simple: `01-fachada.jpg`, `02-sala.jpg`, etc.).
2. Abre `js/property-data.js` y agrega una línea por foto dentro del arreglo `galeria`:

```js
galeria: [
  { src: "assets/fotos/01-fachada.jpg", alt: "Fachada Trípoli" },
  { src: "assets/fotos/02-sala.jpg",    alt: "Sala" },
],
```

3. Guarda. No necesitas tocar `index.html` ni `main.js` — la galería se genera sola, en el orden en que agregues las fotos. Mientras el arreglo esté vacío, la sección muestra un aviso de "fotos próximamente".

**Recomendación:** si las fotos vienen muy pesadas de la cámara (varios MB cada una), redúcelas a un ancho máximo de ~1600px antes de subirlas — la página carga más rápido y se ve igual de bien en celular.

## Publicar en GitHub Pages

1. Copia la carpeta `tripoli/` dentro de tu repo `casas-castdim` (junto a las otras propiedades).
2. Haz commit y push.
3. La URL quedará algo como:
   `https://<tu-usuario>.github.io/casas-castdim/tripoli/`
4. Comparte esa liga directamente con tus clientes.

## Notas de marca

- Los colores de la pirámide (gris oscuro `#767571`, gris claro `#b7b6b2`, dorado `#f7c948`) se extrajeron directamente del isotipo oficial de CASTDIM y no se modificaron.
- Tipografías: Fraunces (títulos) + Manrope (texto), igual que el resto de tus páginas de propiedades.
- No se incluyó ningún botón de WhatsApp — la página es solo galería, como pediste.
