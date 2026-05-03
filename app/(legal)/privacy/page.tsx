import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Northrise",
  description: "How Northrise collects, uses, and shares information about visitors to northrise.ai and northrise.studio.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <p className="section-tag">Legal</p>
      <h1>Privacy Policy</h1>
      <p className="last-updated">Last updated: November 3, 2026</p>

      <p>
        This Privacy Policy describes how <strong>[Northrise Holdings Inc.]</strong>{" "}
        (&ldquo;Northrise,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
        collects, uses, and shares information about you when you visit{" "}
        <a href="https://northrise.ai">northrise.ai</a> or{" "}
        <a href="https://northrise.studio">northrise.studio</a> (together, the
        &ldquo;Site&rdquo;). It does not cover our individual products, which have their own
        privacy policies (for example, <a href="https://asktev.com">asktev.com</a>).
      </p>

      <h2>Who we are</h2>
      <p>
        Northrise is a product studio that builds focused AI products for specific markets.
        Our registered office is <strong>[Address]</strong>. You can reach our privacy team
        at <a href="mailto:privacy@northrise.com">privacy@northrise.com</a>.
      </p>

      <h2>What we collect</h2>

      <h3>Information you give us</h3>
      <ul>
        <li>Name and email if you contact us via email or fill out a form</li>
        <li>Any other content you choose to send us</li>
      </ul>

      <h3>Information we collect automatically</h3>
      <ul>
        <li>Standard log data: IP address, browser type, pages visited, referring URL, timestamps</li>
        <li>Aggregate analytics about how the Site is used (only if analytics is enabled — see our Cookie Policy)</li>
      </ul>

      <h3>Information from third parties</h3>
      <ul>
        <li>We don&apos;t buy or sell personal data</li>
        <li>We don&apos;t enrich or aggregate data from third-party brokers</li>
      </ul>

      <h2>How we use it</h2>
      <ul>
        <li>Respond to your inquiries</li>
        <li>Improve the Site and understand which content is useful</li>
        <li>Comply with legal obligations</li>
        <li>Protect against fraud or abuse</li>
      </ul>

      <h2>How we share it</h2>
      <p>We share data only with:</p>
      <ul>
        <li>
          <strong>Service providers</strong> who help us operate the Site (Vercel for hosting,
          and others as listed in our Cookie Policy). They&apos;re bound by data protection
          agreements.
        </li>
        <li><strong>Legal authorities</strong> if required by law</li>
        <li><strong>Acquirers</strong> in the event of a sale, merger, or restructuring</li>
      </ul>
      <p>We do not sell or rent your personal data to anyone.</p>

      <h2>Your rights</h2>
      <p>Depending on where you live, you may have the right to:</p>
      <ul>
        <li>Access the personal data we hold about you</li>
        <li>Correct inaccurate data</li>
        <li>Request deletion (the &ldquo;right to be forgotten&rdquo;)</li>
        <li>Object to or restrict processing</li>
        <li>Data portability</li>
      </ul>
      <p>
        To exercise these rights, contact{" "}
        <a href="mailto:privacy@northrise.com">privacy@northrise.com</a>. We&apos;ll respond
        within 30 days.
      </p>

      <h2>Data retention</h2>
      <p>
        We keep contact records for as long as needed to respond and for a reasonable period
        afterward. Server logs are typically rotated within 90 days.
      </p>

      <h2>International transfers</h2>
      <p>
        Our infrastructure runs primarily in the United States. If you access the Site from
        outside the US, your data is transferred there. We rely on Standard Contractual
        Clauses or equivalent safeguards where required.
      </p>

      <h2>Children</h2>
      <p>
        The Site is not directed to children under 13 (or under 16 in the EU). We don&apos;t
        knowingly collect their data. Some of our products (for example, AskTev) are designed
        to be used by households that include children — those products have their own
        privacy practices that you should review separately.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy as our practices change. The &ldquo;Last updated&rdquo;
        date above reflects the most recent change. Material changes will be highlighted on
        the Site.
      </p>

      <h2>Contact</h2>
      <p>Questions or concerns about your privacy?</p>
      <ul>
        <li>Email: <a href="mailto:privacy@northrise.com">privacy@northrise.com</a></li>
        <li>Mail: [Northrise Holdings Inc.], [Address]</li>
      </ul>
    </>
  );
}
