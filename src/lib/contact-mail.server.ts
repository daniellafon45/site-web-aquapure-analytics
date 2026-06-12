import process from "node:process";

const CONTACT_EMAIL = "contact@aquapure-analytics.com";

export type ContactMailPayload = {
  lastName: string;
  firstName: string;
  email: string;
  phone?: string;
  company?: string;
  website?: string;
  message: string;
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function sendViaResend(data: ContactMailPayload): Promise<boolean> {
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

async function sendViaWeb3Forms(data: ContactMailPayload): Promise<boolean> {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) return false;

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `Demande de contact — ${data.firstName} ${data.lastName}`,
      from_name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      phone: data.phone || "—",
      company: data.company || "—",
      website: data.website || "—",
      message: data.message,
    }),
  });

  let result: { success?: boolean; message?: string } = {};
  try {
    result = (await response.json()) as { success?: boolean; message?: string };
  } catch {
    throw new Error("Réponse invalide du service d'envoi. Réessayez plus tard.");
  }

  if (result.success) return true;

  if (result.message) {
    throw new Error(result.message);
  }

  throw new Error("L'envoi a échoué. Réessayez plus tard.");
}

export async function sendContactEmail(data: ContactMailPayload): Promise<void> {
  if (await sendViaResend(data)) return;
  if (await sendViaWeb3Forms(data)) return;

  throw new Error(
    "Le service d'envoi n'est pas configuré. Écrivez-nous à contact@aquapure-analytics.com ou réessayez plus tard.",
  );
}
