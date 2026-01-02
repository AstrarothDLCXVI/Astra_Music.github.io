# 🎵 Astra Music Player

Una aplicación web completa de streaming de música y videos AMV con diseño moderno y responsive. Escucha tu música favorita y disfruta de videos animados con música de tu playlist.

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://html.spec.whatwg.org/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)

## 🚀 Características Principales

### 🎧 **Reproductor de Música Completo**
- Control total de reproducción (play, pause, anterior, siguiente)
- Barra de progreso interactiva conSeek
- Control de volumen con slider visual
- Mostrar información de canción actual
- Duración y tiempo transcurrido en tiempo real
- Reproducción automática al finalizar canción

### 🎬 **Sección AMV (Anime Music Videos)**
- Reproductor de video integrado
- Thumbnails personalizados para cada video
- Reproducción aleatoria de videos
- Vista fullscreen optimizada
- Controles nativos de video

### 🎨 **Diseño y UX**
- **Tema Oscuro**: Gradientes azulados con fondo negro
- **Diseño Responsive**: Adaptado para todos los dispositivos
- **Animaciones Fluidas**: Transiciones suaves y hover effects
- **Interfaz Intuitiva**: Navegación simple y clara
- **Búsqueda Integrada**: Buscar artistas y canciones instantáneamente

### 📱 **Responsive Design**
- **Desktop (>1400px)**: Máximo aprovechamiento de pantalla
- **Laptops (1200-1399px)**: Balance óptimo
- **Tablets (768-1199px)**: Reorganización inteligente
- **Móvil (480-767px)**: Optimización táctil
- **Móvil Pequeño (320-479px)**: Diseño minimalista
- **Ultra Pequeño (<320px)**: Compatibilidad máxima

### 🔄 **Navegación entre Secciones**
- Header unificado entre Música y AMVs
- Navegación por pestañas con iconos
- Breadcrumb intuitivo para volver atrás
- Estados activos claramente marcados

## 📁 Estructura del Proyecto

```
Astra_Music.github.io/
├── index.html                 # Página principal de música
├── amv.html                  # Página de videos AMV
├── README.md                  # Este archivo
├── LICENSE                    # Licencia Apache 2.0
├── css/
│   └── style.css            # Estilos completos y responsive
├── js/
│   ├── player.js            # Lógica del reproductor de música
│   └── amv-player.js       # Lógica del reproductor AMV
├── images/
│   ├── artists/            # Imágenes de perfiles de artistas
│   │   ├── boywithuke.jpg
│   │   ├── connorKauffman.jpg
│   │   ├── cristianGates.jpg
│   │   ├── jakeDaniels.jpg
│   │   ├── logo.jpg
│   │   ├── SamTinnesz.jpg
│   │   ├── society_of_villains.jpg
│   │   ├── theScore.jpg
│   │   ├── unlike_pluto.jpg
│   │   └── unroyal.jpg
│   └── favicon.ico
└── artists/                # Catálogo de música
    ├── boywithuke/         # 14 canciones .wav
    ├── connor_kauffman/    # 14 canciones .wav
    ├── cristian_gates/     # 19 canciones .wav
    ├── jake_daniels/      # 3 canciones .wav
    ├── Sam_Tinnesz/       # 4 canciones .wav
    ├── Society_of_Villains/ # 2 canciones .wav
    ├── the_score/         # 7 canciones .wav
    ├── Unlike_Pluto/      # 1 canción .wav
    └── unroyal/          # 2 canciones .wav
```

## 🎵 Catálogo Musical

### **Artistas Disponibles**

| Artista | Canciones | Género | Popularidad |
|---------|-----------|----------|-------------|
| **BoyWithUke** | 14 canciones | Indie/Alternative | ⭐⭐⭐⭐⭐ |
| **Connor Kauffman** | 14 canciones | Rock/Alternative | ⭐⭐⭐⭐ |
| **Cristian Gates** | 19 canciones | Electronic/Pop | ⭐⭐⭐⭐⭐ |
| **Jake Daniels** | 3 canciones | Pop/Rock | ⭐⭐⭐ |
| **Sam Tinnesz** | 4 canciones | Electronic/Pop | ⭐⭐⭐⭐⭐ |
| **Society of Villains** | 2 canciones | Rock/Metal | ⭐⭐⭐ |
| **The Score** | 7 canciones | Pop/Rock | ⭐⭐⭐⭐⭐⭐ |
| **Unlike Pluto** | 1 canción | Electronic | ⭐⭐⭐⭐ |
| **Unroyal** | 2 canciones | Pop/Dance | ⭐⭐⭐ |

### **Total de Contenido**
- 🎵 **66 canciones** en formato WAV de alta calidad
- 🎭 **9 artistas** con perfiles personalizados
- 🎬 **10+ videos AMV** disponibles
- 📊 **Estadísticas en tiempo real** de contenido

## 🛠️ Tecnologías Utilizadas

### **Frontend**
- **HTML5**: Semántica moderna y estructura accesible
- **CSS3**: Grid Layout, Flexbox, Animaciones CSS
- **JavaScript ES6+**: Clases, Arrow Functions, Async/Await
- **Web Audio API**: Control nativo de audio

### **Características Técnicas**
- **CSS Grid**: Layouts complejos y responsive
- **Flexbox**: Alineación y distribución flexible
- **CSS Variables**: Tema consistente y mantenible
- **Media Queries**: 6 breakpoints diferentes
- **LocalStorage**: Persistencia de preferencias
- **Event Delegation**: Optimización de performance

## 🚀 Instalación y Configuración

### **Requisitos Previos**
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local para desarrollo (opcional)
- Conexión a internet para streaming de audio

## 📖 Guía de Uso

### **Música - Página Principal**

1. **Explorar Artistas**
   - Scroll vertical para ver todos los artistas
   - Click en artista para ver sus canciones

2. **Navegación de Canciones**
   - Lista de canciones con número y título
   - Click en canción para reproducir
   - Botón "Volver a Artistas" para regresar

3. **Reproductor**
   - **Play/Pause**: Botón central con icono dinámico
   - **Anterior/Siguiente**: Navegar entre canciones
   - **Barra de Progreso**: Click para saltar a posición
   - **Volumen**: Slider de 0-100 con icono dinámico

4. **Búsqueda**
   - Buscar por nombre de artista o canción
   - Filtrado instantáneo en tiempo real
   - Resaltado visual de resultados

### **Videos AMV**

1. **Explorar Videos**
   - Grid de thumbnails con información
   - Título, artista y duración visible
   - Hover effects con elevación

2. **Reproducción**
   - Click en video para reproducir en fullscreen
   - Controles nativos del navegador
   - Botón "×" para cerrar y volver al grid

3. **Reproducción Aleatoria**
   - Botón "🎲 Reproducir Aleatorio"
   - Selecciona video aleatorio del catálogo


## 📄 Licencia

Este proyecto está licenciado bajo la **Apache License 2.0**. Puedes:

✅ **Uso comercial**: Usar en proyectos comerciales  
✅ **Modificación**: Adaptar a tus necesidades  
✅ **Distribución**: Compartir con otros  
✅ **Uso privado**: Uso personal sin restricciones  
✅ **Sublicencia**: Licenciar obras derivadas  

Con las siguientes condiciones:

⚠️ **Atribución**: Mantener notice de licencia  
⚠️ **Cambio**: Indicar cambios realizados  

## 🌐 Deploy y Hosting

### **GitHub Pages** (Recomendado)
```bash
# Activado por defecto
# Disponible en: https://tu-usuario.github.io/Astra_Music.github.io/
```

### **Netlify**
```bash
# Arrastrar carpeta al deploy
# O usar CLI: netlify deploy --prod
```

### **Vercel**
```bash
# CLI: vercel --prod
# GitHub integration automática
```

### **Firebase Hosting**
```bash
firebase deploy --only hosting
```

## 🔮 Roadmap Futuro

### **Versión 2.0 - Planeado**
- 🎵 **Playlist Creation**: Crear y gestionar playlists personalizadas
- ❤️ **Favorites System**: Guardar canciones favoritas
- 🌙 **Dark/Light Mode**: Selector de tema
- 📱 **PWA Support**: Instalación como aplicación
- 🌍 **Multi-language**: Inglés, español, portugués

### **Versión 2.5 - Futuro**
- 🔄 **Synchronization**: Sync entre dispositivos
- 📊 **Analytics**: Estadísticas de uso personal
- 🎭 **Video Upload**: Permitir subir videos AMV
- 💬 **Comments System**: Comentarios en canciones

### **Versión 3.0 - Largo Plazo**
- 🤖 **AI Recommendations**: Sistema de recomendación
- 🎪 **Live Streaming**: Streaming en tiempo real
- 👥 **Social Features**: Perfiles de usuario
- 🎵 **Music Discovery**: Explorar nueva música
---

**⭐ Si te gusta el proyecto, no olvides darle una estrella en GitHub!**

**Hecho con ❤️ por la comunidad de música digital**

---

*[Última actualización: Enero 2026]*