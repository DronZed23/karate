import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useState } from 'react';
import { contacts, navLinks } from '../../data/content';
import styles from './Header.module.css';

export function Header() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 24));

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.topBar}>
        <span>Москва · спортивный клуб WKF</span>
        <div className={styles.topContacts}>
          <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
          {contacts.phones.map((p) => (
            <a key={p} href={`tel:${p.replace(/\D/g, '')}`}>
              {p}
            </a>
          ))}
        </div>
      </div>

      <div className={styles.bar}>
        <a href="#" className={styles.logo} aria-label="Сюдзин — на главную">
          <span className={styles.logoMark}>道</span>
          <span className={styles.logoText}>
            Сюдзин
            <small>Karate WKF</small>
          </span>
        </a>

        <nav className={styles.nav} aria-label="Основная навигация">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <a href="#signup" className={styles.cta}>
            Записаться
          </a>
          <button
            type="button"
            className={styles.burger}
            aria-expanded={open}
            aria-label="Меню"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <motion.div
        className={styles.mobileNav}
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav aria-label="Мобильная навигация">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#signup" className={styles.mobileCta} onClick={() => setOpen(false)}>
            Бесплатное пробное занятие
          </a>
        </nav>
      </motion.div>
    </header>
  );
}
