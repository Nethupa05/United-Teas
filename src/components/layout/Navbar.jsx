import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../../../public/images/logo.png";

const links = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Our Teas", to: "/tea-collection" },
  { label: "Global Reach", to: "/global-clients" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpenMobile, setAboutOpenMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setAboutOpenMobile(false);
  }, [location.pathname]);

  // Reversed per request: solid at top, glassmorphism once scrolled.
  const headerBg =
    mobileOpen && !scrolled
      ? "bg-forest-dark"
      : scrolled
      ? "bg-forest-dark/70 backdrop-blur-xl backdrop-saturate-150 shadow-[0_1px_0_0_rgba(172,138,70,0.25)]"
      : "bg-forest-dark";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 font-jakarta transition-all duration-300 ${headerBg}`}
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-16 flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="United Teas" className="h-14 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) =>
            link.children ? (
              <div key={link.label} className="relative group py-8 -my-8">
                <button className="flex items-center gap-1 text-[0.95rem] font-medium text-cream hover:text-gold transition-colors">
                  {link.label}
                  <ChevronDown size={14} strokeWidth={2} />
                </button>
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
                  <div className="min-w-[200px] bg-forest-dark/95 backdrop-blur-md border border-gold/25 py-2 rounded-md">
                    {link.children.map((child) => (
                      <NavLink
                        key={child.to}
                        to={child.to}
                        end={child.to === "/about"}
                        className={({ isActive }) =>
                          `block px-5 py-2.5 text-sm ${
                            isActive ? "text-gold" : "text-cream/85"
                          } hover:text-gold transition-colors`
                        }
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `relative text-[0.95rem] font-medium pb-1 transition-colors ${
                    isActive ? "text-gold" : "text-cream hover:text-gold"
                  }`
                }
              >
                {link.label}
              </NavLink>
            )
          )}

          {/* Highlighted Contact Us */}
          <NavLink
            to="/contact"
            className="ml-2 px-5 py-2.5 rounded-full bg-gold text-forest-dark text-[0.9rem] font-semibold hover:bg-gold/90 transition-colors"
          >
            Contact Us
          </NavLink>
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-cream"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-forest-dark border-t border-gold/20 px-6 pb-6 pt-2">
          {links.map((link) =>
            link.children ? (
              <div key={link.label} className="border-b border-cream/10">
                <button
                  className="w-full flex items-center justify-between py-4 text-cream font-medium"
                  onClick={() => setAboutOpenMobile((v) => !v)}
                >
                  {link.label}
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${aboutOpenMobile ? "rotate-180" : ""}`}
                  />
                </button>
                {aboutOpenMobile && (
                  <div className="pb-3 pl-3 flex flex-col gap-3">
                    {link.children.map((child) => (
                      <Link key={child.to} to={child.to} className="text-cream/80 text-sm py-1">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className="block py-4 border-b border-cream/10 text-cream font-medium"
              >
                {link.label}
              </Link>
            )
          )}

          <Link
            to="/contact"
            className="mt-5 inline-block px-6 py-2.5 rounded-full bg-gold text-forest-dark text-sm font-semibold"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}