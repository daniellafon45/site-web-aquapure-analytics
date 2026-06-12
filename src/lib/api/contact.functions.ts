import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const CONTACT_EMAIL = "contact@aquapure-analytics.com";

const optionalField = z
  .string()
  .trim()
  .transform((value) => value || undefined)
  .optional();

function normalizeWebsite(value: string | undefined): string | undefined {
  if (!value?.trim()) return undefined;
  const trimmed = value.trim();
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
}

const contactSchema = z.object({
  lastName: z.string().trim().min(1, "Le nom est requis."),
  firstName: z.string().trim().min(1, "Le prénom est requis."),
  email: z.string().trim().email("Courriel invalide."),
  phone: optionalField,
  company: optionalField,
  website: z
    .string()
    .trim()
    .transform((value) => normalizeWebsite(value))
    .optional(),
  message: z.string().trim().min(1, "Décrivez votre besoin."),
});

async function sendViaResend(data: z.infer<typeof contactSchema>) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;

  const from =
    process.env.CONTACT_FROM_EMAIL ?? "AquaPure Analytics <noreply@aquapure-analytics.com>";

  const html = `
    <h2>Nouvelle demande de contact</h2>
    <p><strong>Nom :</strong> ${escapeHtml(data.lastName)}</p>
    <p><strong>Prénom :</strong> ${escapeHtml(data.firstName)}</p>
    <p><strong>Courriel :</strong> ${escapeHtml(data.email)}</p>
    <p><strong>Téléphone :</strong> ${escapeHtml(data.phone || "—")}</p>
    <p><strong>Entreprise :</strong> ${escapeHtml(data.company || "—")}</p>
    <p><strong>Site web :</strong> ${escapeHtml(data.website || "—")}</p>
    <p><strong>Besoin :</strong></p>
    <p>${escapeHtml(data.message).replace(/\n/g, "<br>")}</p>
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [CONTACT_EMAIL],
      reply_to: data.email,
      subject: `Demande de contact — ${data.firstName} ${data.lastName}`,
      html,
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    console.error("Resend error:", detail);
    throw new Error("Impossible d'envoyer le message pour le moment.");
  }

  return true;
}

async function sendViaFormSubmit(data: z.infer<typeof contactSchema>) {
  const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      _subject: `Demande de contact — ${data.firstName} ${data.lastName}`,
      _template: "table",
      _captcha: "false",
      Nom: data.lastName,
      Prénom: data.firstName,
      Courriel: data.email,
      Téléphone: data.phone || "—",
      Entreprise: data.company || "—",
      "Site web": data.website || "—",
      Besoin: data.message,
    }),
  });

  if (!response.ok) {
    throw new Error("Impossible d'envoyer le message pour le moment.");
  }

  const result = (await response.json()) as { success?: string | boolean };
  if (result.success !== "true" && result.success !== true) {
    throw new Error("L'envoi a échoué. Réessayez plus tard.");
  }

  return true;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export const submitContactForm = createServerFn({ method: "POST" })
  .validator(contactSchema)
  .handler(async ({ data }) => {
    const sentWithResend = await sendViaResend(data);
    if (!sentWithResend) {
      await sendViaFormSubmit(data);
    }
    return { ok: true as const };
  });
