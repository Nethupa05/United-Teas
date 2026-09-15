import { NavLink } from "react-router-dom";

const tabs = [
  { label: "Who We Are", to: "/about", end: true },
  { label: "Our Legacy", to: "/about/legacy", end: false },
  { label: "Achievements", to: "/about/achievements", end: false },
];

export default function AboutTabs() {
  return (
    <div className="bg-ivory">
      <div className="container-page flex justify-center gap-8 sm:gap-12">
        {tabs.map((tab) => (
          <NavLink
            key={tab.to}
            to={tab.to}
            end={tab.end}
            className={({ isActive }) =>
              `relative py-5 font-jakarta text-sm whitespace-nowrap transition-colors ${
                isActive ? "text-forest-dark" : "text-muted hover:text-forest-dark"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {tab.label}
                <span
                  className={`absolute left-0 right-0 -bottom-px h-[2px] bg-gold transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
              </>
            )}
          </NavLink>
        ))}
      </div>
      <div className="hairline" />
    </div>
  );
}