import { SquarePen, Trash } from "lucide-react";
import styles from "../todoApp.module.css";
import EditNoteForm from "../EditNoteForm/EditNoteForm";


const NotaItem =({ nota, estaEditando, onAlternar, onEliminar, onEditar, onGuardar, onCancelar}) => {
    if (estaEditando) {
        return (
            <li className={styles.NotaItem}>
                <EditNoteForm nota ={nota} onGuardar= {onGuardar} onCancelar={onCancelar} />
            </li>
        );
    }
    return (
        <li className= {styles.noteItem}>
            <span className={nota.completed ? styles.completada : "" }>
                {nota.text} {nota.completed ? "✅" : "❎"}
            </span>

            <div className={styles.iconsContainer} >
                <button onClick={() => onAlternar(nota.id)}>
                    {nota.completed ? "Desmarcar" : "Completar"}
                </button>

                <button onClick={() => onEditar (nota.id)} aria-label="editar nota">
                    <SquarePen size={16}/>
                </button>
                <button onClick={() => onEliminar(nota.id)} aria-label="Eliminar nota ">
                    <Trash size={16} />
                </button>
            </div>
        </li>
    );
};

export default NotaItem;