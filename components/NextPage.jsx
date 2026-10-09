import Link from "next/link";

// Closes a page with a large link to the next one, so the site reads in order.
export default function NextPage({ href, label }) {
  return (
    <nav aria-label="Next page" className="shell pb-section pt-section">
      <Link href={href} data-reveal="section" className="next-page rule grid gap-2 pt-5">
        <span className="reveal-after text-muted">Next</span>
        <span className="reveal-mask font-display text-step-5 font-bold">
          <span className="reveal-mask-inner">
            {label}
            <span aria-hidden="true" className="next-arrow">
              {" "}
              &rarr;
            </span>
          </span>
        </span>
      </Link>
    </nav>
  );
}
