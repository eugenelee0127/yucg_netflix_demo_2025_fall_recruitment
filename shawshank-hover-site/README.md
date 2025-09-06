# Netflix Hover UX — Shawshank Prototype (Static, Vercel-ready)

Zero-build static site. React & Tailwind from CDNs; Babel compiles JSX in-browser.

## Files
- `index.html` — entry; loads React, Tailwind, Babel, and `app.jsx`
- `app.jsx` — app code with mount
- `vercel.json` — content-type header for `.jsx`, clean URLs

## GitHub → Vercel
1. Create a new **public** repo and add these files via the GitHub web editor.
2. In Vercel: **New Project → Import** your repo.
3. **Framework Preset:** Other  
   **Build Command:** *(leave empty)*  
   **Output Directory:** `/`
4. Deploy → you’ll get `https://<project>.vercel.app`
