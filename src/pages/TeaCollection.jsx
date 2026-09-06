import { useMemo, useState } from "react";
import PageHero from "../components/layout/PageHero";
import TeaFilterBar from "../components/tea/TeaFilterBar";
import TeaCard from "../components/tea/TeaCard";
import { teas } from "../data/teas";

export default function TeaCollection() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () => (active === "All" ? teas : teas.filter((t) => t.category === active)),
    [active]
  );

  return (
    <>
      <PageHero
        title="The Tea Collection"
        description="Black, green, white, and specialty blends — every grade handpicked and garden fresh from the hill country of Sri Lanka."
      />

      <section className="py-20 bg-cream">
        <div className="container-page">
          <TeaFilterBar active={active} onChange={setActive} />

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((tea) => (
              <TeaCard key={tea.id} tea={tea} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
