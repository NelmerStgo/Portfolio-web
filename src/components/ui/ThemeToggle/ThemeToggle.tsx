// components/ui/ThemeToggle/ThemeToggle.tsx
import { useEffect, useRef } from "react";
import { useApp } from "../../../contexts/AppContext";
import Lottie from "lottie-react";
import sunAnimation from "../../../assets/animations/sun.json";
import moonAnimation from "../../../assets/animations/moon.json";
import styles from "./ThemeToggle.module.css";

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useApp();

  const lottieRef = useRef<any>(null);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    // solo reproducir cuando cambie el tema
    const ref = lottieRef.current;
    if (!ref) return;

    try {
      ref.stop && ref.stop();
      if (typeof ref.setSpeed === "function") {
        ref.setSpeed(2);
      }
      ref.play && ref.play();
    } catch (err) {
      console.warn("Lottie control error:", err);
    }
  }, [theme]);

  return (
    <button
      className={styles.themeToggle}
      onClick={toggleTheme}
      aria-label={theme === "light" ? "Cambiar a tema oscuro" : "Cambiar a tema claro"}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={theme === "light" ? sunAnimation : moonAnimation}
        loop={false}
        autoplay={false}
        className={styles.lottieIcon}
      />
    </button>
  );
};
