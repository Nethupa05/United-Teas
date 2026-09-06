import PageHero from "../components/layout/PageHero";
import ContactForm from "../components/contact/ContactForm";
import ContactInfoCard from "../components/contact/ContactInfoCard";

export default function Contact() {
  return (
    <>
      <PageHero
        title="Contact Us"
        description="Reach out about trade partnerships, wholesale orders, or general enquiries."
      />

      <section className="py-20 bg-cream">
        <div className="container-page grid lg:grid-cols-[1fr_0.85fr] gap-10">
          <div className="border border-forest/12 bg-ivory p-9">
            <ContactForm />
          </div>
          <ContactInfoCard />
        </div>

        <div className="container-page mt-10">
          <div className="h-72 border border-forest/12 bg-ivory flex items-center justify-center text-muted text-sm">
            Map embed placeholder — add Google Maps or Mapbox embed here.
          </div>
        </div>
      </section>
    </>
  );
}
