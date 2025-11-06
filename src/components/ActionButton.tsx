import React from "react";
import styles from "./features/buttons/ActionButton.module.css";

interface ActionButtonProps {
    title: string;
    type: string;
    onClick?: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({
    title,
    type,
    onClick,
}) => {
    return (
        <button
            onClick={onClick}
            style={{
                width: "160px",
                height: "50px",
                border: `1px solid ${
                    type === "submit" ? "#1a97eb" : "#FF4A4D"
                }`,
                borderRadius: "25px",
                color: "wheat",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                fontSize: "1.5rem",
                fontWeight: "bold",
            }}
            className={`${
                type === "submit" ? styles.submitType : styles.cancelType
            } ${styles.button}`}
        >
            {title}
        </button>
    );
};

export default ActionButton;
