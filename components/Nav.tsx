import Image from "next/image";

export default function Nav() {
  return (
    <nav>
      <a href="#" className="nav-logo" aria-label="Northrise — home">
        <Image
          src="/northrise-wordmark.svg"
          alt="Northrise"
          width={200}
          height={40}
          priority
          className="nav-logo-img"
        />
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
