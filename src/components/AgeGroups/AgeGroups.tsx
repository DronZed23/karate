import { ageGroups } from '../../data/content';
import { Reveal } from '../Reveal/Reveal';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import styles from './AgeGroups.module.css';

export function AgeGroups() {
  return (
    <section className={styles.section} id="groups">
      <div className={styles.container}>
        <SectionHeading
          kicker="03 · Программа"
          title="Группа по возрасту и задаче"
          subtitle="Нагрузка растёт постепенно: от координации и правил зала до спортивной подготовки."
        />
        <div className={styles.grid}>
          {ageGroups.map((g, i) => (
            <Reveal key={g.range} delay={i * 0.08}>
              <article className={styles.card}>
                <div className={styles.top}>
                  <h3>{g.range}</h3>
                  <span>{g.focus}</span>
                </div>
                <p>{g.text}</p>
                <div className={styles.bar} aria-hidden />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
