// components/sections/Hero/Hero.tsx
import { Section } from '../../ui/Section/Section';
import { useTranslation } from '../../../hooks/useTranslation';
import styles from './Hero.module.css';

export const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section id="home" className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          {t('hero.title')} <span className={styles.highlight}>{t('hero.name')}</span>
        </h1>
        <p className={styles.subtitle}>{t('hero.subtitle')}</p>
        <p className={styles.description}>
          {t('hero.description')}
        </p>
        <div className={styles.ctaContainer}>
          <a href="#projects" className={styles.ctaPrimary}>
            {t('hero.ctaPrimary')}
          </a>
          <a href="#contact" className={styles.ctaSecondary}>
            {t('hero.ctaSecondary')}
          </a>
        </div>
      </div>
    </Section>
  );
};