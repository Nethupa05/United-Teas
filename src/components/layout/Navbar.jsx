import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const links = [
  { label: "Home", to: "/" },
  { label: "Tea Collection", to: "/tea-collection" },
  {
    label: "About Us",
    to: "/about",
    children: [
      { label: "Who We Are", to: "/about" },
      { label: "Our Legacy", to: "/about/legacy" },
      { label: "The Visionaries", to: "/about/visionaries" },
    ],
  },
  { label: "Global Clients", to: "/global-clients" },
  { label: "Feedback", to: "/feedback" },
  { label: "Contact Us", to: "/contact" },
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

  const solidBg = scrolled || mobileOpen;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        solidBg ? "bg-forest-dark shadow-[0_1px_0_0_rgba(172,138,70,0.35)]" : "bg-transparent"
      }`}
    >
      <div className="container-page flex items-center justify-between h-20">
        <Link to="/" className="font-display text-2xl text-ivory tracking-tight">
          United Teas
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((link) =>
            link.children ? (
              <div key={link.label} className="relative group py-8 -my-8">
                <button className="flex items-center gap-1 text-[0.95rem] text-cream/90 hover:text-gold transition-colors">
                  {link.label}
                  <ChevronDown size={14} strokeWidth={2} />
                </button>
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
                  <div className="min-w-[200px] bg-forest-dark border border-gold/25 py-2">
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
                  `relative text-[0.95rem] pb-1 transition-colors ${
                    isActive ? "text-gold" : "text-cream/90 hover:text-gold"
                  }`
                }
              >
                {link.label}
              </NavLink>
            )
          )}
        </nav>

        <button
          className="lg:hidden text-cream"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-forest-dark border-t border-gold/20 px-6 pb-6 pt-2">
          {links.map((link) =>
            link.children ? (
              <div key={link.label} className="border-b border-cream/10">
                <button
                  className="w-full flex items-center justify-between py-4 text-cream"
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
                className="block py-4 border-b border-cream/10 text-cream"
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      )}
    </header>
  );
}
