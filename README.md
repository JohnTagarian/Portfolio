# Curious Works Portfolio

A friendly, English-first React portfolio for projects, team awards, and public contact links.

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

- Replace `Your Name` and add education details.
- Update the introduction and skills/topics.
- Add the profile photo path, for example `/images/profile.jpg`.
- Add GitHub, email, and optional LinkedIn URLs.
- Fill in the E-Pretest contribution.
- Add public project links when available.

Only details supplied or checked by the owner should be published. The award cards describe team results; project cards describe the owner’s own contribution separately.

## Images

Put approved images in [`public/images/`](public/images/). The GraphRAG architecture image in this draft is copied from the SemiGraph project. Other project cards use simple illustrations until the owner’s photos and visualizations are added.

Suggested names:

- `profile.jpg` — portrait
- `robocon-team.jpg` — team photo
- `robocon-robot.jpg` — robot photo
- `smooth-path-demo.jpg` — path visualization
- `e-pretest-screen.jpg` — E-Pretest screenshot
- `lidar-slam-demo.jpg` — LiDAR SLAM project photo or visualization

Update `image` and `imageAlt` in `src/content.js` to use a project image. Keep images compressed for faster loading.

## Deploy

The app is a static single-page site. Netlify can detect Vite’s production build settings; this project also includes a `netlify.toml` with build command `npm run build` and publish directory `dist`. You can connect a Git repository for automatic updates or build locally and use Netlify’s manual deploy flow to publish the generated `dist` folder.

- [Vite: Getting Started](https://vite.dev/guide/)
- [Netlify: Vite deployment guide](https://docs.netlify.com/build/frameworks/framework-setup-guides/vite/)
- [Netlify: Create deploys](https://docs.netlify.com/deploy/create-deploys/)

No single-page-app rewrite is needed because navigation uses section links on one page.

## Project contents

- [`CONTEXT.md`](CONTEXT.md) — shared portfolio vocabulary
- [`PROJECT-PLAN.md`](PROJECT-PLAN.md) — 14-day path to a public submission
- [`src/content.js`](src/content.js) — editable profile, project, and award data
