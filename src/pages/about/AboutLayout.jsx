import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import AboutTabs from "../../components/about/AboutTabs";

export default function AboutLayout() {
  return (
    <>
      <section className="bg-forest-dark pt-40 pb-14">
        <div className="container-page">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-5xl text-ivory max-w-2xl"
          >
            About United Teas
          </motion.h1>
          <p className="mt-5 text-cream/75 max-w-lg text-[1.05rem] leading-relaxed">
            Twelve years exporting Pure Ceylon Tea, built on a heritage that runs a good deal longer.
          </p>
        </div>
      </section>
      <AboutTabs />
      <Outlet />
    </>
  );
}
