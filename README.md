#  Notas — Mini app de tareas con React

Aplicación de lista de tareas construida con **React + Vite** como práctica de los fundamentos del framework: componentes, props, estado, eventos, renderizado condicional y listas.

 **Demo:** https://daniiela5.github.io/t3_act4_react/
 **Repositorio:** https://github.com/DaniielA5/t3_act4_react

---

## Descripción

<!-- 2–3 líneas con tus palabras: qué es la app y para qué sirve -->

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
│   │   └── EditNoteForm.jsx       # Formulario para editar una nota
│   ├── FiltroNotas/
│   │   ├── FiltroNotas.jsx        # Botones de filtro + contador
│   │   └── filtroNotas.module.css
│   ├── NotaItem/
│   │   └── NotaItem.jsx           # Muestra una nota (recibe props)
│   ├── TodoForm/
│   │   ├── TodoForm.jsx           # Formulario para agregar notas
│   │   └── todoForm.module.css
│   ├── TodoApp.jsx                # Componente principal: estado y lógica
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

El props son los datos se reciben de otro componente podria ser un componente "padre" y por otro lado tenemos al state  que es la informacion que el componente tiene y puede ire cambiando segun se desarrolle el sistema.

### b) ¿Por qué es importante usar una `key` al renderizar una lista de elementos?

la propiedad key es importante ya que es unvalor unico de una lista. que nos ayuda a detectar si a cmabiado algo con los elementos como si se eliminaron, agregaron o modificaron, 

### c) ¿Qué hace la función `useState`? ¿Dónde la usaste en tu mini aplicación?

el useState es un hook en react opea que nos permit e guardar y podriamos modificar la informacionq ue guarda el componente , en la mini aplciacion de notasa se utilizo ne varias ocaciones , la principal fue para almacenar la notas , elk saber que nota se esta editando .. ejemplo :  const [notas, setNotas] = useState(cargarNotas); esto para que cuiando cambie de estado reacrt actualice la interfaz y muestre los cambios 

### d) Enlace del repositorio

https://github.com/DaniielA5/t3_act4_react

### e) Enlace del proyecto desplegado

https://daniiela5.github.io/t3_act4_react/

---

**Autor:** <!-- Tu nombre completo --> — [@DaniielA5](https://github.com/DaniielA5)