import Hero from "../components/home/Hero";
import CoreValues from "../components/home/CoreValues";
import JourneySteps from "../components/home/JourneySteps";
import Teasers from "../components/home/Teasers";
import CTABanner from "../components/home/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <CoreValues />
      <JourneySteps />
      <Teasers />
      <CTABanner />
    </>
  );
}
