import Hero from "../components/home/Hero";
import CoreValues from "../components/home/CoreValues";
import JourneySteps from "../components/home/JourneySteps";
import Teasers from "../components/home/Teasers";
import CTABanner from "../components/home/CTABanner";
import FlagRibbon from "../components/home/FlagRibbon";

export default function Home() {
  return (
    <>
      {/* <Hero /> */}

      <CoreValues />
      <JourneySteps />
      <FlagRibbon />
      <Teasers />
      <CTABanner />
    </>
  );
}
