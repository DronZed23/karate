import { contacts, navLinks } from '../../data/content';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <strong>Сюдзин Karate WKF</strong>
          <p>Спортивный клуб для детей и взрослых. Классическая школа Сётокан и дисциплина WKF.</p>
          <span>Москва · основан в 2001 году</span>
        </div>
        <div>
          <h2>Клуб</h2>
          <nav>
            {navLinks.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div>
          <h2>Связаться</h2>
          <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
          {contacts.phones.map((p) => (
            <a key={p} href={`tel:${p.replace(/\D/g, '')}`}>
              {p}
            </a>
          ))}
          <a href={contacts.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a href={contacts.telegram} target="_blank" rel="noreferrer">
            Telegram
          </a>
        </div>
      </div>
      <div className={styles.legal}>
        <p>© {new Date().getFullYear()} Сюдзин. Демо-лендинг на основе публичной информации karate-mos.ru</p>
      </div>
    </footer>
  );
}
