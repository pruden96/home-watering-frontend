import styles from "./features/menu/SideMenu.module.css";
import { useSideMenu } from "./features/menu/sidemenu.store";

const MenuButton = () => {
    const toggleMenu = useSideMenu((state) => state.toggleMenu);

    return (
        <button
            className={styles.button}
            style={{
                width: "64px",
                height: "64px",
                margin: "0",
                padding: "0",
            }}
            onClick={toggleMenu}
        >
            <img
                src="./src/assets/menu-bar.png"
                alt="menu-icon"
                style={{
                    width: "100%",
                }}
            />
        </button>
    );
};
export default MenuButton;
