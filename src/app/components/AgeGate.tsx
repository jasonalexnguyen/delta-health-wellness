"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const STORAGE_KEY = "dhw_age_verified";

export default function AgeGate() {
  const [status, setStatus] = useState<"loading" | "show" | "hidden">("loading");
  const confirmRef = useRef<HTMLButtonElement>(null);
  const denyRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === "true") {
        setStatus("hidden");
        return;
      }
    } catch {}
    setStatus("show");
  }, []);

  // Auto-focus the confirm button when shown
  useEffect(() => {
    if (status === "show") {
      confirmRef.current?.focus();
    }
  }, [status]);

  // Lock body scroll while gate is visible
  useEffect(() => {
    if (status === "show") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [status]);

  // Trap focus within the modal
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key !== "Tab") return;
    const first = confirmRef.current;
    const last = denyRef.current;
    if (!first || !last) return;

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }, []);

  function handleConfirm() {
    try {
      sessionStorage.setItem(STORAGE_KEY, "true");
    } catch {}
    setStatus("hidden");
  }

  function handleDeny() {
    window.location.href = "https://www.google.com";
  }

  if (status !== "show") return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/95 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-gate-title"
      onKeyDown={handleKeyDown}
    >
      <div className="mx-4 w-full max-w-md animate-[fadeUp_0.6s_ease_both] rounded-3xl bg-ivory p-10 text-center shadow-2xl">
        {/* Brand */}
        <div className="mx-auto mb-2 h-px w-10 bg-gold" />
        <h2
          id="age-gate-title"
          className="font-display text-2xl font-light text-plum md:text-3xl"
        >
          <span className="text-sage-dark">Delta</span> Health &amp; Wellness
        </h2>
        <p className="mt-1 text-xs font-medium uppercase tracking-[0.15em] text-stone">
          Sacramento Cannabis Dispensary
        </p>

        {/* Divider */}
        <div className="mx-auto my-8 h-px w-full bg-plum/10" />

        {/* Question */}
        <p className="font-display text-xl font-light text-charcoal">
          Are you 21 or older?
        </p>
        <p className="mt-2 text-sm font-light text-stone">
          You must be of legal age to view this website.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-3">
          <button
            ref={confirmRef}
            onClick={handleConfirm}
            className="flex-1 rounded-full bg-sage-dark py-3.5 text-[13px] font-semibold uppercase tracking-[0.1em] text-ivory transition-all hover:-translate-y-0.5 hover:bg-plum hover:shadow-[0_8px_24px_rgba(68,56,80,0.15)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage-dark"
          >
            Yes, I&rsquo;m 21+
          </button>
          <button
            ref={denyRef}
            onClick={handleDeny}
            className="flex-1 rounded-full border-[1.5px] border-plum/15 bg-transparent py-3.5 text-[13px] font-medium uppercase tracking-[0.08em] text-stone transition-all hover:border-plum/30 hover:text-plum focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum"
          >
            No
          </button>
        </div>

        {/* Legal */}
        <p className="mt-6 text-[11px] font-light leading-relaxed text-stone/60">
          By entering this site, you agree that you are of legal age to consume
          cannabis in the state of California.
        </p>
      </div>
    </div>
  );
}
