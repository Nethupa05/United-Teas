import PageHero from "../components/layout/PageHero";
import TestimonialCarousel from "../components/feedback/TestimonialCarousel";
import TestimonialCard from "../components/feedback/TestimonialCard";
import { testimonials } from "../data/testimonials";

export default function Feedback() {
  return (
    <>
      <PageHero
        title="Feedback"
        description="What trade partners and buyers say about working with United Teas."
      />

      <TestimonialCarousel />

      <section className="py-20 bg-cream">
        <div className="container-page grid sm:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
