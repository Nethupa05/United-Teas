import { useState } from "react";

const inputClasses =
  "w-full bg-transparent border-b border-forest/25 py-3 text-forest-dark placeholder:text-muted/60 focus:border-gold outline-none transition-colors";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // Frontend only — wire this up to an email/API service later.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-gold/30 bg-ivory p-8">
        <p className="text-forest-dark text-lg">Thank you — your message has been noted.</p>
        <p className="mt-2 text-muted text-sm">
          This form isn't yet connected to a live inbox. Once a backend or email service is
          wired up, messages sent here will reach the United Teas team directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid sm:grid-cols-2 gap-8">
        <div>
          <label className="text-sm text-muted" htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required className={`${inputClasses} mt-2`} placeholder="Your full name" />
        </div>
        <div>
          <label className="text-sm text-muted" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required className={`${inputClasses} mt-2`} placeholder="you@company.com" />
        </div>
      </div>

      <div>
        <label className="text-sm text-muted" htmlFor="subject">Subject</label>
        <input id="subject" name="subject" type="text" className={`${inputClasses} mt-2`} placeholder="What is this regarding?" />
      </div>

      <div>
        <label className="text-sm text-muted" htmlFor="message">Message</label>
        <textarea id="message" name="message" required rows={5} className={`${inputClasses} mt-2 resize-none`} placeholder="Tell us a little about your enquiry" />
      </div>

      <button
        type="submit"
        className="px-7 py-3 bg-forest-dark text-ivory hover:bg-forest transition-colors text-sm"
      >
        Send message
      </button>
    </form>
  );
}
