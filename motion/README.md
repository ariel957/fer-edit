# fer-edit — motion

Proyecto Remotion para generar las animaciones de fondo del sitio (no forma parte del build del HTML estático).

## Uso

```bash
cd motion
npm install
npm run dev          # abre el Remotion Studio para previsualizar/editar
npm run build         # renderiza out/background-loop.mp4 (horizontal 1920x1080)
npm run build:webm    # versión .webm (más liviana para web)
```

Hay dos composiciones:
- `BackgroundLoop` — 1920x1080, para el fondo del hero horizontal.
- `BackgroundLoopVertical` — 1080x1920, por si se necesita un fondo vertical.

Ambas hacen un loop perfecto de 6s (180 frames a 30fps): los gradientes se mueven con funciones seno que completan un ciclo exacto, así no se nota el corte al repetir.

Una vez renderizado, subí el .mp4/.webm a `../assets/` y referencialo desde `index.html` (por ejemplo como `<video autoplay muted loop playsinline>` de fondo en `.hero-bg`).
