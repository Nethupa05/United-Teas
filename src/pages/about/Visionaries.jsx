import { visionaries } from "../../data/visionaries";
import VisionaryCard from "../../components/about/VisionaryCard";

export default function Visionaries() {
  return (
    <section className="py-20 bg-cream">
      <div className="container-page">
        <div className="max-w-xl mb-16">
          <h2 className="text-3xl text-forest-dark">The Visionaries</h2>
          <p className="mt-5 text-muted leading-relaxed">
            United Teas is led by an experienced, professional team with a strong consumer and
            customer focus — the people behind twelve years of consistent growth.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {visionaries.map((person, i) => (
            <VisionaryCard key={person.id} person={person} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
