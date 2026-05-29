"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navigation } from "@/lib/navigation";
import type { NavItem } from "@/lib/types";

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled]             = useState(false);
  const [mobileOpen, setMobileOpen]         = useState(false);
  const [openDropdown, setOpenDropdown]     = useState<string | null>(null);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isHome = pathname === "/";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setMobileOpen(false); setExpandedMobile(null); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);
  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpenDropdown(null); setMobileOpen(false); }
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, []);

  const enter = useCallback((label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  }, []);
  const leave = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 140);
  }, []);

  const isActive = (item: NavItem) =>
    pathname === item.href || item.children?.some(c => pathname.startsWith(c.href));

  const navClass = [
    "nav-header",
    isHome && !scrolled && !mobileOpen ? "transparent" : "solid scrolled",
  ].join(" ");

  return (
    <>
      <header className={navClass} role="banner">
        <div className="container">
          <div className="nav-inner">
            <Link href="/" className="nav-logo" aria-label="Greensteds International School — home">
              <Image
                src="/logo.png"
                alt="Greensteds International School"
                width={180} height={54}
                priority
                style={{ height: "44px", width: "auto" }}
              />
            </Link>

            {/* Desktop */}
            <nav aria-label="Main navigation">
              <ul className="nav-links">
                {navigation.map(item => (
                  <li key={item.label} className="nav-item"
                    onMouseEnter={() => item.children && enter(item.label)}
                    onMouseLeave={() => item.children && leave()}>
                    {item.children ? (
                      <>
                        <button
                          className={`nav-trigger${isActive(item) ? " active" : ""}`}
                          aria-expanded={openDropdown === item.label}
                          aria-haspopup="true"
                        >
                          {item.label}
                          <svg className={`nav-chevron${openDropdown === item.label ? " open" : ""}`}
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {openDropdown === item.label && (
                          <div className="nav-dropdown" role="menu">
                            {item.children.map(child => (
                              <Link key={child.href} href={child.href} role="menuitem"
                                className={`nav-dropdown-link${pathname === child.href ? " active" : ""}`}>
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link href={item.href}
                        className={`nav-link${isActive(item) ? " active" : ""}`}>
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <Link href="/admissions/book-a-visit" className="nav-cta">
              Book a Visit
            </Link>

            <button
              className={`nav-hamburger${mobileOpen ? " open" : ""}`}
              onClick={() => setMobileOpen(v => !v)}
              aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={mobileOpen}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`nav-drawer-overlay${mobileOpen ? " open" : ""}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`nav-drawer${mobileOpen ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
        id="mobile-nav"
      >
        <div className="nav-drawer-head">
          <Image src="/logo.png" alt="Greensteds" width={150} height={45}
            style={{ height: "38px", width: "auto" }} />
          <button className="nav-drawer-close" onClick={() => setMobileOpen(false)} aria-label="Close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="nav-drawer-body" aria-label="Mobile navigation">
          {navigation.map(item => (
            <div key={item.label}>
              {item.children ? (
                <>
                  <button
                    className={`drawer-trigger${isActive(item) ? " active" : ""}`}
                    onClick={() => setExpandedMobile(expandedMobile === item.label ? null : item.label)}
                    aria-expanded={expandedMobile === item.label}
                  >
                    {item.label}
                    <svg
                      style={{ width: 14, height: 14, transition: "transform 0.2s", transform: expandedMobile === item.label ? "rotate(180deg)" : "none", flexShrink: 0 }}
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {expandedMobile === item.label && (
                    <div className="drawer-children">
                      {item.children.map(child => (
                        <Link key={child.href} href={child.href}
                          className={`drawer-child${pathname === child.href ? " active" : ""}`}>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link href={item.href}
                  className={`drawer-link${isActive(item) ? " active" : ""}`}>
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="nav-drawer-foot">
          <Link href="/admissions/book-a-visit">Book a Visit</Link>
        </div>
      </div>
    </>
  );
}
