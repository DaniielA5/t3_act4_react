import styles from "./filtroNotas.module.css";

const FILTROS = [
    { valor: "todas", etiqueta: "Todas" },
    { valor: "pendientes", etiqueta: "Pendientes" },
    { valor: "completadas", etiqueta: "Completadas" },
];


const FiltroNotas = ({ filtroActual, onCambiarFiltro, pendientes, total }) => {
    const mensaje =
        total > 0 && pendientes === 0
            ? "Todo completado! "
            : `${pendientes} pendiente${pendientes === 1 ? "" : "s"} de ${total}`;


    return (
        <div className={styles.filtroContainer}>
            <p className={styles.contador}>{mensaje} </p>

            <div className={styles.botones} >
                {FILTROS.map((filtro) => (
                    <button
                        key={filtro.valor}
                        type="button"
                        onClick={() => onCambiarFiltro(filtro.valor)}
                        className={filtroActual === filtro.valor ? styles.activo : "" }
                        aria-pressed={filtroActual === filtro.valor}
                    >
                        {filtro.etiqueta}
                    </button>
                ))} 


            </div>
        </div>


    );

};

export default FiltroNotas;