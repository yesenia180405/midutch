# 📺 Twitch Clone — Nuxt 3

Clon de la interfaz de Twitch desarrollado con **Nuxt 3** y **Tailwind CSS**. El proyecto replica las principales secciones de la plataforma: sidebar de canales recomendados, grid de streams en directo y sección de categorías.

---

## 🚀 Tecnologías

- [Nuxt 3](https://nuxt.com/)
- [Vue 3](https://vuejs.org/) con `<script setup>`
- [Tailwind CSS](https://tailwindcss.com/)
- [Heroicons](https://heroicons.com/)
- API de [Twitch](https://dev.twitch.tv/docs/api/) _(en progreso)_

---

## 📁 Estructura de carpetas

```
├── components/
│   ├── cards/
│   │   ├── StreamCard.vue       # Tarjeta de stream en directo
│   │   ├── ChannelCard.vue      # Tarjeta de canal recomendado
│   │   └── GameCard.vue         # Tarjeta de categoría/juego
│   ├── sidebar/
│   │   └── SidebarStreamer.vue  # Sidebar con canales recomendados y colapso
│   └── ui/
│       └── ShowMore.vue         # Botón "Show more / Show less" con líneas laterales
├── composables/
│   └── useFormat.js             # Utilidades: formatViewers (2300 → 2.3K)
├── pages/
│   └── index.vue                # Página principal
├── public/
│   └── img/                     # Imágenes estáticas (avatares, streams, iconos)
└── app.vue
```

---

## ⚙️ Instalación y arranque

### 1. Clona el repositorio

```bash
git clone https://github.com/tu-usuario/twitch-clone.git
cd twitch-clone
```

### 2. Instala las dependencias

```bash
npm install
```

### 3. Arranca el servidor de desarrollo

```bash
npm run dev
```

La app estará disponible en [http://localhost:3000](http://localhost:3000)

### 4. Build para producción

```bash
npm run build
npm run preview
```

---

## 🧩 Composables

### `useFormat`

```js
const { formatViewers } = useFormat()

formatViewers(85420)  // → "85.4K"
formatViewers(312000) // → "312.0K"
formatViewers(500)    // → 500
```

---

## ✅ Funcionalidades implementadas

- [x] Sidebar colapsable con animación suave
- [x] Grid de streams en directo con Show more / Show less
- [x] Sección de categorías con imagen, viewers y tags
- [x] Formato de viewers (K)
- [x] Datos mockeados listos para conectar con la API de Twitch

## 🔜 Próximamente

- [ ] Integración con la API real de Twitch
- [ ] Autenticación con OAuth de Twitch
- [ ] Filtrado de streams duplicados entre secciones