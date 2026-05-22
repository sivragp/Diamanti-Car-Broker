/**
 * Invio moduli — soluzione ponte tramite FormSubmit.co.
 *
 * Nessun backend e nessuna chiave API: i lead arrivano via email
 * all'indirizzo configurato qui sotto.
 *
 * NOTE IMPORTANTI:
 * - Al primo invio FormSubmit manda un'email di attivazione all'indirizzo
 *   destinatario: va confermata una sola volta, altrimenti i messaggi non
 *   vengono recapitati.
 * - I file allegati NON vengono inviati con questo metodo (solo campi testo).
 * - Soluzione temporanea: in produzione va sostituita con un endpoint proprio
 *   (es. Vercel Function + Resend) per non far transitare i dati dei clienti
 *   da un servizio terzo.
 */
export const LEAD_RECIPIENT = 'sivragp@gmail.com';
export const LEAD_FORM_ENDPOINT = `https://formsubmit.co/ajax/${LEAD_RECIPIENT}`;

export async function submitLead(form: HTMLFormElement): Promise<void> {
  const payload: Record<string, string> = {};
  new FormData(form).forEach((value, key) => {
    // I File vengono ignorati: l'invio JSON non li trasporta.
    if (typeof value === 'string') payload[key] = value;
  });

  let res: Response;
  try {
    res = await fetch(LEAD_FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });
  } catch {
    throw new Error('Connessione non riuscita.');
  }

  if (!res.ok) throw new Error('Invio non riuscito.');

  const data = (await res.json().catch(() => ({}))) as { success?: string | boolean };
  if (data.success !== 'true' && data.success !== true) {
    throw new Error('Invio non riuscito.');
  }
}
