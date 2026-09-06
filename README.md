# United Teas — Website Redesign (Frontend)

React + Vite + Tailwind CSS v4 + React Router + Framer Motion.
Built from the "Elegant Heritage" architecture: deep forest green, antique gold,
Fraunces (display) + Inter (body). Frontend only — no images/video included yet,
and the contact form is not wired to a backend.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # serve the production build locally to check it
```

The build output goes to `dist/` — that's what you deploy (Netlify, Vercel, etc.).

## Project structure

```
src/
├── components/   # layout, ui, and page-specific components (home, tea, about, clients, feedback, contact)
├── data/         # static content — teas, core values, milestones, team, clients, testimonials
├── pages/        # one file per route, including pages/about/* for the nested About routes
├── App.jsx       # route definitions
└── index.css     # design tokens (colors, fonts) via Tailwind's @theme
```

## Pages / routes

- `/` — Home
- `/tea-collection` — filterable tea grid
- `/about` — Who We Are (shares a tab bar with the two routes below)
- `/about/legacy` — Our Legacy (timeline)
- `/about/visionaries` — The Visionaries (team)
- `/global-clients` — regions + partner placeholder grid
- `/feedback` — testimonial carousel + grid
- `/contact` — contact form + info + map placeholder

## Next steps for the client

1. **Content**: swap placeholder copy in `src/data/*.js` for final approved copy — names, bios, testimonials, exact certifications, etc.
2. **Images**: this build deliberately has no photography. Image slots are plain bordered placeholder blocks (tea cards, visionary avatars, the map on Global Clients and Contact) — drop real photography in and remove the placeholder styling.
3. **Contact form**: `ContactForm.jsx` currently just shows a "thank you" message on submit. Wire it to an email service (e.g. Formspree, Resend, a small serverless function) or a backend endpoint.
4. **Map embed**: `/contact` and `/global-clients` have placeholder blocks where a Google Maps or Mapbox embed should go.
5. **Favicon**: replace `public/favicon.svg` with the real United Teas mark.
