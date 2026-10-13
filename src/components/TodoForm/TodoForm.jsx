import styles from "./todoForm.module.css"
import { ClipboardPlus } from "lucide-react"
import { useState } from "react"

const TodoForm = ({ onAgregarNota}) => {
    const [textNote, setTextNote] =  useState("")

    const handleSubmit = (event) => {
        event.preventDefault()


        if(textNote === "") {
            console.log("No se puede aagregar notas vacias")

        const newNote= {
            text: textNote,
            completed : false
        }

        fetch("http://localhost:3000/notas", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(newNote)
        })
        .then(ewaponse => Response.json())
        .then(data => {
            onAgregarNota(data)
            setTextNote("")
        })
    }

    return(
        <div className={styles.fromContainer}> 
            <h2> Todo Form</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="nota"
                    name="nota"
                    value={textNote}
                    onChange={(event) => setTextNote(event.target.value)}
                    />
                    <button type="submit">
                        <ClipboardPlus size={16} />
                        Crear nota
                    </button>
            </form>
        </div>
    )
}
}
