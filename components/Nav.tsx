export default function Nav() {
  return (
    <nav>
      <a href="#" className="nav-logo">
        <svg className="nav-mark" viewBox="0 0 14 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="7" y1="5" x2="7" y2="38" stroke="#FAFAF8" strokeWidth="1" strokeOpacity="0.6" strokeLinecap="round"/>
          <line x1="3"  y1="13" x2="11" y2="13" stroke="#FAFAF8" strokeWidth="0.9" strokeOpacity="0.5" strokeLinecap="round"/>
          <line x1="4"  y1="21" x2="10" y2="21" stroke="#FAFAF8" strokeWidth="0.9" strokeOpacity="0.35" strokeLinecap="round"/>
          <line x1="4.5" y1="29" x2="9.5" y2="29" stroke="#FAFAF8" strokeWidth="0.9" strokeOpacity="0.2" strokeLinecap="round"/>
          <circle cx="7" cy="5" r="2.5" fill="#FF8A3D"/>
          <circle cx="7" cy="5" r="5"   fill="#FF8A3D" fillOpacity="0.2"/>
        </svg>
        <span className="nav-wordmark">Northrise</span>
      </a>

      <ul className="nav-links">
        <li><a href="#thesis">Platform</a></li>
        <li><a href="#model">Solutions</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#products">Resources</a></li>
        <li><a href="#contact" className="nav-cta">Request a demo</a></li>
      </ul>
    </nav>
  );
}
