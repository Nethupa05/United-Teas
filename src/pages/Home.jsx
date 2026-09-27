import Hero from "../components/home/Hero";
import CoreValues from "../components/home/CoreValues";
import JourneySteps from "../components/home/JourneySteps";
import Exportstory from "../components/home/Exportstory";
import Teasers from "../components/home/Teasers";
import CTABanner from "../components/home/CTABanner";
import FlagRibbon from "../components/home/FlagRibbon";
import IntroText from "../components/home/IntroText";

export default function Home() {
  return (
    <>
      <Hero />
      <IntroText />
      <Exportstory />
      <FlagRibbon />
      <JourneySteps />
      {/* <CoreValues /> */}
      <Teasers />
      {/* <CTABanner /> */}
    </>
  );
}
