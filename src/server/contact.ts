import { createServerFn } from "@tanstack/react-start";
import { buildWhatsAppUrl, contactSchema } from "@/lib/contact";

/**
 * Validates contact form data on the server and returns a ready WhatsApp URL.
 * Client masks are UX only — this is the source of truth for validation.
 */
export const submitContactFn = createServerFn({ method: "POST" })
  .validator(contactSchema)
  .handler(({ data }) => {
    return {
      ok: true as const,
      whatsappUrl: buildWhatsAppUrl(data),
    };
  });
