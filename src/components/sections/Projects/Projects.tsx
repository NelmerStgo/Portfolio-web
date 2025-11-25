// components/sections/Projects/Projects.tsx
import { Section } from '../../ui/Section/Section';
import { useTranslation } from '../../../hooks/useTranslation';
import styles from './Projects.module.css';

export const Projects: React.FC = () => {
    const { t } = useTranslation();

    return (
        <Section id="projects" title={t('projects.title')}>
            <div className={styles.projectsGrid}>
                {t('projects.items').map((project: any, index: number) => (
                    <div key={index} className={styles.projectCard}>
                        <h3 className={styles.projectTitle}>{project.title}</h3>
                        <p className={styles.projectDescription}>{project.description}</p>
                        <div className={styles.technologies}>
                            {project.technologies.map((tech: string, techIndex: number) => (
                                <span key={techIndex} className={styles.techTag}>{tech}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};