import TodoApp from "./components/TodoApp"; 
import './index.css'

// pasar Props de padre a hijo 
//  App -> TodoApp 


function App() { 
 
  return (
    <section className= "containerTodoApp">
    <TodoApp />
     </section>
  );
}

export default App;
