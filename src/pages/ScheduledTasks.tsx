import React from "react";

const ScheduledTask: React.FC = () => {
    return (
        <div className="scheduled-tasks-page">
            <h1>⏰ Programación de Tareas de Riego ⏰</h1>
            <p>
                Configura los horarios y la duración del riego automático para
                cada zona.
            </p>

            <section
                style={{
                    border: "1px solid #ccc",
                    padding: "15px",
                    margin: "20px 0",
                }}
            >
                <h2>Tareas Programadas</h2>
                <ul>
                    <li>
                        **Lunes, Miércoles, Viernes:** 06:00 AM - Duración: 10
                        minutos
                    </li>
                    <li>**Zona 2 (Jardín):** Desactivada</li>
                </ul>
                <button
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "#008CBA",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                    }}
                >
                    Añadir Nueva Programación
                </button>
            </section>
        </div>
    );
};

export default ScheduledTask;
