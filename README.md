# Beyond4Walls Website

A premium Next.js landing website for Beyond4Walls, built with Tailwind CSS.

## Features

- Next.js 14 with React 18
- Tailwind CSS for clean styling
- Responsive 5-page website
- SEO-friendly metadata and Open Graph setup
- Simple contact API endpoint ready for integration
- Sitemap and robots.txt included

## Pages

- `/` — Home
- `/experiences` — Experiences
- `/for-schools` — For Schools
- `/about` — About
- `/contact` — Contact

## Local development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

3. Open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

## Vercel Deployment

1. Push this project to a Git repository.
2. Import the repository in Vercel.
3. Use the default Next.js settings.
4. Set `NEXT_PUBLIC_BASE_URL` if needed.

## Notes

- The contact form posts to `/api/contact` and returns JSON.
- Replace placeholder images in `/public/images` with production-quality visuals.
- Update `metadataBase` in `app/layout.tsx` with the final domain.
# school-travel-website
# school-travel-website
