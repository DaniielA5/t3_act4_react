import { useState } from "react";
import styles from "../todoApp.module.css";

const EditNoteForm = ({ nota, onGuardar, onCancelar }) => {
    const [textoEditado, setTextoEditado] = useState(nota.text);

    const handleSubmit = (e) => {
        e.preventDefault();

        const texto = textoEditado.trim();
        if (texto === "") return;

        onGuardar(nota.id, texto);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.editForm}>
            <input
                type="text"
                value={textoEditado}
                onChange={(e) => setTextoEditado(e.target.value)}
                className={styles.editInput}
                autoFocus
            />

            <button type="submit" className={styles.saveButton}>
                Guardar
            </button>

            <button type="button" onClick={onCancelar} className={styles.cancelButton}>
                Cancelar
            </button>
        </form>
    );
};

export default EditNoteForm;