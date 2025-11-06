import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ActionButton from "../components/ActionButton";
import styles from "../components/features/forms/Forms.module.css";
interface FormData {
    ipAddress: string;
    port: string;
}

const Settings: React.FC = () => {
    const initialFormData: FormData = {
        ipAddress: "",
        port: "",
    };

    const navigate = useNavigate();
    const [formData, setFormData] = useState<FormData>(initialFormData);

    const submitForm = () => {
        console.log("Hello World!");
        navigate("/");
    };

    const resetForm = () => {
        setFormData(initialFormData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <form>
            <fieldset
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5vh",
                    borderRadius: "20px",
                }}
            >
                <legend>ESP32 Address & Port:</legend>
                <label htmlFor="ipAddress">IP Adress: </label>
                <input
                    type="text"
                    placeholder="192.168.1.3"
                    name="ipAddress"
                    id="ipAddress"
                    value={formData.ipAddress}
                    onChange={handleChange}
                    className={styles.input}
                />

                <label htmlFor="port">PORT:</label>
                <input
                    type="text"
                    placeholder="PORT"
                    name="port"
                    id="port"
                    value={formData.port}
                    onChange={handleChange}
                    className={styles.input}
                />
            </fieldset>
            <div
                style={{
                    display: "flex",
                    paddingTop: "2vh",
                    margin: "0",
                    flexDirection: "row",
                    alignContent: "center",
                    justifyContent: "space-around",
                    gap: "10px",
                }}
            >
                <ActionButton
                    title="Submit"
                    type="submit"
                    onClick={submitForm}
                />
                <ActionButton
                    title="Cancelar"
                    type="cancel"
                    onClick={resetForm}
                />
            </div>
        </form>
    );
};

export default Settings;
