import { SquarePen, Trash } from "lucide-react";
import styles from "../todoApp.module.css";
import EditNoteForm from "../EditNoteForm/EditNoteForm";

// Recibe la nota y las acciones por props, y solo se encarga de mostrarla
const NotaItem = ({ nota, estaEditando, onAlternar, onEliminar, onEditar, onGuardar, onCancelar }) => {
    if (estaEditando) {
        return (
            <li className={styles.noteItem}>
                <EditNoteForm nota={nota} onGuardar={onGuardar} onCancelar={onCancelar} />
            </li>
        );
    }

    return (
        <li className={styles.noteItem}>
            <div className={styles.notaContenido}>
                {/* Solo el texto lleva la clase "completada"; el emoji queda aparte */}
                <span className={nota.completed ? styles.completada : ""}>
                    {nota.text}
                </span>
                <span>{nota.completed ? "✅" : "❎"}</span>
            </div>

            <div className={styles.iconsContainer}>
                <button onClick={() => onAlternar(nota.id)}>
                    {nota.completed ? "Desmarcar" : "Completar"}
                </button>
                <button onClick={() => onEditar(nota.id)} aria-label="Editar nota">
                    <SquarePen size={16} />
                </button>
                <button onClick={() => onEliminar(nota.id)} aria-label="Eliminar nota">
                    <Trash size={16} />
                </button>
            </div>
        </li>
    );
};

export default NotaItem;