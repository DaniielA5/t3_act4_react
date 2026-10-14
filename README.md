#   Notas — Mini app de tareas con React

Aplicación de lista de tareas construida con **React + Vite** como práctica de los fundamentos del framework: componentes, props, estado, eventos, renderizado condicional y listas.

-  **Demo:** https://daniiela5.github.io/t3_act4_react/
-  **Repositorio:** https://github.com/DaniielA5/t3_act4_react


---

## Descripción

Notas es una mini aplicación para organizar tareas pendientes. Permite agregar, editar, completar y eliminar notas, filtrarlas según su estado y ver cuántas quedan pendientes. Las notas se guardan en el navegador con `localStorage`, por lo que no se pierden al recargar la página. No usa ninguna API ni base de datos externa: todo el manejo de datos se hace con el estado de React.

## Funcionalidades

- Agregar notas (no permite notas vacías).
- Marcar y desmarcar notas como completadas.
- Editar el texto de una nota.
- Eliminar notas.
- **Filtro** por estado: todas, pendientes o completadas.
- **Contador** de notas pendientes.
- **Persistencia** con `localStorage`: las notas se conservan al recargar la página.

## Conceptos de React aplicados

| Concepto | Dónde se usa |
|---|---|
| Componente funcional simple | `App.jsx` |
| Props | `NotaItem.jsx` recibe la nota y las acciones; `FiltroNotas.jsx` recibe el filtro activo y los totales |
| Estado (`useState`) | `TodoApp.jsx` (`notas`, `filtro`, `notaEditandoId`), `TodoForm.jsx` y `EditNoteForm.jsx` (texto del input) |
| Eventos | `onSubmit` en formularios, `onClick` en botones, `onChange` en inputs |
| Lista con `.map()` y `key` | `TodoApp.jsx` (lista de notas, `key={nota.id}`) y `FiltroNotas.jsx` (botones, `key={filtro.valor}`) |
| Renderizado condicional | Mensaje de lista vacía, botón Completar/Desmarcar, modo edición en `NotaItem` |
| `useEffect` | Guardar las notas en `localStorage` cada vez que cambian |

## Estructura del proyecto

```
src/
├── components/
│   ├── EditNoteForm/
│   │   └── EditNoteForm.jsx       // Formulario para editar una nota
│   ├── FiltroNotas/
│   │   ├── FiltroNotas.jsx        // Botones de filtro + contador
│   │   └── filtroNotas.module.css
│   ├── NotaItem/
│   │   └── NotaItem.jsx           // Muestra una nota (recibe props)
│   ├── TodoForm/
│   │   ├── TodoForm.jsx           // Formulario para agregar notas
│   │   └── todoForm.module.css
│   ├── TodoApp.jsx                // Componente principal: estado y lógica
│   └── todoApp.module.css
├── App.jsx
├── index.css
└── main.jsx
```

## Tecnologías

- [React 19](https://react.dev/)
- [Vite 8](https://vite.dev/)
- CSS Modules
- [lucide-react](https://lucide.dev/) (íconos)
- [gh-pages](https://www.npmjs.com/package/gh-pages) (despliegue)

## Cómo ejecutarlo localmente

```bash
git clone https://github.com/DaniielA5/t3_act4_react.git
cd t3_act4_react
npm install
npm run dev
```

Abrir http://localhost:5173/t3_act4_react/

## Despliegue

El proyecto se publica en GitHub Pages con:

```bash
npm run deploy
```

Este comando genera el build de producción en `dist/` y lo sube a la rama `gh-pages`. En `vite.config.js` se configuró `base: '/t3_act4_react/'` para que las rutas de los archivos coincidan con el nombre del repositorio.

---

## Cuestionario

### a) ¿Qué diferencia hay entre props y state en React?

Las props son los datos que un componente recibe de otro, normalmente de su componente "padre". Son de solo lectura: el componente que las recibe no puede modificarlas. Por otro lado, el state es la información propia del componente, que puede ir cambiando según se use el sistema, y cada vez que cambia, React vuelve a dibujar el componente.

En mi aplicación, `TodoApp` guarda la lista de notas en su state, y `NotaItem` recibe cada nota por props. Cuando presiono "Completar", `NotaItem` no modifica la nota directamente, sino que llama a la función `onAlternar` que recibió por props, y es `TodoApp` quien actualiza su state.

### b) ¿Por qué es importante usar una `key` al renderizar una lista de elementos?

La propiedad `key` es importante porque es un identificador único para cada elemento de la lista. Le ayuda a React a detectar qué elementos cambiaron, por ejemplo si se eliminaron, se agregaron o se modificaron. Así, React solo actualiza los elementos que cambiaron en lugar de volver a dibujar toda la lista, y no confunde un elemento con otro.

En mi aplicación uso `key={nota.id}`, porque el id de cada nota nunca cambia. No usé el índice del `.map()` porque, al eliminar o filtrar notas, los índices se recorren y React podría mezclar los elementos.

### c) ¿Qué hace la función `useState`? ¿Dónde la usaste en tu mini aplicación?

`useState` es un hook de React que nos permite guardar información dentro de un componente y modificarla. Devuelve dos cosas: el valor actual y una función para cambiarlo. Cuando se llama a esa función, React actualiza la interfaz y muestra los cambios.

En la mini aplicación de notas se utilizó en varias ocasiones. La principal fue para almacenar las notas, y también para saber qué nota se está editando y qué filtro está activo. Por ejemplo:

```jsx
const [notas, setNotas] = useState(cargarNotas);
```

Aquí `notas` guarda la lista y `setNotas` la actualiza. Cada vez que agrego, edito, completo o elimino una nota, se llama a `setNotas` y React vuelve a dibujar la lista con los cambios.

### d) Enlace del repositorio

https://github.com/DaniielA5/t3_act4_react

### e) Enlace del proyecto desplegado

https://daniiela5.github.io/t3_act4_react/

---

**Autor:** Daniel Juarez — [@DaniielA5](https://github.com/DaniielA5)