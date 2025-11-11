import React, { useState } from "react";
import image1 from "../assets/goat.png";
import styles from "./features/buttons/IrrigationButton.module.css";

interface IrrigationProps {
    duration: number;
}

interface IrrigationBody {
    valveId: number;
    duration: number;
    status: number;
}

const IrrigationButton: React.FC<IrrigationProps> = ({ duration }) => {
    const [isFilling, setIsFilling] = useState<boolean>(false);
    const [isFull, setIsFull] = useState<boolean>(false);

    const durationSeconds = duration * 1;

    const body: IrrigationBody = {
        valveId: 1,
        duration: duration,
        status: 1,
    };

    const startIrrigation = async (): Promise<void> => {
        const response = await fetch("http://192.168.3.95:80/data", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
        if (!response.ok) {
            alert("Problem connectiing with ESP32");
            return;
        }
        const data = await response.json();
        console.log(data);
    };

    const handleClick = async () => {
        // No hacer nada si la animación ya está corriendo
        if (isFilling) return;

        // Si está lleno (isFull), un clic lo reinicia (lo vacía)
        if (isFull) {
            setIsFull(false);
        } else {
            // Si está vacío, empieza a llenar
            setIsFilling(true);
            await startIrrigation();
        }
    };

    const handleAnimationEnd = () => {
        // 5. Cuando la animación CSS termina, pasamos al estado "lleno"
        setIsFilling(false);
        setIsFull(false);
    };

    const figureStyle = {
        "--fill-duration": `${durationSeconds}s`,
    } as React.CSSProperties;

    // 4. Clases CSS dinámicas
    const figureClassName = [
        styles.figure, // Clase base
        isFilling ? styles.filling : "", // Clase mientras se llena
        isFull ? styles.full : "", // Clase cuando está lleno
    ].join(" "); // Combina las clases

    return (
        <button
            className={styles.irrigationButton}
            onClick={handleClick}
            // Deshabilitamos el botón mientras se llena para evitar clics múltiples
            disabled={isFilling}
        >
            <figure
                className={figureClassName}
                style={figureStyle}
                // Escuchamos el evento de fin de animación
                onAnimationEnd={handleAnimationEnd}
            >
                <img src={image1} alt="watering-button" />
            </figure>
            <h2>{String(duration).padStart(2, "0")} min</h2>
        </button>
    );
};

export default IrrigationButton;
