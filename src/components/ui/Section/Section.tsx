import React from "react";
import styles from "./Section.module.css";

interface SectionProps {
  id: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({
  id,
  title,
  children,
  className = '',
}) => {
  return (
    <section
      id={id}
      className={`${styles.section} ${className}`}
      aria-labelledby={title ? `${id}-title` : undefined}
    >
      <div className={styles.container}>
        {title && (
          <h2 id={`${id}-title`} className={styles.title}>
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};
