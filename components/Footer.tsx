export default function Footer() {
  return (
    <footer>
      <div className="footer-left">
        <svg width="10" height="28" viewBox="0 0 14 38" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.6 }}>
          <line x1="7" y1="5" x2="7" y2="38" stroke="#FAFAF8" strokeWidth="1" strokeOpacity="0.6" strokeLinecap="round"/>
          <line x1="3"  y1="13" x2="11" y2="13" stroke="#FAFAF8" strokeWidth="0.9" strokeOpacity="0.5" strokeLinecap="round"/>
          <line x1="4"  y1="21" x2="10" y2="21" stroke="#FAFAF8" strokeWidth="0.9" strokeOpacity="0.35" strokeLinecap="round"/>
          <line x1="4.5" y1="29" x2="9.5" y2="29" stroke="#FAFAF8" strokeWidth="0.9" strokeOpacity="0.2" strokeLinecap="round"/>
          <circle cx="7" cy="5" r="2.5" fill="#FF8A3D"/>
        </svg>
        <span className="footer-wordmark">Northrise</span>
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
