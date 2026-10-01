import { testimonials } from '../../data/content';
import { Reveal } from '../Reveal/Reveal';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import styles from './Testimonials.module.css';

export function Testimonials() {
  return (
    <section className={styles.section} id="reviews">
      <div className={styles.container}>
        <SectionHeading
          kicker="Отзывы"
          title="Что говорят родители"
          subtitle="64 отзыва на Яндекс Картах — мы собрали несколько типичных историй."
          align="center"
        />
        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 0.1}>
              <blockquote className={styles.card}>
                <div className={styles.stars} aria-label={`Оценка ${t.rating} из 5`}>
                  {'★'.repeat(t.rating)}
                </div>
                <p>«{t.quote}»</p>
                <footer>— {t.author}</footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
