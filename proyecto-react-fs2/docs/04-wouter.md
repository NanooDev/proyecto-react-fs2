# 04 — Wouter: instalación y configuración

Wouter es el router usado en este proyecto. Expone una API pequeña con `Route`, `Switch`, `Link` y `Router`.

## Configuración

`src/App.tsx` obtiene el prefijo desde Vite para que las rutas funcionen tanto en desarrollo como en GitHub Pages:

```tsx
const base = import.meta.env.BASE_URL.replace(/\/$/, "") || "";

<Router base={base}>
  <Menu />
  <Switch>
    <Route path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route>404: No such page!</Route>
  </Switch>
</Router>
```

`Switch` renderiza la primera ruta que coincide. La última ruta sin `path` funciona como 404. Para agregar una vista, crea su componente, registra un `Route` antes del 404 y añade un `Link` al menú.
