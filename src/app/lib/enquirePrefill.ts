export type EnquireKind = "programme" | "event";

export const ENQUIRE_PREFILL_EVENT = "lh:enquire-prefill";
export const ENQUIRE_STORAGE_KEY = "lh-enquire-message";

export function buildEnquireMessage(name: string, kind: EnquireKind) {
  return kind === "programme"
    ? `I'm interested in the "${name}" programme.`
    : `I'm interested in the "${name}" event.`;
}

export function requestEnquirePrefill(name: string, kind: EnquireKind) {
  const message = buildEnquireMessage(name, kind);

  try {
    sessionStorage.setItem(ENQUIRE_STORAGE_KEY, message);
  } catch {
    // ignore storage failures (private mode, etc.)
  }

  window.dispatchEvent(
    new CustomEvent(ENQUIRE_PREFILL_EVENT, { detail: { message } }),
  );

  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
}

export function applyEnquireMessage(message: string): boolean {
  const field =
    document.querySelector<HTMLInputElement | HTMLTextAreaElement>(
      '#enkuire-form #enkuire-field-message, #enkuire-form [name="message"]',
    ) ??
    document.querySelector<HTMLTextAreaElement>("#enkuire-form textarea");

  if (!field) return false;

  field.value = message;
  field.dispatchEvent(new Event("input", { bubbles: true }));
  field.dispatchEvent(new Event("change", { bubbles: true }));
  return true;
}

/** Apply now, or wait briefly for the Enkuire embed to mount. */
export function applyEnquireMessageWhenReady(
  message: string,
  timeoutMs = 10000,
): () => void {
  if (applyEnquireMessage(message)) {
    try {
      sessionStorage.removeItem(ENQUIRE_STORAGE_KEY);
    } catch {
      // ignore
    }
    return () => {};
  }

  const root = document.getElementById("enkuire-form");
  if (!root) return () => {};

  const observer = new MutationObserver(() => {
    if (applyEnquireMessage(message)) {
      observer.disconnect();
      try {
        sessionStorage.removeItem(ENQUIRE_STORAGE_KEY);
      } catch {
        // ignore
      }
    }
  });

  observer.observe(root, { childList: true, subtree: true });
  const timer = window.setTimeout(() => observer.disconnect(), timeoutMs);

  return () => {
    observer.disconnect();
    window.clearTimeout(timer);
  };
}
