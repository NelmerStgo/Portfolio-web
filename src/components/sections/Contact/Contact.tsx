// components/sections/Contact/Contact.tsx
import { Section } from '../../ui/Section/Section';
import { useTranslation } from '../../../hooks/useTranslation';
import styles from './Contact.module.css';

export const Contact: React.FC = () => {
    const { t } = useTranslation();

    return (
        <Section id="contact" title={t('contact.title')}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.info}>
                        <p className={styles.description}>{t('contact.description')}</p>

                        <div className={styles.contactList}>
                            <div className={styles.contactItem}>
                                <span className={styles.label}>Phone:</span>
                                <span className={styles.value}>{t('contact.phone')}</span>
                            </div>

                            <div className={styles.contactItem}>
                                <span className={styles.label}>Email:</span>
                                <a href={`mailto:${t('contact.email')}`} className={styles.value}>
                                    {t('contact.email')}
                                </a>
                            </div>

                            <div className={styles.contactItem}>
                                <span className={styles.label}>Address:</span>
                                <span className={styles.value}>{t('contact.address')}</span>
                            </div>

                            <div className={styles.contactItem}>
                                <span className={styles.label}>LinkedIn:</span>
                                <a
                                    href={`https://${t('contact.linkedin')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.value}
                                >
                                    {t('contact.linkedin')}
                                </a>
                            </div>

                            <div className={styles.contactItem}>
                                <span className={styles.label}>GitHub:</span>
                                <a
                                    href={`https://github.com/${t('contact.github')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.value}
                                >
                                    {t('contact.github')}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};