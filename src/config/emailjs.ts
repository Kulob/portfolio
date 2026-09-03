/**
 * EmailJS identifiers are publishable client-side values by design, not secrets.
 * They live in env vars so a fork can point the form at its own account; the
 * literals keep the deployed site working when no env is provided.
 */
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? 'service_7efwna6';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? 'template_6x43fp4';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? 'kl9JojKSMnncYILiq';

export interface EmailJsConfig {
  readonly serviceId: string;
  readonly templateId: string;
  readonly publicKey: string;
}

export const emailJsConfig: EmailJsConfig | null =
  SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY
    ? { serviceId: SERVICE_ID, templateId: TEMPLATE_ID, publicKey: PUBLIC_KEY }
    : null;
