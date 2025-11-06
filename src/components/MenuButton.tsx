import styles from "./features/menu/SideMenu.module.css";
import { useSideMenu } from "./features/menu/sidemenu.store";

const MenuButton: React.FC = () => {
    const toggleMenu = useSideMenu((state) => state.toggleMenu);
    const displayMenu = useSideMenu((state) => state.displayMenu);
    const imgSrc = [
        "./src/assets/right-arrow.png",
        "./src/assets/menu-bar.png",
    ];

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
                src={imgSrc[0]}
                alt="menu-icon"
                className={
                    displayMenu ? styles.activeImage : styles.inactiveImage
                }
                style={{
                    transform: "rotate(180deg)",
                    scale: "0.75",
                    zIndex: "1",
                }}
            />

            <img
                src={imgSrc[1]}
                alt="arrow-icon"
                className={
                    !displayMenu ? styles.activeImage : styles.inactiveImage
                }
                style={{
                    zIndex: "2",
                }}
            />
        </button>
    );
};
export default MenuButton;
