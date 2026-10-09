"use client";

import { useRef, useState } from "react";
import { profile, socials } from "@/data/profile";

const EMAILJS = {
  service: "service_0g0a115",
  template: "template_tgyj4gx",
  publicKey: "HGMQnDzaGpcAIG_Nu",
};

const messages = {
  sent: "Message sent. I'll reply to the email address you gave.",
  error: "Your message didn't send. Check your connection and try again, or email me directly.",
};

// `first` when it opens the /contact page.
export default function Contact({ first = false }) {
  const Heading = first ? "h1" : "h2";
  const form = useRef(null);
  const [status, setStatus] = useState("idle");
  const [copied, setCopied] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      // Loaded on demand so it stays out of the initial bundle.
      const { default: emailjs } = await import("@emailjs/browser");
      await emailjs.sendForm(EMAILJS.service, EMAILJS.template, form.current, EMAILJS.publicKey);
      form.current.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className={`shell pb-section ${first ? "pt-page" : "pt-section"}`}
    >
      <div data-reveal="section" className="rule grid gap-8 pt-5 lg:grid-cols-12 lg:gap-x-5">
        <div className="lg:col-span-6">
          <Heading id="contact-title" className="font-display text-step-5 font-bold">
            <span className="reveal-mask">
              <span className="reveal-mask-inner">Get in touch</span>
            </span>
          </Heading>
          <p className="mt-5 max-w-measure text-step-1 leading-lede text-muted">
            Send a message here or email me directly.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
            <a href={`mailto:${profile.email}`} className="contact-email font-display text-step-2 font-bold">
              {profile.email}
            </a>
            <button type="button" onClick={copyEmail} className="link-quiet min-h-7 text-step--1 font-medium">
              {copied ? "Copied" : "Copy email"}
            </button>
          </div>
          <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="link-underline">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form ref={form} onSubmit={onSubmit} className="flex flex-col gap-5 lg:col-span-5 lg:col-start-8">
          <input type="hidden" name="to_name" value={profile.name} />
          <div className="field">
            <label htmlFor="from_name">Name</label>
            <input id="from_name" name="from_name" type="text" autoComplete="name" required />
          </div>
          <div className="field">
            <label htmlFor="from_email">Email</label>
            <input id="from_email" name="from_email" type="email" autoComplete="email" required />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} required />
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <button type="submit" className="btn" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
            <p role="status" aria-live="polite" className="text-step--1 text-muted" data-status={status}>
              {messages[status] ?? ""}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
