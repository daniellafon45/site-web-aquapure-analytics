const CONTACT_EMAIL = "contact@aquapure-analytics.com";

export type ContactFormPayload = {
  lastName: string;
  firstName: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  message: string;
};

function normalizeWebsite(value: string): string {
  const trimmed = value.trim();
  if (!trimmed) return "";
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
}

export async function submitContactFormClient(data: ContactFormPayload): Promise<void> {
  const website = normalizeWebsite(data.website);

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
      _replyto: data.email,
      Prénom: data.firstName,
      Nom: data.lastName,
      Courriel: data.email,
      Téléphone: data.phone.trim() || "—",
      Entreprise: data.company.trim() || "—",
      "Site web": website || "—",
      Besoin: data.message,
    }),
  });

  let result: { success?: string | boolean; message?: string } = {};
  try {
    result = (await response.json()) as { success?: string | boolean; message?: string };
  } catch {
    throw new Error("Réponse invalide du service d'envoi. Réessayez plus tard.");
  }

  if (result.success === "true" || result.success === true) {
    return;
  }

  if (result.message?.toLowerCase().includes("activation")) {
    throw new Error(
      "Le formulaire doit être activé une première fois. Consultez la boîte contact@aquapure-analytics.com et cliquez sur le lien d'activation envoyé par FormSubmit.",
    );
  }

  if (result.message) {
    throw new Error(result.message);
  }

  throw new Error("L'envoi a échoué. Réessayez plus tard.");
}
