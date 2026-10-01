import { steps } from '../../data/content';
import { Reveal } from '../Reveal/Reveal';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import styles from './Steps.module.css';

export function Steps() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeading
          kicker="02 · Как записаться"
          title="Три шага до татами"
          subtitle="Понятный путь от заявки до первой тренировки — без лишней бюрократии."
          align="center"
        />
        <ol className={styles.grid}>
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={i * 0.1}>
              <li className={styles.card}>
                <span className={styles.num}>{step.num}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
