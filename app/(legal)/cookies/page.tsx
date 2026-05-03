import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy — Northrise",
  description: "How northrise.ai and northrise.studio use cookies and similar technologies.",
};

export default function CookiePolicy() {
  return (
    <>
      <p className="section-tag">Legal</p>
      <h1>Cookie Policy</h1>
      <p className="last-updated">Last updated: November 3, 2026</p>

      <p>
        This Cookie Policy explains how <a href="https://northrise.ai">northrise.ai</a> and{" "}
        <a href="https://northrise.studio">northrise.studio</a> use cookies and similar
        technologies. It supplements our{" "}
        <a href="/privacy">Privacy Policy</a>.
      </p>

      <h2>What are cookies?</h2>
      <p>
        Cookies are small text files placed on your device when you visit a website. They
        help sites remember your preferences and understand how the site is used. Some are
        essential to the site&apos;s operation; others are optional.
      </p>

      <h2>What we use today</h2>
      <p>
        The Site is currently a static informational site. We use only the cookies strictly
        necessary for the Site to work — for example, those set by our hosting provider
        (Vercel) for security and load balancing.
      </p>
      <p>We do <strong>not</strong> currently use:</p>
      <ul>
        <li>Marketing or advertising cookies</li>
        <li>Cross-site tracking</li>
        <li>Third-party analytics</li>
      </ul>
      <p>
        If we add analytics in the future (for example, Vercel Analytics or Plausible), we
        will update this policy and present a consent banner where required by law.
      </p>

      <h2>Third-party cookies</h2>
      <p>
        Some parts of the Site embed content from external services (for example, fonts from
        Google Fonts). Those services may set their own cookies. We don&apos;t control those
        — please check their respective privacy policies if you have concerns.
      </p>

      <h2>How to control cookies</h2>
      <p>You can control cookies through your browser settings:</p>
      <ul>
        <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies</li>
        <li><strong>Safari:</strong> Preferences → Privacy</li>
        <li><strong>Firefox:</strong> Settings → Privacy &amp; Security</li>
        <li><strong>Edge:</strong> Settings → Cookies and site permissions</li>
      </ul>
      <p>Blocking essential cookies may affect some Site functionality.</p>

      <h2>Changes to this policy</h2>
      <p>
        We will update this policy if our cookie use changes. The &ldquo;Last updated&rdquo;
        date above reflects the most recent change.
      </p>

      <h2>Contact</h2>
      <ul>
        <li>Email: <a href="mailto:privacy@northrise.com">privacy@northrise.com</a></li>
        <li>Mail: [Northrise Holdings Inc.], [Address]</li>
      </ul>
    </>
  );
}
