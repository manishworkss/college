# SHAHEED PRAMOD Group of Education — Complete Website Archive

Archive and analysis of **https://www.shaheedpramod.org/** captured on `2026-11-11`.

## Folder Structure

```text
college/
├── ANALYSIS.md                         # Full technical, content, media & UX audit
├── README.md                           # Archive guide and directory overview
├── content/
│   ├── site-content.json               # Complete structured JSON of all text, links, courses, contacts & images
│   └── site-content.md                 # Human-readable Markdown export of all website content
├── images/
│   ├── manifest.json                   # Exact mapping of all 37 image URLs, HTTP statuses, sizes, dimensions & SHA-256
│   ├── logo/                           # Institutional logo
│   ├── hero/                           # Hero carousel slides (3 images)
│   ├── institutions/                   # Institution cards (3 images)
│   ├── courses/                        # Academic program cards (8 images)
│   ├── director/                       # Director portrait
│   ├── facilities/                     # Campus facility images (4 downloaded, 1 dead Unsplash 404)
│   ├── testimonials/                   # Student testimonial avatars (4 images)
│   ├── gallery/                        # Campus gallery photos (10 images)
│   └── badges/                         # Folder for accreditation badges (site Wikimedia URLs failed with HTTP 400)
└── website-mirror/
    ├── extracted-app.js                # Formatted application code extracted from the Vite JS bundle
    ├── original/                       # Verbatim files downloaded from https://www.shaheedpramod.org/
    │   ├── index.html
    │   └── assets/
    │       ├── index-DOELeBeo.js
    │       ├── index-BVIcxHoH.css
    │       ├── google-fonts.css
    │       ├── geist-*.woff2           # 3 Geist Variable font files
    │       └── fonts/                  # 9 Google Fonts woff2 files (Inter & Outfit)
    └── offline/                        # Offline-ready mirror repointed to local ./images/ and ./assets/
        ├── index.html
        ├── images -> ../../images
        └── assets/
```

## Viewing the Offline Website Mirror

Because the site uses ES modules (`<script type="module">`), serve it with a local static HTTP server rather than opening via `file://`:

```bash
cd /Users/manishkumar/Desktop/college/website-mirror/offline
python3 -m http.server 8080
```

Then open **http://localhost:8080** in your browser.

