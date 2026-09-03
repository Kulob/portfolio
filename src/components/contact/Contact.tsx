import emailjs from '@emailjs/browser';
import { useRef, useState, type FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelegram } from 'react-icons/bs';
import { FiPhone } from 'react-icons/fi';

import { emailJsConfig } from '../../config/emailjs';
import { CONTACTS } from '../../data/contacts';
import { Section } from '../section/Section';
import './Contact.scss';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

/** Bots fill every field they find; humans never see this one. */
const HONEYPOT_FIELD = 'company';

export const Contact = () => {
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>('idle');

  const sendEmail = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const element = form.current;
    if (!element || status === 'sending') return;

    const honeypot = new FormData(element).get(HONEYPOT_FIELD);
    if (typeof honeypot === 'string' && honeypot.length > 0) {
      setStatus('success');
      element.reset();
      return;
    }

    if (!emailJsConfig) {
      setStatus('error');
      return;
    }

    setStatus('sending');

    emailjs
      .sendForm(emailJsConfig.serviceId, emailJsConfig.templateId, element, {
        publicKey: emailJsConfig.publicKey,
      })
      .then(() => {
        setStatus('success');
        element.reset();
      })
      .catch(() => {
        setStatus('error');
      });
  };

  return (
    <Section id="contact" eyebrow={t('contact.eyebrow')} title={t('contact.title')}>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" aria-hidden />
            <h4>{t('contact.email')}</h4>
            <h5>{CONTACTS.email}</h5>
            <a href={`mailto:${CONTACTS.email}`}>{t('contact.write')}</a>
          </article>

          <article className="contact__option">
            <BsTelegram className="contact__option-icon" aria-hidden />
            <h4>{t('contact.telegram')}</h4>
            <h5>{CONTACTS.telegram}</h5>
            <a href={CONTACTS.telegramUrl} target="_blank" rel="noreferrer">
              {t('contact.openTelegram')}
            </a>
          </article>

          <article className="contact__option">
            <FiPhone className="contact__option-icon" aria-hidden />
            <h4>{t('contact.phone')}</h4>
            <h5>{CONTACTS.phone}</h5>
            <a href={CONTACTS.phoneHref}>{t('contact.call')}</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact__form" noValidate={false}>
          <input type="text" name="name" placeholder={t('contact.form.name')} required />
          <input
            type="email"
            name="email"
            placeholder={t('contact.form.email')}
            required
          />
          <textarea
            name="message"
            rows={7}
            placeholder={t('contact.form.message')}
            required
          />

          <input
            type="text"
            name={HONEYPOT_FIELD}
            className="contact__honeypot"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden
          />

          <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
            {status === 'sending' ? t('contact.form.sending') : t('contact.form.submit')}
          </button>

          {/* The form previously logged its result to the console and told the
              visitor nothing at all. */}
          <p className="contact__status" role="status" aria-live="polite">
            {status === 'success' && (
              <span className="contact__status--success">{t('contact.form.success')}</span>
            )}
            {status === 'error' && (
              <span className="contact__status--error">
                {emailJsConfig
                  ? t('contact.form.error')
                  : t('contact.form.notConfigured')}
              </span>
            )}
          </p>
        </form>
      </div>
    </Section>
  );
};
