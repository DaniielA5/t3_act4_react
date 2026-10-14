import { useState } from "react";
import { ClipboardPlus } from "lucide-react";
import styles from "./todoForm.module.css";

const TodoForm = ({ onAgregarNota }) => {
    const [textNote, setTextNote] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const texto = textNote.trim();
        if (texto === "") {
            console.log("No se pueden agregar notas vacías");
            return;
        }

        onAgregarNota(texto);
        setTextNote("");
    };

    return (
        <div className={styles.formContainer}>
            <h2 className={styles.subtitulo}>Nueva nota</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    type="text"
                    id="nota"
                    name="nota"
                    placeholder="Escribe una nota..."
                    value={textNote}
                    onChange={(event) => setTextNote(event.target.value)}
                    className={styles.input}
                />
                <button type="submit" className={styles.boton}>
                    <ClipboardPlus size={16} />
                    Crear nota
                </button>
            </form>
        </div>
    );
};

export default TodoForm;