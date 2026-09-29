# 03 — Crear componentes

La convención es una carpeta en minúscula y un archivo capitalizado con su CSS Module:

```text
src/components/mi-componente/MiComponente.tsx
src/components/mi-componente/MiComponente.module.css
```

Las props se describen con `interface` o tipos explícitos. `Input` recibe una etiqueta y un callback tipado; `Button` recibe una variante; `Card` recibe contenido, encabezado y pie mediante composición.

Ejemplo:

```tsx
<Card title="Login">
  <Input label="Email" onChange={handleChangeEmail} />
  <Button variant="contained">Entrar</Button>
</Card>
```

Para crear una vista nueva, añade su archivo en `src/pages/`, impórtala en `App.tsx` y registra un `<Route>` antes del 404.
