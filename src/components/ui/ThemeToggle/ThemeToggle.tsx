// components/ui/ThemeToggle/ThemeToggle.tsx
import { useApp } from "../../../contexts/AppContext";
import styles from "./ThemeToggle.module.css";

export const ThemeToggle: React.FC = () => {
    const { theme, setTheme } = useApp();

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={
                theme === "light" ? "Cambiar a tema oscuro" : "Cambiar a tema claro"
            }
        >
            <span className={styles.icon}>{theme === "light" ? "🌙" : "☀️"}</span>
            <span className={styles.text}>
                {theme === "light" ? "Oscuro" : "Claro"}
            </span>
        </button>
    );
};
