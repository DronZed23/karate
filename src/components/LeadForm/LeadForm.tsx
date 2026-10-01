import { motion } from 'framer-motion';
import { useState, type FormEvent } from 'react';
import { locations } from '../../data/content';
import styles from './LeadForm.module.css';

type LeadFormProps = {
  variant?: 'hero' | 'section';
};

export function LeadForm({ variant = 'section' }: LeadFormProps) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <motion.div
      className={`${styles.card} ${variant === 'hero' ? styles.heroCard : ''}`}
      whileHover={{ y: variant === 'hero' ? -4 : 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className={styles.cardHead}>
        <span className={styles.step}>01 · Обратный звонок</span>
        <h2 className={styles.cardTitle}>Оставьте контакты — мы перезвоним</h2>
        <p className={styles.cardSub}>
          Подберём группу по возрасту и филиалу. Пробное занятие бесплатно.
        </p>
      </div>

      {sent ? (
        <div className={styles.success} role="status">
          <span className={styles.successIcon}>✓</span>
          <p>Спасибо! Администратор свяжется с вами в ближайшее время.</p>
        </div>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.field}>
            <span>Ваше имя</span>
            <input name="name" type="text" required autoComplete="name" placeholder="Как к вам обращаться" />
          </label>
          <label className={styles.field}>
            <span>Телефон</span>
            <input
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              placeholder="+7 999 123-45-67"
            />
          </label>
          <label className={styles.field}>
            <span>Возраст ребёнка</span>
            <input name="age" type="number" min={4} max={17} placeholder="Например, 7" />
          </label>
          <label className={styles.field}>
            <span>Филиал</span>
            <select name="branch" required defaultValue="">
              <option value="" disabled>
                Выберите филиал
              </option>
              {locations.map((loc) => (
                <option key={loc.id} value={loc.id}>
                  {loc.name}
                </option>
              ))}
            </select>
          </label>
          <label className={styles.check}>
            <input type="checkbox" required />
            <span>
              Согласен на обработку персональных данных и ознакомлен с политикой конфиденциальности
            </span>
          </label>
          <button type="submit" className={styles.submit}>
            Оставить контакты
          </button>
        </form>
      )}
    </motion.div>
  );
}
