# Emo Music Player

Una aplicación web para escuchar música con diseño oscuro y ambiente emo.

## Características

- Reproductor de música completo
- Catálogo de artistas organizados
- Diseño oscuro con tonalidades azul y negro
- Interfaz responsive
- Sin inicio de sesión requerido

## Estructura de Archivos

```
MusicWebOfficial/
├── index.html          # Página principal
├── css/
│   └── style.css       # Estilos CSS
├── js/
│   └── player.js       # Lógica del reproductor
├── images/
│   └── artists/        # Imágenes de artistas
├── artists/            # Archivos de música por artista
│   ├── arctic_monkeys/
│   ├── the_cure/
│   └── my_chemical_romance/
```

## Artistas Incluidos

- Arctic Monkeys (Indie Rock)
- The Cure (Post-Punk/Gothic Rock)  
- My Chemical Romance (Emo/Alternative Rock)

## Uso

1. Abre `index.html` en tu navegador
2. Navega entre artistas y canciones
3. Usa el reproductor para controlar la música
4. Busca artistas o canciones con el buscador

## Personalización

Para agregar nuevos artistas:

1. Crea una carpeta en `artists/nombre_artista/`
2. Agrega los archivos de música .mp3
3. Actualiza el arreglo `artists` en `js/player.js`