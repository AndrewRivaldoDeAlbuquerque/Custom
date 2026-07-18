import { z } from "zod";
import config from "@/config.json";

export const siteConfig = config;

export const WHATSAPP_PHONE = config.contact.whatsapp;

const EMAIL_RE = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

/** Keep only digits, max 11 (BR mobile with DDD). */
export function digitsOnly(value: string, max = 11) {
  return value.replace(/\D/g, "").slice(0, max);
}

/** Brazilian phone mask: (00) 0000-0000 or (00) 00000-0000 */
export function formatPhoneBR(value: string) {
  const digits = digitsOnly(value, 11);
  if (digits.length === 0) return "";
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

/** Restrict typing to characters valid in an email address. */
export function sanitizeEmailInput(value: string) {
  return value
    .toLowerCase()
    .replace(/\s/g, "")
    .replace(/[^a-z0-9.@_+%-]/g, "")
    .slice(0, 120);
}

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Informe seu nome completo")
    .max(80, "Nome muito longo"),
  company: z.string().trim().max(100, "Nome da empresa muito longo"),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .min(1, "Informe seu e-mail")
    .max(120, "E-mail muito longo")
    .refine((v) => EMAIL_RE.test(v), "E-mail inválido. Use o formato nome@empresa.com"),
  phone: z
    .string()
    .trim()
    .min(1, "Informe seu telefone")
    .refine((v) => {
      const d = digitsOnly(v, 11);
      return d.length === 10 || d.length === 11;
    }, `Telefone inválido. Use DDD + número, ex: ${config.contact.phoneMaskPlaceholder}`),
  message: z
    .string()
    .trim()
    .min(10, "Descreva um pouco mais o seu desafio (mín. 10 caracteres)")
    .max(1000, "Mensagem muito longa"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export function buildWhatsAppMessage(data: ContactFormValues) {
  const company = data.company.trim();
  const lines = [
    config.whatsappMessages.siteIntro,
    "",
    `*Nome:* ${data.name}`,
    company ? `*Empresa:* ${company}` : null,
    `*E-mail:* ${data.email}`,
    `*Telefone:* ${formatPhoneBR(data.phone)}`,
    "",
    "*Mensagem:*",
    data.message,
  ].filter((line): line is string => line !== null);

  return lines.join("\n");
}

export function buildWhatsAppUrl(data: ContactFormValues) {
  const message = buildWhatsAppMessage(data);
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}
