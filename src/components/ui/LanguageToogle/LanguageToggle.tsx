import { useApp } from '../../../contexts/AppContext';
import styles from './LanguageToggle.module.css';

export const LanguageToggle: React.FC = () => {
    const { language, setLanguage } = useApp();

    const toggleLanguage = () => {
        setLanguage(language === 'es' ? 'en' : 'es');
    };

    const languages = {
        es: { code: 'es', name: 'ES', flag: '🇪🇸' },
        en: { code: 'en', name: 'EN', flag: '🇺🇸' }
    };

    return (
        <button
            className={styles.languageToggle}
            onClick={toggleLanguage}
            aria-label={`Cambiar idioma a ${language === 'es' ? 'inglés' : 'español'}`}
        >
            <span className={styles.flag}>{languages[language].flag}</span>
            <span className={styles.text}>{languages[language].name}</span>
        </button>
    );
};