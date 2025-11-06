import React from "react";
import ActionButton from "../components/ActionButton";

// Component definition using React + Typescript -> React.FC | FC = Function Component
const Home: React.FC = () => {
    return (
        <div className="home-page">
            <h1>💧 Panel de Control de Riego 💧</h1>
            <p>
                Bienvenido al sistema de control de riego. Aquí puedes ver el
                estado actual y activar el riego manual.
            </p>

            <section
                style={{
                    border: "1px solid #ccc",
                    padding: "15px",
                    margin: "20px 0",
                }}
            >
                <h2>Estado Actual</h2>
                <p>Estado del Servidor: **Conectado**</p>
                <p>Humedad del Suelo: **45%**</p>
                <button
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "#4CAF50",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                    }}
                >
                    Activar Riego Manual (5 min)
                </button>
                <ActionButton title="Guardar" type="submit" />
                <ActionButton title="Cancelar" type="cancel" />
            </section>
        </div>
    );
};

export default Home;
