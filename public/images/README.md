# Portfolio images

The Hero portrait is `profile-hero.png`. The React page uses hand-made vector illustrations where there is not yet a project image.

The architecture diagram in this folder is copied from the SemiGraph project and is available for later use. The Agentic GraphRAG card currently uses a CSS/SVG Knowledge Graph illustration. To change the Hero portrait, replace `profile-hero.png` or set `profile.photo` in `src/content.js` to the new `/images/` path.

## Team story galleries

Every team story now has four image paths ready in `src/content.js`: `Image1.png`, `Image2.png`, `Image3.png`, and `Image4.png`. You can use any picture in each slot. The card starts on `Image1.png`, then slides through images 2–4 automatically every two seconds.

There are 27 mock PNGs marked **MOCK IMAGE**. Your real Robocon 2025 team photo is kept as `robocon-2025/Image1.png`.

### Replace a mock with your real image

1. Export your real image as PNG and replace the matching file listed below, using the same filename.
2. Find the matching story in `teamStories` in `src/content.js` and update that image's `alt` and `caption` to describe the real photo.
3. Adjust `position` if the cover needs a different crop. The first image is the cover.

All folders below are inside `public/images/teams/`.

| Story folder | Image 1: cover | Image 2 | Image 3 | Image 4 |
| --- | --- | --- | --- | --- |
| `robocon-2026` | `Image1.png` | `Image2.png` | `Image3.png` | `Image4.png` |
| `robocon-2025` | `Image1.png` (your real photo) | `Image2.png` | `Image3.png` | `Image4.png` |
| `cdg-2025` | `Image1.png` | `Image2.png` | `Image3.png` | `Image4.png` |
| `robocon-2024` | `Image1.png` | `Image2.png` | `Image3.png` | `Image4.png` |
| `cru-2023` | `Image1.png` | `Image2.png` | `Image3.png` | `Image4.png` |
| `tinyml-2023` | `Image1.png` | `Image2.png` | `Image3.png` | `Image4.png` |
| `earthquake-support` | `Image1.png` | `Image2.png` | `Image3.png` | `Image4.png` |

For example, replace `public/images/teams/robocon-2026/Image1.png` with the picture you want on the Robocon 2026 card. Its existing URL `/images/teams/robocon-2026/Image1.png` will display the replacement automatically. Filenames are case-sensitive: use a capital **I** in `Image1.png`–`Image4.png`.

If your new file has a different filename or extension, update `src` to match it exactly. Paths start with `/images/`, without `public`. Refresh the page after replacing an image if the browser still shows the mock.

To add more images, append another object to that story's `images` array:

```js
images: [
  {
    src: '/images/teams/robocon-2025/Image1.png',
    alt: 'The team at the Robocon Thailand competition',
    caption: 'Thailand championship - team photo',
    type: 'photo',
    position: '50% 40%',
  },
  {
    src: '/images/teams/robocon-2025/Image2.png',
    alt: 'Our robot on the competition field',
    caption: 'The robot on the competition field',
    type: 'photo',
  },
  {
    src: '/images/teams/robocon-2025/Image3.png',
    alt: 'Competition award certificate',
    caption: 'Award certificate',
    type: 'certificate',
  },
  {
    src: '/images/teams/robocon-2025/Image4.png',
    alt: 'Another photo from this Robocon season',
    caption: 'Another moment from this Robocon season',
    type: 'photo',
  },
],
```

The photo subjects above are examples; each numbered file can contain any image. The first image appears initially. `position` adjusts the crop of each photo; it defaults to `50% 50%`. Set `type: 'certificate'` on any image that needs an uncropped certificate preview. Update alt text and captions to match your actual pictures.

Story ids:

- `robocon-2026`
- `robocon-2025`
- `cdg-2025`
- `robocon-2024`
- `cru-2023`
- `tinyml-2023`
- `earthquake-support`

Add your personal contribution in each story's `role` field to show **MY ROLE**. Add the earthquake activity's `year` when available. Empty roles are hidden, and stories without images use an illustration until you add photos. A single image stays still; two or more images enable the slideshow and navigation buttons.

The gallery is displayed directly on each card. Use the left/right buttons to choose an image or Pause/Resume to control automatic playback. Left/Right arrow keys also work when a gallery control has focus. Automatic playback pauses while hovering, while controls have focus, outside the viewport, and while the browser tab is hidden. Reduced motion disables automatic playback and animation while keeping manual navigation available.
