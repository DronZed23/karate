import { LeadForm } from '../LeadForm/LeadForm';
import { Reveal } from '../Reveal/Reveal';
import styles from './Signup.module.css';

export function Signup() {
  return (
    <section className={styles.section} id="signup">
      <div className={styles.container}>
        <Reveal className={styles.copy}>
          <p className={styles.kicker}>Пробное занятие бесплатно</p>
          <h2>Готовы познакомить ребёнка с каратэ?</h2>
          <p>
            Оставьте заявку — администратор перезвонит, уточнит возраст и подберёт группу в
            удобном филиале.
          </p>
          <ul>
            <li>Без кимоно на первом занятии</li>
            <li>Три зала у метро в Москве</li>
            <li>Стиль WKF, тренеры с 1995 года</li>
          </ul>
        </Reveal>
        <Reveal delay={0.12}>
          <LeadForm />
        </Reveal>
      </div>
    </section>
  );
}
