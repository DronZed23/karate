import { Reveal } from '../Reveal/Reveal';
import styles from './SectionHeading.module.css';

type SectionHeadingProps = {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  theme?: 'light' | 'dark';
  id?: string;
};

export function SectionHeading({
  kicker,
  title,
  subtitle,
  align = 'left',
  theme = 'light',
  id,
}: SectionHeadingProps) {
  return (
    <header
      className={`${styles.head} ${styles[align]} ${theme === 'dark' ? styles.dark : ''}`}
      id={id}
    >
      <Reveal>
        {kicker ? <p className={styles.kicker}>{kicker}</p> : null}
        <h2 className={styles.title}>{title}</h2>
        {subtitle ? <p className={styles.sub}>{subtitle}</p> : null}
      </Reveal>
    </header>
  );
}
