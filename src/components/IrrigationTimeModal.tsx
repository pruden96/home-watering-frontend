import React, { useState } from "react";
import ActionButton from "./ActionButton";
import styles from "./features/modals/IrrigationTimeModal.module.css";
import { useIrrigationTimeStore } from "./features/modals/irrigationTimeModal.store";

interface IrrigationTimeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const IrrigationTimeModal: React.FC<IrrigationTimeModalProps> = ({
    isOpen,
    onClose,
}) => {
    const setDuration = useIrrigationTimeStore((state) => state.setDuration);
    const [localDuration, setLocalDuration] = useState<string>("5");

    const handleSave = () => {
        const newDuration = parseInt(localDuration, 10);
        setDuration(newDuration);
        onClose();
        // setLocalDuration("5");
    };

    const validateDuration = (): boolean => {
        return (
            parseInt(localDuration, 10) >= 0 &&
            parseInt(localDuration, 10) < 100
        );
    };

    if (!isOpen) return null;

    return (
        <div className={styles.backdrop} onClick={onClose}>
            <section
                className={styles.irrigationTimeModal}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={styles.inputContainer}>
                    <input
                        type="number"
                        min={0}
                        max={99}
                        step={5}
                        required
                        placeholder="15"
                        name="duration"
                        value={localDuration}
                        onChange={(e) => setLocalDuration(e.target.value)}
                    />
                    <p>Minutes</p>
                </div>
                <div
                    className={styles.errorText}
                    style={{
                        visibility: validateDuration() ? "hidden" : "visible",
                    }}
                >
                    <p>Error: time should be beetween 0 and 99 minutes</p>
                </div>
                <div className={styles.buttonsContainer}>
                    <ActionButton
                        title="Save"
                        type="submit"
                        onClick={validateDuration() ? handleSave : undefined}
                        isCliackable={validateDuration()}
                    />
                    <ActionButton
                        title="Cancel"
                        type="cancel"
                        onClick={onClose}
                    />
                </div>
            </section>
        </div>
    );
};

export default IrrigationTimeModal;
