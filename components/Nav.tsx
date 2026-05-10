"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <nav className="site-nav">
      <a href="/" className="nav-logo" aria-label="Northrise — home" onClick={close}>
        <Image
          src="/northrise-wordmark.svg"
          alt="Northrise"
          width={200}
          height={40}
          priority
          className="nav-logo-img"
        />
      </a>

      <button
        type="button"
        className="nav-toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="primary-nav"
        onClick={() => setOpen(!open)}
      >
        <span className={`nav-toggle-bar ${open ? "is-open-1" : ""}`} />
        <span className={`nav-toggle-bar ${open ? "is-open-2" : ""}`} />
        <span className={`nav-toggle-bar ${open ? "is-open-3" : ""}`} />
      </button>

      <ul id="primary-nav" className={`nav-links ${open ? "nav-links-open" : ""}`}>
        <li><a href="/#thesis" onClick={close}>Thesis</a></li>
        <li><a href="/#model" onClick={close}>Approach</a></li>
        <li><a href="/#products" onClick={close}>Products</a></li>
        <li><a href="/#about" onClick={close}>About</a></li>
      </ul>
    </nav>
  );
}
