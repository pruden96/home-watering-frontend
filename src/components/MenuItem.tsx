import { NavLink } from "react-router-dom";
import styles from "./features/menu/SideMenu.module.css";
import { useSideMenu } from "./features/menu/sidemenu.store";

interface MenuItemProps {
    title: string;
    path: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, path }) => {
    const setDisplay = useSideMenu((state) => state.toggleMenu);
    return (
        <li className={styles.menuItems}>
            <NavLink
                to={path}
                onClick={setDisplay}
                className={styles.menuNavLink}
                style={({ isActive }) => ({
                    color: isActive ? "black" : "wheat",
                    backgroundColor: isActive ? "wheat" : "#333333",
                })}
            >
                {title}
            </NavLink>
        </li>
    );
};

export default MenuItem;
