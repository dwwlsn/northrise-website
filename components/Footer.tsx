export default function Footer() {
  return (
    <footer>
      <div className="footer-left" aria-label="Northrise">
        <svg width="auto" height="22" viewBox="0 0 14 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="7" cy="3" r="1.4" fill="#FF8A3D" fillOpacity="0.85"/>
          <line x1="7" y1="3" x2="7" y2="30" stroke="#FAFAF8" strokeWidth="0.5" strokeOpacity="0.45" strokeLinecap="round"/>
          <line x1="1.5" y1="18" x2="1.5" y2="30" stroke="#FAFAF8" strokeWidth="1.1" strokeOpacity="0.6" strokeLinecap="square"/>
          <line x1="1.5" y1="18" x2="12.5" y2="30" stroke="#FAFAF8" strokeWidth="1.1" strokeOpacity="0.6" strokeLinecap="square"/>
          <line x1="12.5" y1="18" x2="12.5" y2="30" stroke="#FAFAF8" strokeWidth="1.1" strokeOpacity="0.6" strokeLinecap="square"/>
        </svg>
        <span className="footer-wordmark" aria-hidden="true">orthrise</span>
        <span className="footer-sep">—</span>
        <span className="footer-tagline">Applied AI. Built for people. Made to matter.</span>
      </div>
      <div className="footer-right">
        <a href="#products">Products</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <span className="footer-copy">© 2026 Northrise</span>
      </div>
    </footer>
  );
}
