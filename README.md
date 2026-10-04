# Kantinan Khongnuam Portfolio

A dark, English-first React portfolio for projects, team achievements, significant team activities, and public contact links.

## Run locally

```bash
npm install
npm run dev
```

Vite prints a local URL in the terminal. The site uses React for the page and Vite/Node.js for local development and building. It has no custom Node.js server or database.

Create a production build and preview it locally:

```bash
npm run build
npm run preview
```

## Personalize before sharing

Edit [`src/content.js`](src/content.js):

- Set your public name and add education details.
- Update the introduction and skills/topics.
- The Hero portrait is set to `/images/profile-hero.png`; replace the file or change `profile.photo` to use another image.
- Review the public contact channels in `profile.links` before deploying.
- Fill in the E-Pretest contribution.
- Set each project's `links` entry to its public repository URL.
- Add each team story's images and your own contribution in `role`.

Team stories group competition milestones and activities. Robocon uses one story per year, with national awards and international representation identified separately. Project contributions and team-story roles describe the owner's own work.

## Images

Put approved images in [`public/images/`](public/images/). Project cards currently use CSS/SVG illustrations, including a Knowledge Graph illustration for Agentic GraphRAG Architecture. The SemiGraph architecture image is available in this folder for later use.

Suggested names:

- `profile-hero.png` — Hero portrait with a dark background
- `robocon-team.jpg` — team photo
- `robocon-robot.jpg` — robot photo
- `smooth-path-demo.jpg` — path visualization
- `e-pretest-screen.jpg` — E-Pretest screenshot
- `floor-edge-demo.jpg` — RealSense floor-edge detection photo or visualization

Update `image` and `imageAlt` in `src/content.js` to use a project image. Keep images compressed for faster loading.

Team cards have `Image1.png`–`Image4.png` paths ready in each `public/images/teams/<story-id>/` folder. Replace the mock PNGs with your own images and update their alt text and captions in `src/content.js`. Each gallery slides directly on its card every two seconds, with previous/next and Pause/Resume controls. See [`public/images/README.md`](public/images/README.md) for the folder list, examples, and certificate formatting.

## Deploy

The app is a static single-page site. Netlify can detect Vite’s production build settings; this project also includes a `netlify.toml` with build command `npm run build` and publish directory `dist`. You can connect a Git repository for automatic updates or build locally and use Netlify’s manual deploy flow to publish the generated `dist` folder.

- [Vite: Getting Started](https://vite.dev/guide/)
- [Netlify: Vite deployment guide](https://docs.netlify.com/build/frameworks/framework-setup-guides/vite/)
- [Netlify: Create deploys](https://docs.netlify.com/deploy/create-deploys/)

No single-page-app rewrite is needed because navigation uses section links on one page.

## Project contents

- [`CONTEXT.md`](CONTEXT.md) — shared portfolio vocabulary
- [`PROJECT-PLAN.md`](PROJECT-PLAN.md) — 14-day path to a public submission
- [`Design.md`](Design.md) — design system, team gallery layout, and image data format
- [`src/content.js`](src/content.js) — editable profile, project, and team-story data
- [`src/TeamStories.jsx`](src/TeamStories.jsx) — team cards and automatic image slideshows
