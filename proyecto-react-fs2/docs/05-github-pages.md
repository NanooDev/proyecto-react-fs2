# 05 — Deploy en GitHub Pages

Este proyecto usa `base: '/fs2-react-app/'` en `vite.config.ts` y `<Router base={base}>` en `App.tsx`. Así Vite genera rutas correctas para GitHub Pages.

`public/.nojekyll` desactiva Jekyll. El workflow de `.github/workflows/deploy.yml` instala dependencias, ejecuta `npm run build`, copia `dist/index.html` como `dist/404.html` para soportar refresh en `/login` y `/register`, y publica el artefacto.

Antes de publicar:

```bash
npm run build
npm run preview
```

En la configuración de Pages selecciona **GitHub Actions** como fuente de despliegue.
