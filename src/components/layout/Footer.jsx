import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

// lucide-react dropped brand glyphs — small inline marks instead.
const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" {...props}>
    <path d="M13.5 21v-7.6h2.55l.38-2.96h-2.93V8.55c0-.86.24-1.44 1.47-1.44h1.57V4.46A21 21 0 0 0 14.3 4.3c-2.07 0-3.5 1.26-3.5 3.58v2.56H8.24v2.96h2.56V21z" />
  </svg>
);
const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);
const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" {...props}>
    <path d="M4.98 3.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM3.5 9h3v11.5h-3zM9.5 9h2.87v1.57h.04c.4-.75 1.38-1.55 2.85-1.55 3.05 0 3.62 2 3.62 4.6v6.88h-3v-6.1c0-1.46-.03-3.34-2.04-3.34-2.04 0-2.35 1.6-2.35 3.24v6.2h-3z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-cream/80">
      <div className="container-page py-16 grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1.2fr] gap-12">
        <div>
          <p className="font-display text-2xl text-ivory">United Teas</p>
          <p className="mt-4 text-sm leading-relaxed max-w-sm">
            Garden fresh, Pure Ceylon Tea from the hill country of Sri Lanka — handpicked,
            traditionally crafted, and exported to trade partners across the world.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="#" aria-label="Facebook" className="text-cream/60 hover:text-gold transition-colors">
              <FacebookIcon />
            </a>
            <a href="#" aria-label="Instagram" className="text-cream/60 hover:text-gold transition-colors">
              <InstagramIcon />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-cream/60 hover:text-gold transition-colors">
              <LinkedinIcon />
            </a>
          </div>
        </div>

        <div>
          <p className="text-ivory text-sm mb-4">Explore</p>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li><Link to="/tea-collection" className="hover:text-gold transition-colors">Tea Collection</Link></li>
            <li><Link to="/about" className="hover:text-gold transition-colors">Who We Are</Link></li>
            <li><Link to="/about/legacy" className="hover:text-gold transition-colors">Our Legacy</Link></li>
            <li><Link to="/global-clients" className="hover:text-gold transition-colors">Global Clients</Link></li>
            <li><Link to="/feedback" className="hover:text-gold transition-colors">Feedback</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-ivory text-sm mb-4">Contact</p>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
              <span>4A Ohlums Pl, Colombo 8, Sri Lanka</span>
            </li>
            <li className="flex gap-3">
              <Phone size={16} className="mt-0.5 shrink-0 text-gold" />
              <span>077 734 1188</span>
            </li>
            <li className="flex gap-3">
              <Mail size={16} className="mt-0.5 shrink-0 text-gold" />
              <span>info@unitedteas.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="hairline opacity-15" />

      <div className="container-page py-6 flex flex-col md:flex-row gap-3 justify-between items-center text-xs text-cream/50">
        <p>© {new Date().getFullYear()} United Teas (Pvt) Ltd. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
