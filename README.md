# KOHA Production Portfolio Site

This is a static portfolio site for **KOHA**, a production company showcasing its work across film and television.

Built with [Astro](https://astro.build/) and TypeScript, the site uses a clean, responsive layout. It also includes a contact section and pages introducing the team and company background.

## Tech Stack

- [Astro](https://astro.build/)
- Typescript
- HTML / CSS / JavaScript
- [Netlify](https://www.netlify.com/) (deployment)
- Markdown (for content)

## Folder Structure

```
KOHA_V1/
├── public/                     # Static assets (images, icons, scripts)
│   ├── images/                 # Logos and show images
│   └── scripts/                # JavaScript for interactivity
├── src/
│   ├── components/             # Reusable UI elements (icons, containers)
│   ├── content/
│   │   ├── people/             # Markdown for team bios
│   │   └── shows/              # Markdown for each project
│   ├── layouts/                # Base layout
│   ├── pages/                  # Top-level routes (about, contact, people, projects)
│   └── styles/                 # Global styles
├── .gitignore
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

## To run the site locally:

```bash
git clone https://github.com/yourusername/koha-site.git
cd koha-site
npm install
npm run dev

