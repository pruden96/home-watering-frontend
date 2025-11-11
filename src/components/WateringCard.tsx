import React, { useState } from "react";
import styles from "./features/cards/WateringCard.module.css";
import { useIrrigationTimeStore } from "./features/modals/irrigationTimeModal.store";
import IrrigationButton from "./IrrigationButton";
import IrrigationTimeModal from "./IrrigationTimeModal";
import ScheduleButton from "./ScheduleButtons";

const WateringCard: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const duration = useIrrigationTimeStore((state) => state.duration);

    return (
        <>
            <article className={styles.wateringCard}>
                <div className={styles.leftContainer}>
                    <div className={styles.wateringCardValve}>
                        <img src="./src/assets/valve.png" alt="valve-icon" />
                    </div>
                    <div>
                        {/* <ScheduleButton
                            src="./src/assets/calendar.png"
                            alt="calendar-button"
                            onClick={openModal}
                        /> */}
                        <button className={styles.scheduleButton}>
                            <img
                                src="./src/assets/calendar.png"
                                alt="calendar-button"
                            />
                        </button>
                        <ScheduleButton
                            src="./src/assets/timer.png"
                            alt="timer-button"
                            onClick={openModal}
                        />
                        {/* <button className={styles.scheduleButton}>
                            <img
                                src="./src/assets/timer.png"
                                alt="timer-button"
                            />
                        </button> */}
                    </div>
                    {/* <IrrigationButton duration={0.3} /> */}
                </div>
                <div>
                    <IrrigationButton duration={duration} />
                </div>
            </article>
            <IrrigationTimeModal isOpen={isModalOpen} onClose={closeModal} />
        </>
    );
};

export default WateringCard;
