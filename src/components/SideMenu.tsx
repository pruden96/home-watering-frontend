import React from "react";
import styles from "./features/menu/SideMenu.module.css";
import { useSideMenu } from "./features/menu/sidemenu.store";
import MenuItem from "./MenuItem";

const SideMenu: React.FC = () => {
    const displayMenu = useSideMenu((state) => state.displayMenu);

    return (
        <div
            className={displayMenu ? styles.menuOpened : styles.menuClosed}
            style={{
                width: "60vw",
                height: "100%",
                padding: "0",
                margin: "0",
                position: "fixed",
                transition: "transform 300ms ease-in",
                backgroundColor: "#333333",
            }}
        >
            <ul
                style={{
                    paddingLeft: "2vw",
                    paddingTop: "2vw",
                    margin: "0",
                    listStyleType: "none",
                    fontSize: "2rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    color: "wheat",
                    gap: "2vh",
                }}
            >
                <MenuItem title="🏠 Home" path="/" />
                <MenuItem title="📅 Tasks" path="/tasks" />
                <MenuItem title="⚙️ Settings" path="/settings" />
            </ul>
        </div>
    );
};

export default SideMenu;
