# Website Analysis: SHAHEED PRAMOD Group of Education

- **Target URL:** https://www.shaheedpramod.org/
- **Capture Timestamp:** 2026-11-11T07:06:20+05:30 (`Last-Modified: Tue, 10 Nov 2026 13:26:55 GMT`)
- **Hosting:** Vercel (`server: Vercel`, `x-vercel-cache: HIT`)

---

## 1. Architecture & Tech Stack

The website is a **client-side single-page application (SPA)** built with **Vite** and **React** (entry HTML is 419 bytes with `<div id="root"></div>`, loading a single JS bundle and CSS stylesheet):

| Layer | Technology / Details | Source Evidence |
|---|---|---|
| Build Tool & Bundler | Vite (single-chunk output, no code-splitting or source maps) | `/assets/index-DOELeBeo.js` (583,720 chars), `/assets/index-BVIcxHoH.css` (70,405 chars) |
| Frontend Framework | React (`createRoot`, `StrictMode`) | `A2.createRoot(document.getElementById("root")).render(...)` |
| Styling | Tailwind CSS v4.2.2 + custom CSS theme tokens | `/*! tailwindcss v4.2.2 | MIT License | https://tailwindcss.com */` |
| UI Primitives | Base UI (`Select`, `Dialog`) + custom `Badge` / `Button` / `Input` / `Card` | `https://base-ui.com/production-error` in bundle |
| Animations | Motion / Framer Motion (`AnimatePresence`, `whileInView`, `whileHover`) | `ci.div` motion elements in `extracted-app.js` |
| Carousel | Embla Carousel React (Testimonials slider) | Carousel primitives in `nV` component |
| Typography | Google Fonts (`Inter`, `Outfit`) + local `Geist Variable` (`.woff2`) | `@import` in CSS + 3 `.woff2` files in `assets/` |
| Theme Palette | Royal Blue (`#002366`) & Gold (`#d4af37`) | `--color-royal-blue:#002366;--color-gold:#d4af37` |
| Backend / API | **None** (100% static frontend; admission form redirects to WhatsApp) | `https://wa.me/918877612728?text=...` |

---

## 2. Page Structure & Content Inventory

The entire application renders a single-page layout (`lV`) with **10 main sections**, a fixed dual-bar header, a footer, and floating action buttons:

1. **Top Announcement Ticker (`K6`)**
   - 20-second CSS marquee highlighting Bihar Student Credit Card support, Admissions Open 2026, B.Ed & Nursing seat availability, scholarships, and free career counseling.
2. **Sticky Navbar (`Z6`)**
   - Circular institutional seal logo + `"SHAHEED PRAMOD / Group of Education"` branding.
   - Transparent on load; transitions to frosted `.glass` (`backdrop-filter: blur(10px)`) after `scrollY > 50`.
   - Anchor links: `#home`, `#institutions`, `#courses`, `#about`, `#gallery`, `#contact`, plus `#admission` CTA button (`Apply Now`).
3. **Hero Carousel (`#home`, `Q6`)**
   - Full-viewport hero with `"AICTE / NCTE Approved"` badge and rotating 3-second slides:
     - *B.Ed Courses* — *"Shape the Minds of Tomorrow"*
     - *Nursing Courses* — *"Compassion Meets Professionalism"*
     - *BBA/BCA Courses* — *"Innovate and Lead in the Digital Age"*
   - Three CTAs: `Apply Now`, `Explore all Courses`, `Free Career Counseling`.
4. **Our Institutions (`#institutions`, `W6`)**
   - **SHAHEED PRAMOD B.Ed College** (`NCTE Approved`) → external link `https://shaheedpramod.in`
   - **SHAHEED PRAMOD Higher Education** (`UGC Recognized`) → external link `https://shaheedpramod.in`
   - **SHAHEED PRAMOD Nursing Institute** (`INC Approved`) → external link `https://spnursing.in`
5. **Academic Programs (`#courses`, `$6`)**
   - 8 programs across 3 categories:
     - **Education:** `B.Ed` (2 yrs), `D.El.Ed` (2 yrs)
     - **Nursing:** `B.Sc Nursing` (4 yrs), `GNM` (3 yrs), `ANM` (2 yrs)
     - **Higher Education:** `BCA` (3 yrs), `BBA` (3 yrs), `B.Lis` (1 yr)
6. **Message from the Director (`#about`, `J6`)**
   - Features **Shri Shyam Nandan Yadav** (`Director, SHAHEED PRAMOD Group of Education`).
   - Highlights `15+ Years Excellence` and `5000+ Students Trained`.
7. **Our Mission & Our Vision (`eV`)**
   - Two side-by-side cards highlighting affordable skill-based education and becoming a leading educational hub in Bihar.
8. **World-Class Facilities (`tV`)**
   - 5 cards: `Smart Classrooms`, `Computer Labs`, `Library`, `Practical Labs`, `Hostel`.
9. **Student Testimonials (`nV`)**
   - 4 five-star student reviews in a looping carousel (`Priya Sharma`, `Manoj Kumar`, `Poonam Kumari`, `Uday Kumar`).
10. **Student Registration / Admission (`#admission`, `iV`)**
    - Left panel with counselor call-back info (`8877612728`, `0621 2273439`, `shaheedpramodb.ed@gmail.com`).
    - Right panel form collecting personal details, academic percentages (10th, 12th, Graduation), course selection, passport photo input, and permanent address; constructs a Markdown-formatted WhatsApp message targeting `+918877612728`.
11. **Campus Gallery (`#gallery`, `sV`)**
    - 10 campus & event photographs in a responsive grid with click-to-enlarge Base UI modal lightbox previews.
12. **Get In Touch (`#contact`, `oV`)**
    - Address: `Susta Madhopur, Muzaffarpur, Bihar - 842002`
    - Phones: `0621 2273439`, `8877612728`, `8969094175`
    - Email: `shaheedpramodb.ed@gmail.com`
    - Google Maps embed pinned at `26.080355, 85.384298`.
13. **Footer (`rV`) & Floating Action Buttons (`aV`)**
    - Footer includes social links (Facebook, Instagram, YouTube), accreditation logos (NCTE, INC), quick links, college links, newsletter box, and `© 2026` copyright.
    - Floating action buttons provide expandable department-wise WhatsApp and Call popups:
      - **B.Ed College:** `+918877612728`
      - **Higher Education:** `+919955657050`
      - **Nursing Institute:** `+916202792816`

---

## 3. Media & Asset Audit

All image URLs across the bundle were probed and archived into `images/` (documented in `images/manifest.json`):

- **Total external image references:** 37 unique URLs (+ 1 broken relative reference `input_file_11.png`)
- **Successfully downloaded:** **34 / 37 images** (**23.63 MB** total on disk) + 3 Geist `.woff2` fonts + Google Fonts CSS (`Inter`, `Outfit`, 9 `.woff2` files)
- **External image hosts:**
  - `i.ibb.co` — 24 URLs (all 24 downloaded; real campus photos, director portrait, course cards, institution cards, logo)
  - `images.unsplash.com` — 5 URLs (4 downloaded, 1 HTTP 404)
  - `i.imageupload.app` — 3 URLs (all 3 downloaded; hero carousel slides)
  - `i.pravatar.cc` — 3 URLs (all 3 downloaded; avatar placeholders for 3 testimonials)
  - `upload.wikimedia.org` — 2 URLs (both HTTP 400 on live site)

### Broken Assets Observed on Live Site
1. `/input_file_11.png` (Admission section background image) → **HTTP 404 Not Found**.
2. `/favicon.ico`, `/robots.txt`, `/sitemap.xml`, `/manifest.json`, `/site.webmanifest` → **HTTP 404 Not Found**.
3. `https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80` (*Practical Labs*) → **HTTP 404 Not Found** (also 404 without query parameters).
4. `https://upload.wikimedia.org/wikipedia/en/thumb/5/58/NCTE_logo.png/220px-NCTE_logo.png` (*NCTE badge*) → **HTTP 400** (`Use thumbnail sizes listed on https://w.wiki/GHai`); unthumbnailed path `/wikipedia/en/5/58/NCTE_logo.png` returned **HTTP 404 Not Found**.
5. `https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/Indian_Nursing_Council_logo.png/220px-Indian_Nursing_Council_logo.png` (*INC badge*) → **HTTP 400** (`Use thumbnail sizes listed on https://w.wiki/GHai`).

---

## 4. Technical, UX & Content Observations

1. **Severe Image Payload Bloat (20.9 MB in 4 Facility Cards):**
   Because the Unsplash URLs only specify `?auto=format&fit=crop&q=80` with no `&w=` width limit, browsers download full camera originals:
   - `Smart Classrooms`: `10800x7200` (**9.54 MB**)
   - `Library`: `5957x3493` (**6.16 MB**)
   - `Hostel`: `5993x4000` (**2.88 MB**)
   - `Computer Labs`: `5472x3648` (**2.34 MB**)
   Adding `&w=800` would cut the page's image payload by >85%.
2. **Duplicate Images:**
   - `Hero Slide 1 (B.Ed Courses)` and `Gallery 9` (`gallery-09.jpg`) are byte-identical (`sha256: d491c38df32262b0...`).
   - `SHAHEED PRAMOD Nursing Institute` card and `Gallery 8` (`gallery-08.jpg`) are byte-identical (`sha256: 08df2fcb027b83de...`).
3. **Mix of Authentic, Stock, and AI-Generated Media:**
   - Gallery photos (e.g., `gallery-01.jpg` exam hall, `gallery-05.jpg` *Shaheed Pramod Shahadat Diwas Samaroh*), `hero-02-nursing-courses.jpeg` (Freshers event), and the Director portrait (`shyam-nandan-yadav.jpg`) are real campus photographs.
   - `01-shaheed-pramod-bed-college.jpg` is an AI-generated classroom illustration (containing distorted text such as `"MODERS TEACHING METHOOS & LEARNING"` on the smartboard).
   - Facility cards use Unsplash stock images, and 3 of 4 testimonials use `i.pravatar.cc` generated avatars.
4. **Incomplete / Non-Functional Interactive Elements:**
   - **Passport Photo Upload:** The Admission form reads `file.name` only and sends `"Photo Uploaded: Yes (<filename>)"` to WhatsApp — no file upload occurs.
   - **Missing Course Option:** `B.Lis` appears in Academic Programs (`q6`) but is missing from the Admission form's `Select Course` dropdown.
   - **Dead Links & Forms:** Footer `Quick Links` and Contact section social buttons all point to `href="#"`; the Footer `Newsletter` form has no submission handler.
   - **Map Embed Placeholder ID:** The Google Maps `<iframe>` contains placeholder hex identifiers (`0x39ed112233445566:0x1122334455667788`) alongside coordinates `26.080355, 85.384298`.
   - **SEO Limitations:** Client-side-only `<div id="root"></div>` without SSR/prerendering, meta description, Open Graph tags, `robots.txt`, or `sitemap.xml`.

