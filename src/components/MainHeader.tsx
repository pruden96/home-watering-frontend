import { useLocation } from "react-router-dom";
import MenuButton from "./MenuButton";

const MainHeader: React.FC = () => {
    const location = useLocation();
    const headerTitles: Record<string, string> = {
        "/": "🏠 Home",
        "/tasks": "📅 Tasks",
        "/settings": "⚙️ Settings",
    };

    const pathname = location.pathname;

    const title: string = headerTitles[pathname]
        ? headerTitles[pathname]
        : "Página Desconocida";

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
                backgroundColor: "#333333",
            }}
        >
            <div
                style={{
                    height: "100%",
                }}
            >
                <MenuButton />
            </div>
            <div
                style={{
                    display: "flex",
                    // flexGrow: "1",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                }}
            >
                <h1>{title}</h1>
            </div>
            <div
                style={{
                    width: "64px",
                    visibility: "hidden",
                }}
            ></div>
        </div>
    );
};

export default MainHeader;
