import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Northrise",
  description: "Terms governing the use of northrise.ai and northrise.studio.",
};

export default function Terms() {
  return (
    <>
      <p className="section-tag">Legal</p>
      <h1>Terms of Service</h1>
      <p className="last-updated">Last updated: November 3, 2026</p>

      <p>
        These Terms govern your use of <a href="https://northrise.ai">northrise.ai</a> and{" "}
        <a href="https://northrise.studio">northrise.studio</a> (the &ldquo;Site&rdquo;),
        operated by <strong>[Northrise Holdings Inc.]</strong> (&ldquo;Northrise&rdquo;).
        Each of our products (for example, AskTev at{" "}
        <a href="https://asktev.com">asktev.com</a>) has its own Terms — these apply only to
        the Site itself.
      </p>

      <h2>Acceptance</h2>
      <p>
        By using the Site, you agree to these Terms. If you don&apos;t agree, please
        don&apos;t use the Site.
      </p>

      <h2>What the Site is</h2>
      <p>
        The Site is informational. It describes Northrise and the products we build. It does
        not itself provide an AI service. Each product operates under its own terms.
      </p>

      <h2>Intellectual property</h2>
      <p>
        All content on the Site — text, design, code, logos, brand assets — is owned by
        Northrise or our licensors and protected by copyright, trademark, and other laws.
      </p>
      <p>You may:</p>
      <ul>
        <li>Read and reference the Site for personal or research use</li>
        <li>Quote brief excerpts with attribution</li>
      </ul>
      <p>You may not:</p>
      <ul>
        <li>Copy, modify, or distribute Site content without written permission</li>
        <li>Scrape the Site at scale or use it to train AI models</li>
        <li>
          Use Northrise trademarks or logos without permission (press and media inquiries
          welcome at <a href="mailto:hello@northrise.com">hello@northrise.com</a>)
        </li>
      </ul>

      <h2>Acceptable use</h2>
      <p>Don&apos;t use the Site to:</p>
      <ul>
        <li>Break any law</li>
        <li>Infringe anyone&apos;s rights</li>
        <li>Distribute malware or attempt unauthorized access</li>
        <li>Harvest data about other visitors</li>
        <li>Misrepresent your affiliation with Northrise</li>
      </ul>
      <p>We may suspend or block access for violations.</p>

      <h2>Third-party links</h2>
      <p>
        The Site may link to other sites (for example, asktev.com). We&apos;re not
        responsible for their content or practices.
      </p>

      <h2>Disclaimers</h2>
      <p>
        The Site is provided &ldquo;as is&rdquo; and &ldquo;as available.&rdquo; We make no
        warranties about accuracy, availability, or fitness for any particular purpose. We
        don&apos;t guarantee the Site will be uninterrupted or error-free.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, Northrise is not liable for any indirect,
        incidental, special, consequential, or punitive damages arising from your use of the
        Site. Our total liability for any claim related to the Site is limited to USD $100.
      </p>

      <h2>Indemnification</h2>
      <p>
        You agree to defend and hold harmless Northrise and its team from any claim arising
        from your violation of these Terms.
      </p>

      <h2>Changes to these Terms</h2>
      <p>
        We may update these Terms. Material changes will be highlighted on the Site. Your
        continued use after a change means you accept it.
      </p>

      <h2>Governing law</h2>
      <p>
        These Terms are governed by the laws of <strong>[Jurisdiction]</strong>. Disputes
        will be resolved in the courts of [Jurisdiction] unless required otherwise by law.
      </p>

      <h2>Contact</h2>
      <ul>
        <li>Email: <a href="mailto:legal@northrise.com">legal@northrise.com</a></li>
        <li>Mail: [Northrise Holdings Inc.], [Address]</li>
      </ul>
    </>
  );
}
