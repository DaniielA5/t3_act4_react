import TodoApp from "./components/TodoApp";

// Componente funcional simple: solo envuelve a TodoApp en un contenedor
function App() {
  return (
    <section className="containerTodoApp">
      <TodoApp />
    </section>
  );
}

export default App;