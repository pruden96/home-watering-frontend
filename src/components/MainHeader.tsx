import { useLocation } from "react-router-dom";
import MenuButton from "./MenuButton";

const MainHeader: React.FC = () => {
    const location = useLocation();
    const title =
        location.pathname === "/" ? "Panel de Control 💧" : "Itinerario ⏰";
    return (
        <div
            style={{
                width: "100%",
                height: "64px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                alignContent: "center",
                justifyContent: "space-between",
                position: "sticky",
            }}
        >
            <div>
                <MenuButton />
            </div>
            <div
                style={{
                    display: "flex",
                    flexGrow: "1",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <h1>{title}</h1>
            </div>
        </div>
    );
};

export default MainHeader;
