// components/layout/Footer/Footer.tsx
import { useTranslation } from '../../../hooks/useTranslation';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
    const { t } = useTranslation();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p className={styles.copyright}>
                    © {new Date().getFullYear()} Nelmer Santiago Padrón. {t('footer.rights')}
                </p>
                <div className={styles.links}>
                    <a
                        href={`https://www.linkedin.com/in/nelmer-santiago-padron/`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                    >
                        LinkedIn
                    </a>
                    <a
                        href={`https://github.com/NelmerStgo`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    );
};