import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import TeaCollection from "./pages/TeaCollection";
import AboutLayout from "./pages/about/AboutLayout";
import WhoWeAre from "./pages/about/WhoWeAre";
import Legacy from "./pages/about/Legacy";
import Visionaries from "./pages/about/Visionaries";
import GlobalClients from "./pages/GlobalClients";
import Feedback from "./pages/Feedback";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tea-collection" element={<TeaCollection />} />
          <Route path="/about" element={<AboutLayout />}>
            <Route index element={<WhoWeAre />} />
            <Route path="legacy" element={<Legacy />} />
            <Route path="visionaries" element={<Visionaries />} />
          </Route>
          <Route path="/global-clients" element={<GlobalClients />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
