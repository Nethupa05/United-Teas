import { Outlet } from "react-router-dom";
import AboutTabs from "../../components/about/AboutTabs";

export default function AboutLayout() {
  return (
    <>
      <div className="pt-32 bg-ivory">
        <AboutTabs />
      </div>
      <Outlet />
    </>
  );
}