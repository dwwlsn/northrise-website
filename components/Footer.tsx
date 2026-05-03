import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-left" aria-label="Northrise">
          <Image
            src="/northrise-wordmark.svg"
            alt="Northrise"
            width={140}
            height={28}
            className="footer-logo-img"
          />
          <span className="footer-sep">—</span>
          <span className="footer-tagline">Applied AI. Built for people. Made to matter.</span>
        </div>
        <div className="footer-right">
          <a href="/#products">Products</a>
          <a href="/#about">About</a>
          <a href="/#contact">Contact</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-copy">© 2026 Northrise</span>
        <nav className="footer-legal" aria-label="Legal">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/cookies">Cookies</a>
          <a href="/responsible-ai">Responsible AI</a>
        </nav>
      </div>
    </footer>
  );
}
