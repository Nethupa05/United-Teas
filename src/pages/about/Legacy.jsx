import LegacyTimeline from "../../components/about/LegacyTimeline";

export default function Legacy() {
  return (
    <section className="py-20 bg-cream">
      <div className="container-page">
        <div className="max-w-xl mb-16">
          <h2 className="text-3xl text-forest-dark">150 years of Ceylon tea</h2>
          <p className="mt-5 text-muted leading-relaxed">
            Ceylon Tea celebrates a rich and rewarding history — a colossal journey with many
            peaks and troughs, not unlike the landscape of Sri Lanka's own tea fields. We
            select only the finest amongst Ceylon teas, protecting that heritage and nurturing
            the artisanal style that makes it indisputably the best in the world.
          </p>
        </div>

        <LegacyTimeline />
      </div>
    </section>
  );
}
