import {
  MAP_VIEWBOX,
  MAP_ARCH,
  LAND_PATH,
  ORIGIN,
  CLIENT_SHAPES,
} from "./Worldmapdata.js";

/**
 * Arched world map. Client countries are highlighted; hovering a country here
 * (or its flag card in the grid) highlights both via the shared `hovered` state.
 */
export default function GlobalMap({ hovered, onHover }) {
  const active = CLIENT_SHAPES.find((c) => c.name === hovered);

  return (
    <figure className="m-0">
      <svg
        viewBox={MAP_VIEWBOX}
        role="img"
        aria-label="World map highlighting the countries United Teas exports to"
        className="w-full h-auto"
      >
        <g>
          <path d={LAND_PATH} fill="currentColor" className="text-forest-dark" opacity="0.22" />

          {CLIENT_SHAPES.map((c) => (
            <path
              key={c.name}
              d={c.d}
              fill="currentColor"
              className={`cursor-pointer transition-colors duration-300 ${
                hovered === c.name ? "text-rust" : "text-forest-dark"
              }`}
              onMouseEnter={() => onHover(c.name)}
              onMouseLeave={() => onHover(null)}
            >
              <title>{c.name}</title>
            </path>
          ))}
        </g>

        {/* Origin marker */}
        <g>
          <circle cx={ORIGIN.x} cy={ORIGIN.y} r="5" className="fill-rust" />
          <circle cx={ORIGIN.x} cy={ORIGIN.y} r="5" className="fill-rust" opacity="0.5">
            <animate attributeName="r" values="5;16" dur="2.4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;0" dur="2.4s" repeatCount="indefinite" />
          </circle>
          <text
            x={ORIGIN.x}
            y={ORIGIN.y + 26}
            textAnchor="middle"
            className="fill-forest-dark stroke-cream"
            style={{ fontSize: 13, fontWeight: 600, paintOrder: "stroke", strokeWidth: 4 }}
          >
            {ORIGIN.name}
          </text>
        </g>

        {/* Hover label */}
        {active && (
          <text
            x={active.cx}
            y={active.cy - 16}
            textAnchor="middle"
            className="fill-forest-dark stroke-cream pointer-events-none"
            style={{ fontSize: 14, fontWeight: 600, paintOrder: "stroke", strokeWidth: 4 }}
          >
            {active.name}
          </text>
        )}
      </svg>

      <figcaption className="mt-4 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-muted">
        <span className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-sm bg-forest-dark" /> Export destinations
        </span>
        <span className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-rust" /> Shipped from Sri Lanka
        </span>
      </figcaption>
    </figure>
  );
}