"use client";

import { useState } from "react";

export default function InquiryForm({ contactEmail }) {
  const [status, setStatus] = useState("");
  const [hasError, setHasError] = useState(false);
  const recipient = encodeURIComponent(typeof contactEmail === "string" ? contactEmail.trim() : "")
    .replace(/%40/gi, "@");

  function handleSubmit(event) {
    event.preventDefault();
    if (!recipient) {
      setStatus("Inquiry email isn’t connected yet. Add your address to contactEmail in lib/site-config.js.");
      setHasError(true);
      return;
    }

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name || !email || !message) {
      setStatus("Please complete each field before preparing your inquiry.");
      setHasError(true);
      return;
    }
    const subject = `Project inquiry from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nProject details:\n${message}`;
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("Your email app should open with the inquiry ready to send.");
    setHasError(false);
  }

  return (
    <form className="inquiry-form reveal" action={`mailto:${recipient}`} method="post" encType="text/plain" onSubmit={handleSubmit}>
      <label htmlFor="inquiry-name">Your name</label>
      <input id="inquiry-name" name="name" autoComplete="name" maxLength={120} required />

      <label htmlFor="inquiry-email">Email address</label>
      <input id="inquiry-email" name="email" type="email" autoComplete="email" maxLength={254} required />

      <label htmlFor="inquiry-message">A little about the project</label>
      <textarea id="inquiry-message" name="message" rows={3} maxLength={1000} required />

      <button className="submit-link" type="submit">Prepare an inquiry <span aria-hidden="true">↗</span></button>
      <p
        className={`form-status${hasError ? " is-error" : ""}`}
        role={hasError ? "alert" : "status"}
        aria-live={hasError ? "assertive" : "polite"}
      >
        {status}
      </p>
    </form>
  );
}
