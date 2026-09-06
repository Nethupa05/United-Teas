import { MapPin, Phone, Mail, Clock } from "lucide-react";

const items = [
  { icon: MapPin, label: "Address", value: "4A Ohlums Pl, Colombo 8, Sri Lanka" },
  { icon: Phone, label: "Phone", value: "077 734 1188" },
  { icon: Mail, label: "Email", value: "info@unitedteas.com" },
  { icon: Clock, label: "Hours", value: "Mon – Fri, 9:00am – 5:30pm (GMT+5:30)" },
];

export default function ContactInfoCard() {
  return (
    <div className="bg-forest-dark p-9">
      <p className="text-gold text-sm">Get in touch</p>
      <h3 className="mt-3 text-2xl text-ivory">We'd like to hear from you</h3>
      <p className="mt-4 text-cream/65 text-sm leading-relaxed">
        Whether you're a trade partner, distributor, or exploring a new export relationship,
        our team is ready to talk.
      </p>

      <div className="mt-9 space-y-6">
        {items.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex gap-4">
            <Icon size={18} className="text-gold mt-0.5 shrink-0" />
            <div>
              <p className="text-xs text-cream/50">{label}</p>
              <p className="text-cream/90 text-sm mt-0.5">{value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
