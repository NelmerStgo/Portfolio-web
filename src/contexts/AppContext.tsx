// contexts/AppContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';
type Language = 'es' | 'en';

interface AppState {
    theme: Theme;
    language: Language;
    setTheme: (theme: Theme) => void;
    setLanguage: (language: Language) => void;
}

const AppContext = createContext<AppState | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Estados con valores por defecto (tema oscuro, idioma español)
    const [theme, setTheme] = useState<Theme>('dark');
    const [language, setLanguage] = useState<Language>('es');
    const [isInitialized, setIsInitialized] = useState(false);

    // Cargar tema e idioma desde localStorage al inicializar
    useEffect(() => {
        const loadPreferences = () => {
            try {
                const savedTheme = localStorage.getItem('theme') as Theme;
                const savedLanguage = localStorage.getItem('language') as Language;

                if (savedTheme) {
                    setTheme(savedTheme);
                }
                // Si no hay tema guardado, ya tenemos 'dark' por defecto

                if (savedLanguage) {
                    setLanguage(savedLanguage);
                }
            } catch (error) {
                console.error('Error loading preferences:', error);
            } finally {
                setIsInitialized(true);
            }
        };

        loadPreferences();
    }, []);

    // Aplicar tema al documento y guardar en localStorage
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);

        if (isInitialized) {
            try {
                localStorage.setItem('theme', theme);
            } catch (error) {
                console.error('Error saving theme:', error);
            }
        }
    }, [theme, isInitialized]);

    // Guardar idioma en localStorage
    useEffect(() => {
        if (isInitialized) {
            try {
                localStorage.setItem('language', language);
            } catch (error) {
                console.error('Error saving language:', error);
            }
        }
    }, [language, isInitialized]);

    const value: AppState = {
        theme,
        language,
        setTheme,
        setLanguage,
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export const useApp = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useApp must be used within an AppProvider');
    }
    return context;
};