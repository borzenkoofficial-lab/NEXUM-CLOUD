export type LeadPayload = {
  name: string;
  contact: string;
  service: string;
  budget?: string;
  deadline?: string;
  task?: string;
  source?: string;
  details?: string;
};

export async function submitLead(payload: LeadPayload): Promise<{ ok: boolean; message?: string; error?: string }> {
  try {
    const response = await fetch('/api/brief', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok || !data.ok) return { ok: false, error: data.error || 'Не удалось отправить заявку.' };
    return { ok: true, message: data.message || 'Заявка отправлена.' };
  } catch {
    return { ok: false, error: 'Сервер временно недоступен. Попробуйте ещё раз.' };
  }
}
