import { useState } from "react";
import styles from "./todoApp.module.css";
import TodoForm from "./TodoForm/TodoForm";
import NotaItem from "./NotaItem/NotaItem";

 const notasIniciales = [
    { id: 1, text: "Aprender React", completed: false },
    { id: 2, text: "Hacer ejercicio", completed: true },
    { id: 3, text: "Leer un libro", completed: false },
];

function TodoApp() {
    const [notas, setNotas] = useState(notasIniciales);
    const [notaEditandoId, setNotaEditandoId] = useState(null);

    const agregarNota = (texto) => {
        const nuevaNota = {
            id: Date.now(),
            text: texto,
            completed: false,
        };
        setNotas([...notas, nuevaNota]);
    };

    const eliminarNota = (id) => {
        setNotas(notas.filter((nota) => nota.id !== id));
    };

    const actualizarNota = (id, nuevoTexto) => {
        setNotas(
            notas.map((nota) =>
                nota.id === id ? { ...nota, text: nuevoTexto } : nota
            )
        );
        setNotaEditandoId(null);
    };

    const alternarCompletada = (id) => {
        setNotas(
            notas.map((nota) =>
                nota.id === id ? { ...nota, completed: !nota.completed } : nota
            )
        );
    };

    return (
        <>
            <h1 className={styles.titulo}>Notas</h1>
            <TodoForm onAgregarNota={agregarNota} />

            {notas.length === 0 ? (
                <p className={styles.vacio}>No hay notas. ¡Agrega una!</p>
            ) : (
                <ul className={styles.noteList}>
                    {notas.map((nota) => (
                        <NotaItem
                            key={nota.id}
                            nota={nota}
                            estaEditando={notaEditandoId === nota.id}
                            onAlternar={alternarCompletada}
                            onEliminar={eliminarNota}
                            onEditar={setNotaEditandoId}
                            onGuardar={actualizarNota}
                            onCancelar={() => setNotaEditandoId(null)}
                        />
                    ))}
                </ul>
            )}
        </>
    );
}

export default TodoApp;