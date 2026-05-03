import Image from "next/image";

export default function Nav() {
  return (
    <nav className="site-nav">
      <a href="/" className="nav-logo" aria-label="Northrise — home">
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
        <li><a href="/#thesis">Thesis</a></li>
        <li><a href="/#model">Approach</a></li>
        <li><a href="/#products">Products</a></li>
        <li><a href="/#about">About</a></li>
      </ul>
    </nav>
  );
}
