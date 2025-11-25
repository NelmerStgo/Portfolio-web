// components/sections/About/About.tsx
import { Section } from "../../ui/Section/Section";
import { useTranslation } from "../../../hooks/useTranslation";
import styles from "./About.module.css";

export const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section id="about" title={t("about.title")}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <p className={styles.description}>{t("about.description")}</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.column}>
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>
                {t("about.education.title")}
              </h3>
              {t("about.education.items").map((item: any, index: number) => (
                <div key={index} className={styles.educationItem}>
                  <h4 className={styles.degree}>{item.degree}</h4>
                  <p className={styles.institution}>{item.institution}</p>
                  <p className={styles.period}>{item.period}</p>
                </div>
              ))}
            </div>

            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>
                {t("about.certifications.title")}
              </h3>
              <ul className={styles.list}>
                {t("about.certifications.items").map(
                  (item: string, index: number) => (
                    <li key={index} className={styles.listItem}>
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>
                {t("about.softSkills.title")}
              </h3>
              <div className={styles.skillsGrid}>
                {t("about.softSkills.items").map(
                  (skill: string, index: number) => (
                    <span key={index} className={styles.skillTag}>
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          <div className={styles.column}>
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>{t("about.skills.title")}</h3>
              {t("about.skills.categories").map(
                (category: any, index: number) => (
                  <div key={index} className={styles.skillCategory}>
                    <h4 className={styles.categoryName}>{category.name}</h4>
                    <div className={styles.skillsList}>
                      {category.items.map(
                        (skill: string, skillIndex: number) => (
                          <span key={skillIndex} className={styles.skillItem}>
                            {skill}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                )
              )}
            </div>

            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>
                {t("about.languages.title")}
              </h3>
              <div className={styles.languagesList}>
                {t("about.languages.items").map((item: any, index: number) => (
                  <div key={index} className={styles.languageItem}>
                    <span className={styles.languageName}>{item.language}</span>
                    <span className={styles.languageLevel}>{item.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
