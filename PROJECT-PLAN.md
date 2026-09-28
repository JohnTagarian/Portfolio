# Portfolio MVP — 14-Day Plan

## Goal

Publish a friendly, English-first, single-page portfolio for the React course. The instructor can open the deployed URL without an account. The page introduces the owner, highlights the Outstanding Student Award: “Diamond KMUTNB” before Projects, presents all four projects and six team awards, and links to public contact channels.

## Current starting point

The React/Vite page structure, responsive styling, initial content model, award cards, and a GraphRAG architecture image are in place. This is a reviewable draft. It is not ready to submit until the personal details, contact URLs, missing project contribution, and real photos are filled in.

## Scope

Included:

- About/profile, special recognition before Projects, team Awards, and Contact sections on one page
- English copy, clear mobile navigation, and real project imagery
- Separate fields for a team award and the owner’s personal contribution
- Static deployment; contact uses direct links

Deferred:

- A custom Node.js API, database, login, admin page, or contact form
- A Thai translation
- Additional projects or activities beyond the confirmed inventory

## Schedule

| Day | Work | Done when |
|---|---|---|
| 1 | Replace the name and draft introduction in `src/content.js` | The home page introduces the owner accurately |
| 2 | Add education and confirm the skills/topics list | Profile details are accurate and intentionally public |
| 3 | Confirm the personal contribution for each project, especially E-Pretest | No card describes team work as the owner’s individual work |
| 4 | Add GitHub and public email links; add LinkedIn if wanted | All contact buttons point to real destinations |
| 5 | Add the portrait and project/team photos under `public/images/` | Each chosen image is relevant and has useful alt text |
| 6 | Check project summaries and technology tags against the source work | Every technical claim is defensible |
| 7 | Review all six team awards, including the wording of “Special Prize” | Names, years, placements, and team attribution are correct |
| 8 | Review the page on a phone-sized viewport | Text, cards, and navigation fit without horizontal scrolling |
| 9 | Review keyboard access, focus visibility, contrast, and motion settings | Main sections and links remain usable without a mouse |
| 10 | Refine spacing, image crops, and the visual rhythm | The page feels consistent and easy to scan |
| 11 | Run a production build and inspect the built preview | The page compiles and local images load |
| 12 | Create or connect a Git repository and prepare the Netlify site | Hosting settings use `npm run build` and `dist` |
| 13 | Publish the site and open the public URL in a private browser window | The page loads without signing in |
| 14 | Review the live page, fix any broken links or images, and submit the URL | The instructor has a stable public link |

## How AI helps

AI can draft and refine the English copy, generate the React/CSS structure, prepare the image placements, and explain deployment steps. The owner supplies or confirms personal facts, team attribution, project responsibilities, award wording, and the final public links before submission.

## Completion checklist

- [ ] Replace `Your Name`, add education, and review the introduction
- [ ] Add the actual profile photo and available project/team images
- [ ] Fill in E-Pretest personal contribution
- [ ] Add GitHub and email URLs
- [ ] Confirm project claims and all award details
- [ ] Build and preview the site
- [ ] Deploy and check the public URL without signing in
