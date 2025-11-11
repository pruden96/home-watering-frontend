import React from "react";
import styles from "./features/cards/WateringCard.module.css";

interface ScheduleButtonProps {
    src: string;
    alt: string;
    onClick: () => void;
}

const ScheduleButton: React.FC<ScheduleButtonProps> = ({
    src,
    alt,
    onClick,
}) => {
    return (
        <button className={styles.scheduleButton} onClick={onClick}>
            <img src={src} alt={alt} />
        </button>
    );
};

export default ScheduleButton;
