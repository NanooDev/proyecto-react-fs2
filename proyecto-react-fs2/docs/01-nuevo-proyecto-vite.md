# 01 — Nuevo proyecto Vite + React + TypeScript

## Crear y ejecutar

```bash
npm create vite@latest mi-app -- --template react-ts
cd mi-app
npm install
npm run dev
```

El proyecto usa los scripts `dev`, `build`, `preview` y `lint`. El build ejecuta `tsc -b` antes de generar `dist/`.

## Limpiar el template

Se conserva `main.tsx` como punto de entrada, mientras `App.tsx`, `index.css` y `App.css` se adaptan al menú, las rutas y los estilos del proyecto. Las dependencias adicionales se instalan con `npm install wouter`.
