export default function Nav() {
  return (
    <nav>
      <a href="#" className="nav-logo" aria-label="Northrise — home">
        {/*
          The N + axis is rendered as one integrated SVG so the axis line
          passes through the center of the N, with the orange "north star"
          dot extending above the letter. The rest of the wordmark
          ("ORTHRISE") follows as text, making the whole thing read as a
          single wordmark.
        */}
        <svg className="nav-mark" viewBox="0 0 14 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          {/* soft halo around the north-star dot */}
          <circle cx="7" cy="3" r="3.4" fill="#FF8A3D" fillOpacity="0.18"/>
          {/* north-star dot */}
          <circle cx="7" cy="3" r="1.6" fill="#FF8A3D"/>
          {/* axis line — thin, through the center of the N */}
          <line x1="7" y1="3" x2="7" y2="30" stroke="#FAFAF8" strokeWidth="0.55" strokeOpacity="0.65" strokeLinecap="round"/>
          {/* N — left vertical */}
          <line x1="1.6" y1="18" x2="1.6" y2="30" stroke="#FAFAF8" strokeWidth="1.8" strokeLinecap="square"/>
          {/* N — diagonal */}
          <line x1="1.6" y1="18" x2="12.4" y2="30" stroke="#FAFAF8" strokeWidth="1.8" strokeLinecap="square"/>
          {/* N — right vertical */}
          <line x1="12.4" y1="18" x2="12.4" y2="30" stroke="#FAFAF8" strokeWidth="1.8" strokeLinecap="square"/>
        </svg>
        <span className="nav-wordmark" aria-hidden="true">orthrise</span>
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
