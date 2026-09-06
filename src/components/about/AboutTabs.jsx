import { NavLink } from "react-router-dom";

const tabs = [
  { label: "Who We Are", to: "/about", end: true },
  { label: "Our Legacy", to: "/about/legacy", end: false },
  { label: "The Visionaries", to: "/about/visionaries", end: false },
];

export default function AboutTabs() {
  return (
    <div className="border-b border-gold/20">
      <div className="container-page flex gap-8 overflow-x-auto">
        {tabs.map((tab) => (
          <NavLink
            key={tab.to}
            to={tab.to}
            end={tab.end}
            className={({ isActive }) =>
              `relative py-5 text-sm whitespace-nowrap transition-colors ${
                isActive ? "text-gold" : "text-cream/70 hover:text-cream"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {tab.label}
                {isActive && (
                  <span className="absolute left-0 right-0 -bottom-px h-[2px] bg-gold" />
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
