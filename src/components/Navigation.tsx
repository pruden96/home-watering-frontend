import React from "react";
import { Link } from "react-router-dom";
import { useSideMenu } from "./features/menu/sidemenu.store";

const Navigation: React.FC = () => {
    const displayMenu = useSideMenu((state) => state.displayMenu);
    return (
        <nav
            style={{
                padding: "10px",
                backgroundColor: "#f4f4f4",
                borderBottom: "1px solid #ddd",
            }}
        >
            <ul
                style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    gap: "20px",
                }}
            >
                <li>
                    <Link
                        to="/"
                        style={{
                            textDecoration: "none",
                            color: "#333",
                            fontWeight: "bold",
                        }}
                    >
                        Panel Principal
                    </Link>
                </li>
                <li>
                    <Link
                        to="/scheduled-tasks"
                        style={{
                            textDecoration: "none",
                            color: "#333",
                            fontWeight: "bold",
                        }}
                    >
                        Programación
                    </Link>
                </li>
                {/* <li>
                    <MenuButton />
                </li> */}
                <li style={{ color: "black" }}>
                    {displayMenu ? "True" : "False"}
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
