import styles from "./todoApp.module.css";
import { useState, useEffect } from 'react';
import TodoForm from "./TodoForm/TodoForm";
import {SquarePen, Trash } from "lucide-react";
import EditNoteForm from "./EditNoteForm/EditNoteForm";

function TodoApp() {
    const [notas, setNotas] = useState(notass);
    
    const [notaEditadoId, setNoteEditandoId] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch ("http://http://localhost:3000/notas")
            
                if(!response.ok){
                    throw new error(`Error http: ${response.status}`);
                }

                const data = await response.json();
                setNotas(data);
                console.log("Notas Cargadas");
            } catch (error) {
                console.log(error);
            }

        };

        fetchData();
    }, []);

    const agregarNota = (nuevaNota) =>  {
        setNotas([...notas, nuevaNota])
    }

    const eliminarNota = (id) => {
        setNotas(notas.filter(nota => nota.id !== id));
        fetch(`http://localhost:3000/notas${id}`, {
            method:"DELETE",

        })
        .then((response) =>  {
            if (!response.ok) {
                throw new Error (
                    `Error al eliminar la nota : ${response.status}`
                );
            }
            console.log("Nota eliminada correctamente");
        })
        .catch((error) => console.error(error));
    };

    const actualizarNota = (notaActualizada) => { 
        setNotas(
            notas.map((nota) => {
                nota.id === notaActualizada.id ? notaActualizada : nota ;
            })
        );
    };

    const narcarComoCompleta = async (notaId) => {
        try {
            const nota = notas.find(nota => nota.id === notaId)
            const response = await fetch(`http://localhost:30000/notas/${notaId}`, {
                method: "PATCH" ,
                headers : {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ completed: !nota.completed}),
            });
            if(!response.ok) {
                throw new Error(
                    `Error al actualizar la nota: ${response.status}`
                );
            }
const notaActualizada = await response.json()
            setNotas(notas.map(nota => nota.id === notaId ? notaActualizada : nota) )

        } catch (error) {
            console.error(error);
        }

    };

    return (
        <>
           <h1 className={styles.titulo}>Notas</h1>
           <TodoForm onAgregarNota={agregarNota}/>
           <ul className={styles.noteList}>
                {notas.map((nota) =>(
                     <li className={styles.noteItem} key={nota.id}>
                        <span>
                            {nota.text} { nota.completed ? "✅" : "❎" }
                        </span>
                        <div className={styles.iconsContainer}>
                            <button onClick={() => narcarComoCompleta(nota.id)}>
                                {nota.completed ? "Desmarcar" : "Completar"}
                            </button>
                            <SquarePen onClick={() => setNoteEditandoId(nota.id)}  size={16} />
                            <Trash onClick={() => eliminarNota(nota.id) }  size={16} />
                        </div>
                        {
                            notaEditadoId === nota.id && (
                                <EditNoteForm
                                    nota={nota}
                                    onEditarNota={actualizarNota}
                                    onCancelar={() => setNoteEditandoId(null)}
                                />
                            )
                        }
                     </li>
                ))}
           </ul>
        </>
    );
}

export default TodoApp;






// (porps) |  (propsComponente)
    // { notasApp }
    // const  { notasApp} = props
    // map = retorna un array