# 02 — Estructura base del proyecto

```text
src/
  main.tsx
  App.tsx
  index.css
  components/
    button/
    card/
    input/
    menu/
  pages/
    home/
    login/
    register/
public/
```

`components/` contiene piezas reutilizables sin conocimiento de rutas. `pages/` contiene las vistas asociadas a cada ruta. Cada componente visual mantiene su CSS Module junto al archivo TypeScript.

`App.tsx` compone el layout y el ruteo; `main.tsx` monta `<App />` en el elemento `#root`.
