# SHAHEED PRAMOD Group of Education — Modern Horizontal Homepage

Production-ready **Vite + React + TypeScript + Tailwind CSS v4** homepage built to replace and resolve all technical, asset, UX, and functional issues identified on `https://www.shaheedpramod.org/`.

## Problems Fixed from the Existing Website

| Existing Issue | Fix Implemented |
|---|---|
| Navbar (`fixed top-0`) overlapped the announcement marquee (`K6`) | Properly stacked sticky header (`Header.tsx`) with pause-on-hover marquee above single-row navbar + horizontal mobile quick-jump strip |
| Broken 404 assets (`/input_file_11.png`, `/favicon.ico`, Unsplash `photo-1581093458791-9f3c3900df4b`, Wikimedia 400 badges) | Verified local optimized campus imagery (`public/images/`), favicon + OpenGraph tags, and custom crisp SVG/badge accreditations (`NCTE`, `INC`, `UGC`, `BNRC`, `AKU/BUHS`) |
| 20.9 MB image bloat from unresized Unsplash facility photos (`10800×7200`, `5957×3493`) | Resized local assets to <= 1400px (`333 KB`–`484 KB` max) for >90% image payload reduction |
| Portrait course posters (`BCA`, `BBA`, `GNM`, `ANM`, `B.Lis`) cropped inside landscape cards | Horizontal split course cards (`CoursesSection.tsx`) render full uncropped posters beside duration, eligibility, scope & CTA actions |
| `B.Lis` missing from Admission form dropdown | Admission dropdown dynamically reads from `siteConfig.coursesSection.items` (all 8 courses synced) |
| Ignored passport photo upload, non-working newsletter, dead `href="#"` links, fake map CID | Live passport photo preview + <= 2 MB validation, persistent newsletter subscription, real section/social links, and coordinate-based Google Maps embed (`26.080355, 85.384298`) |
| Single static WhatsApp target regardless of chosen course | Dynamic department counselor routing (`B.Ed` → `+91 88776 12728`, `Higher Ed` → `+91 99556 57050`, `Nursing` → `+91 62027 92816`) + printable/copyable registration slip |
| Vertical stacking across sections & mobile scroll fatigue | Horizontal split cards, horizontal category tabs, horizontal `snap-x` rails with Prev/Next arrows across mobile & desktop |

## Configuration & Dynamic Editing

- **Code-level configuration:** Edit [`src/config/siteConfig.ts`](./src/config/siteConfig.ts) (strictly typed in [`src/types/siteConfig.ts`](./src/types/siteConfig.ts)).
- **Runtime configuration:** Click **"Configure Homepage Live"** in the footer to update branding, ticker notices, contact info, or import/export the full JSON config in real time.

## Commands

```bash
npm install
npm run dev        # Start local dev server
npm run typecheck  # Verify TypeScript strict types
npm run build      # Production build to dist/
```

