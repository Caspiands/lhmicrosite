import { useEffect, useRef } from "react";
import {
  applyEnquireMessageWhenReady,
  ENQUIRE_PREFILL_EVENT,
  ENQUIRE_STORAGE_KEY,
} from "../lib/enquirePrefill";

const ENKUIRE_SCRIPT_SRC = "https://app.enkuire.com/embed/v1/enkuire-embed.js";
const ENKUIRE_PUBLIC_KEY = "pk_246e8988984d5725b18ac9493cbde15c";
const ENKUIRE_CHANNEL_ID = "413";

export function InterestForm() {
  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;

    const existing = document.querySelector(
      `script[src="${ENKUIRE_SCRIPT_SRC}"][data-channel-id="${ENKUIRE_CHANNEL_ID}"]`,
    );
    if (existing) return;

    const script = document.createElement("script");
    script.src = ENKUIRE_SCRIPT_SRC;
    script.async = true;
    script.dataset.publicKey = ENKUIRE_PUBLIC_KEY;
    script.dataset.channelId = ENKUIRE_CHANNEL_ID;
    script.dataset.mount = "#enkuire-form";
    script.dataset.env = "production";
    document.body.appendChild(script);

    return () => {
      script.remove();
      mounted.current = false;
    };
  }, []);

  useEffect(() => {
    let cancelPending: (() => void) | undefined;

    const apply = (message: string) => {
      cancelPending?.();
      cancelPending = applyEnquireMessageWhenReady(message);
    };

    const onPrefill = (event: Event) => {
      const message = (event as CustomEvent<{ message?: string }>).detail
        ?.message;
      if (typeof message === "string" && message.trim()) {
        apply(message);
      }
    };

    window.addEventListener(ENQUIRE_PREFILL_EVENT, onPrefill);

    try {
      const stored = sessionStorage.getItem(ENQUIRE_STORAGE_KEY);
      if (stored) apply(stored);
    } catch {
      // ignore
    }

    return () => {
      window.removeEventListener(ENQUIRE_PREFILL_EVENT, onPrefill);
      cancelPending?.();
    };
  }, []);

  return (
    <div className="bg-white rounded-[32px] p-6 lg:p-12 border border-[var(--ink-border)] shadow-[0_20px_40px_rgba(26,26,38,0.05)]">
      <h3
        className="text-2xl lg:text-3xl mb-2"
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 900,
          color: "var(--ink-dark)",
        }}
      >
        Register Interest
      </h3>
      <p
        className="text-[var(--ink-muted)] mb-8"
        style={{ fontFamily: "var(--font-body)" }}
      >
        No payment required. We&apos;ll WhatsApp you within 24 hours.
      </p>

      <div id="enkuire-form" />

      <p className="text-center text-sm text-[var(--ink-muted)] mt-4">
        We&apos;ll WhatsApp you within 24 hours. No payment required at this
        stage.
      </p>
    </div>
  );
}
