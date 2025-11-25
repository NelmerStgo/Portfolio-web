// components/layout/Header/Header.tsx
import { useState, useEffect } from 'react';
import { useApp } from '../../../contexts/AppContext';
import { ThemeToggle } from '../../ui/ThemeToggle/ThemeToggle';
import { LanguageToggle } from '../../ui/LanguageToogle/LanguageToggle';
import styles from './Header.module.css';

// Textos en diferentes idiomas
const navTexts = {
    es: {
        home: 'Inicio',
        about: 'Sobre mí',
        projects: 'Proyectos',
        contact: 'Contacto'
    },
    en: {
        home: 'Home',
        about: 'About',
        projects: 'Projects',
        contact: 'Contact'
    }
};

export const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const { language } = useApp();

    const navItems = [
        { label: navTexts[language].home, href: '#home' },
        { label: navTexts[language].about, href: '#about' },
        { label: navTexts[language].projects, href: '#projects' },
        { label: navTexts[language].contact, href: '#contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        const handleScrollSpy = () => {
            const sections = ['home', 'about', 'projects', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });

            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('scroll', handleScrollSpy);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('scroll', handleScrollSpy);
        };
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <nav className={styles.nav} aria-label="Navegación principal">
                <div className={styles.container}>
                    <a href="#home" className={styles.logo} onClick={(e) => handleNavClick(e, '#home')}>
                        MiPortfolio
                    </a>

                    <ul className={styles.navList}>
                        {navItems.map((item) => (
                            <li key={item.href} className={styles.navItem}>
                                <a
                                    href={item.href}
                                    className={`${styles.navLink} ${activeSection === item.href.substring(1) ? styles.active : ''
                                        }`}
                                    onClick={(e) => handleNavClick(e, item.href)}
                                    aria-current={activeSection === item.href.substring(1) ? 'page' : undefined}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className={styles.controls}>
                        <ThemeToggle />
                        <LanguageToggle />
                    </div>
                </div>
            </nav>
        </header>
    );
};