# fs2-react-app

App base con **Vite + React + TypeScript** para FS2. Incluye ruteo con **wouter**, componentes reutilizables con CSS Modules y deploy a **GitHub Pages**.

- Demo: https://nanoodev.github.io/proyecto-react-fs2/
- Rutas: `/`, `/login`, `/register`

## Inicio rápido

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev`: servidor de desarrollo con HMR.
- `npm run build`: chequeo TypeScript y build a `dist/`.
- `npm run preview`: previsualiza el build.
- `npm run lint`: ejecuta oxlint.

## Estructura

- `src/components/`: componentes reutilizables con su CSS Module.
- `src/pages/`: vistas asociadas a rutas.
- `src/App.tsx`: composición del menú y las rutas.
- `public/`: recursos estáticos.
- `docs/`: guías del proyecto.
- `.github/workflows/`: deploy a GitHub Pages.
