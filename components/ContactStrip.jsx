import Link from "next/link";
import { profile } from "@/data/profile";

// Home page close: a short invitation that leads to /contact.
export default function ContactStrip() {
  return (
    <section aria-labelledby="contact-strip-title" className="shell py-section">
      <div data-reveal="section" className="rule grid gap-6 pt-5 lg:grid-cols-12 lg:items-end lg:gap-x-5">
        <div className="lg:col-span-8">
          <h2 id="contact-strip-title" className="font-display text-step-5 font-bold">
            <span className="reveal-mask">
              <span className="reveal-mask-inner">Get in touch</span>
            </span>
          </h2>
          <p className="reveal-after mt-5 max-w-measure text-step-1 leading-lede text-muted">
            Send a message here or email me directly.
          </p>
        </div>
        <div className="reveal-after flex flex-wrap items-center gap-x-5 gap-y-3 lg:col-span-4 lg:justify-end">
          <Link href="/contact" className="btn">
            Send a message
          </Link>
          <a href={`mailto:${profile.email}`} className="link-underline">
            Email me
          </a>
        </div>
      </div>
    </section>
  );
}
