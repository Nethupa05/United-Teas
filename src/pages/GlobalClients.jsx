import { motion } from "framer-motion";
import PageHero from "../components/layout/PageHero";
import { regions, clientStats, partners } from "../data/clients";

export default function GlobalClients() {
  return (
    <>
      <PageHero
        title="Global Clients"
        description="Garden fresh Ceylon tea, exported to trade partners across five continents."
      />

      <section className="py-20 bg-cream">
        <div className="container-page">
          <div className="grid sm:grid-cols-3 gap-8 pb-16 border-b border-forest/10">
            {clientStats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-4xl text-forest-dark">{stat.value}</p>
                <p className="mt-2 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {regions.map((r, i) => (
              <motion.div
                key={r.region}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <h3 className="text-xl text-forest-dark">{r.region}</h3>
                <div className="hairline w-10 my-3" />
                <ul className="space-y-1.5 text-muted text-sm">
                  {r.countries.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-forest-dark">
        <div className="container-page">
          <h2 className="text-2xl text-ivory max-w-md">Trusted by trade partners worldwide</h2>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((p) => (
              <div
                key={p}
                className="h-20 border border-cream/15 flex items-center justify-center text-cream/40 text-xs text-center px-2"
              >
                {p}
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-cream/40">Partner logos to be added.</p>
        </div>
      </section>
    </>
  );
}
