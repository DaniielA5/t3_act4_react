import { useState, useEffect } from "react";
import styles from "./todoApp.module.css";
import TodoForm from "./TodoForm/TodoForm";
import NotaItem from "./NotaItem/NotaItem";
import FiltroNotas from "./FiltroNotas/FiltroNotas";

const notasIniciales = [
    { id: 1, text: "Aprender React", completed: false },
    { id: 2, text: "Hacer ejercicio", completed: true },
    { id: 3, text: "Leer un libro", completed: false },
];

// Nombre unico para no chocar con otros proyectos en tu mismo dominio de GitHub Pages
const CLAVE_STORAGE = "t3_act4_react:notas";

 const cargarNotas = () => {
    try {
        const guardadas = localStorage.getItem(CLAVE_STORAGE);
        return guardadas ? JSON.parse(guardadas) : notasIniciales;
    } catch {
        return notasIniciales;
    }
};

function TodoApp() {
    const [notas, setNotas] = useState(cargarNotas);
    const [notaEditandoId, setNotaEditandoId] = useState(null);
    const [filtro, setFiltro] = useState("todas");

     useEffect(() => {
        localStorage.setItem(CLAVE_STORAGE, JSON.stringify(notas));
    }, [notas]);

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

     const pendientes = notas.filter((nota) => !nota.completed).length;

    const notasFiltradas = notas.filter((nota) => {
        if (filtro === "pendientes") return !nota.completed;
        if (filtro === "completadas") return nota.completed;
        return true;
    });

    return (
        <>
            <h1 className={styles.titulo}>Notas</h1>
            <TodoForm onAgregarNota={agregarNota} />

            <FiltroNotas
                filtroActual={filtro}
                onCambiarFiltro={setFiltro}
                pendientes={pendientes}
                total={notas.length}
            />

            {notasFiltradas.length === 0 ? (
                <p className={styles.vacio}>
                    {notas.length === 0
                        ? "No hay notas. ¡Agrega una!"
                        : "No hay notas en esta vista."}
                </p>
            ) : (
                <ul className={styles.noteList}>
                    {notasFiltradas.map((nota) => (
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