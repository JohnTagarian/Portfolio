# React-Portfolio — Design System

Version 1.0 · 28 September 2026

เอกสารนี้กำหนดรูปลักษณ์และพฤติกรรม UI สำหรับ Portfolio ส่วนตัวที่ใช้ React/Vite โดยพัฒนาจากการดูเว็บ AGICAFET บน desktop และมือถือ และตรวจ computed styles ของหน้าเว็บจริง ค่าที่กำหนดสำหรับโปรเจกต์ด้านล่างเป็นข้อกำหนดสำหรับการปรับ UI ครั้งถัดไป

เป้าหมายคือเว็บที่สวย อ่านง่าย และแสดงผลงานด้าน AI, software และ robotics ได้ชัดเจน อาจารย์และผู้ชมทั่วไปเปิดอ่านได้โดยไม่ต้องเข้าสู่ระบบ ข้อความหน้าเว็บใช้ภาษาอังกฤษ

## 1. แนวทางภาพรวม

**Dark engineering portfolio**: พื้นหลังเข้ม เนื้อหาชัด สีเขียวเป็นสีหลักในการกดใช้งาน cyan ใช้เน้นรายละเอียดทางเทคนิค และทองใช้กับรางวัลพิเศษ ภาพเจ้าของ Portfolio และคำอธิบายสั้น ๆ ทำให้หน้าเว็บเข้าถึงง่าย

- ให้ชื่อ ผลงาน และสิ่งที่เจ้าของทำเป็นจุดเด่นของหน้า
- ใช้เส้นกริดบาง ๆ และภาพ graph/path/point cloud เพื่อเชื่อมกับผลงานจริง
- เว้นระยะระหว่างส่วนให้มากพอ แต่จัดรายละเอียดภายในการ์ดให้กระชับ
- ใช้สี accent เฉพาะส่วนที่ต้องการเน้น เช่น CTA, link, heading phrase และรางวัล
- ใช้ภาพจริงและ evidence ของเจ้าของ Portfolio เป็นเนื้อหาหลัก

## 2. สิ่งที่สังเกตจากเว็บต้นแบบ

ตรวจจาก [AGICAFET](https://agicafet.com/) วันที่ 28 September 2026 ตัวอย่างค่าสีและขนาดเป็นค่าที่อ่านจาก browser ในขณะตรวจ

| องค์ประกอบที่สังเกต | สิ่งที่นำมาใช้กับ Portfolio |
|---|---|
| พื้นหลังเข้ม ตัวอักษรสว่าง สีเขียวและ cyan | ชุดสีหลักในหัวข้อ 4 |
| Heading ใช้ Space Grotesk; body ใช้ชุด IBM Plex Sans | แยก display, body และ mono ตามหน้าที่ |
| เส้นกริด ภาพเชิงโครงสร้าง และแสงด้านหลัง Hero | กริดจาง ๆ และ SVG ที่เกี่ยวกับผลงานของเรา |
| Label ตัวพิมพ์ใหญ่และตัวเลขแบบ mono | หมวดงาน ลำดับการ์ด ปี และ technology tags |
| Section container สูงสุด 1152px และ desktop section padding 112px | ใช้เป็นจุดตั้งต้นของ layout |
| ปุ่ม primary มุมมน 8px และ padding 12px 24px | รูปแบบปุ่มหลักที่เรียบและกดง่าย |
| มือถือยุบ navigation เป็น Menu และเรียง CTA แนวตั้ง | เมนูที่เปิดปิดได้ และปุ่มที่ไม่เบียดกัน |

Hero ของ Portfolio ใช้ข้อความแนะนำตัวคู่กับภาพเจ้าของเว็บ ส่วนสีทอง รูปแบบการ์ดรางวัล และรายละเอียดของ Project Card เป็นการออกแบบเพิ่มสำหรับเนื้อหาของเรา โลโก้ รูปภาพ ข้อความธุรกิจ และตัวเลขของเว็บต้นแบบไม่ใช่เนื้อหาของ Portfolio

## 3. ลำดับหน้าและเนื้อหา

```text
Header / navigation
Hero — name, introduction, portrait, CTA, portfolio counts
Special Recognition — Outstanding Student Award: “Diamond KMUTNB”
Projects — all four significant projects
Team Awards — six competition / hackathon awards
About — education, introduction, skills
Contact — GitHub, email, optional LinkedIn
Footer
```

Navigation เรียงเป็น Recognition → Projects → Awards → About → Say hello และใช้ anchor เดิม: `#recognition`, `#projects`, `#awards`, `#about`, `#contact`

ข้อกำหนดของเนื้อหา:

- Diamond KMUTNB ต้องอยู่ก่อน Projects และใช้ชื่อรางวัลตามที่เจ้าของให้มา
- รางวัลการแข่งขันและ hackathon แสดง label `TEAM AWARD`
- Project Card มีคำอธิบายภาพรวมและ `MY CONTRIBUTION` ที่ระบุเฉพาะส่วนที่เจ้าของทำ
- LiDAR SLAM อธิบายการ deploy / integrate ระบบที่มีอยู่ตามขอบเขตงานจริง
- จำนวนผลงานและรางวัลอ่านจากข้อมูลจริงใน `src/content.js`
- ปีรางวัล รูปภาพ ลิงก์ และรายละเอียดที่ยังไม่ได้รับข้อมูลให้เว้นไว้ใน data; ไม่สร้างข้อมูลขึ้นมา
- Contact ใช้ลิงก์ที่มีข้อมูลจริง การบอกให้แก้ไฟล์ source เป็นข้อความสำหรับผู้พัฒนาและไม่แสดงต่อผู้ชมเว็บที่เผยแพร่

## 4. Colors

สี canvas, text, border และ primary อ้างอิงสีที่ตรวจจากต้นแบบ ส่วน raised surface, hover, control border และ gold กำหนดเพิ่มสำหรับ Portfolio สี cyan กำหนดเป็นค่าคงที่เพื่อใช้งานสม่ำเสมอ

| Token | Value | การใช้ |
|---|---|---|
| `--color-bg` | `#11161D` | พื้นหลังทั้งหน้า |
| `--color-surface` | `#171D26` | Project Card, Award Card |
| `--color-raised` | `#1D2530` | เมนูมือถือ พื้นผิวที่ต้องแยกจากการ์ด |
| `--color-text` | `#DADFE7` | เนื้อหาและข้อความปกติ |
| `--color-heading` | `#F8FAFC` | ชื่อและ heading สำคัญ |
| `--color-muted` | `#909CAD` | รายละเอียดรอง ปี และ caption |
| `--color-primary` | `#74BE37` | ปุ่มหลักและจุดเน้นสีเขียว |
| `--color-primary-hover` | `#86CE48` | Hover / pressed ของปุ่มหลัก |
| `--color-on-primary` | `#132603` | ข้อความบนปุ่มสีเขียว |
| `--color-cyan` | `#4DD7C3` | Link, focus ring, technical highlights |
| `--color-gold` | `#E5BE71` | Diamond KMUTNB และไอคอนเพชร |
| `--color-border` | `#2B323B` | เส้นแบ่งและขอบการ์ดตกแต่ง |
| `--color-control-border` | `#667386` | ขอบปุ่ม secondary ที่ต้องมองเห็นชัด |

สีเขียวเป็นสีของ interaction หลัก ทองเป็นสีของ special recognition รูปภาพและ diagram สามารถมีสีของต้นฉบับเพื่อรักษาข้อมูลในภาพ

Background grid ใช้เส้น `rgba(218, 223, 231, 0.04)` ห่างกัน 48px แสดงชัดที่สุดใน Hero และลดความเข้มเมื่อมีข้อความหรือการ์ดทับอยู่ Glow ใช้เขียวหรือ cyan opacity สูงสุด 0.12 วางหลังภาพหรือพื้นที่ว่าง

## 5. Typography

| Role | Font stack | Weight | การใช้ |
|---|---|---|---|
| Display | Space Grotesk, IBM Plex Sans Thai, system sans-serif | 600–700 | H1, H2, project / award titles |
| Body | IBM Plex Sans, IBM Plex Sans Thai, system sans-serif | 400–600 | Paragraph, navigation, buttons |
| Mono | IBM Plex Mono, ui-monospace, monospace | 400–500 | Labels, years, counts, technology tags |

ใช้ `font-display: swap` เมื่อโหลดไฟล์ฟอนต์ และโหลดเฉพาะ weight ที่ใช้จริง ฟอนต์เหล่านี้เป็นฟอนต์เป้าหมาย; โปรเจกต์ปัจจุบันยังใช้ fallback stack ตาม CSS เดิม

| Style | Size | Line height | Tracking |
|---|---|---|---|
| Hero / H1 | `clamp(2.5rem, 6vw, 5.75rem)` | 1.05 | -0.04em |
| Section / H2 | `clamp(2rem, 3.5vw, 3rem)` | 1.15 | -0.03em |
| Card / H3 | `clamp(1.25rem, 2vw, 1.5rem)` | 1.3 | -0.02em |
| Hero introduction | 18px; 16px on mobile | 1.65 | normal |
| Body | 16px | 1.65 | normal |
| Supporting text | 14px | 1.6 | normal |
| Navigation / button | 14–15px | 1.4 | normal |
| Eyebrow / metadata | 12px | 1.5 | 0.10em |
| Technology tag | 12px | 1.4 | normal |

Paragraph ยาวไม่เกินประมาณ 64ch ใช้ uppercase เฉพาะ label สั้น ๆ และเน้นคำใน heading ได้หนึ่งช่วงด้วยเขียวหรือ cyan ชื่อ Diamond KMUTNB ใช้ display font สีทอง หลีกเลี่ยงการบังคับขึ้นบรรทัดด้วย `<br />` เมื่อความยาวชื่อหรือ viewport เปลี่ยนได้ ใช้ `overflow-wrap: anywhere` กับชื่อหรือลิงก์ที่ยาวจนเกินพื้นที่บนมือถือ

## 6. Layout, spacing และ surfaces

| Setting | Value |
|---|---|
| Content width | สูงสุด 1152px, centered |
| Horizontal gutter | 24px; 20px เมื่อ viewport ต่ำกว่า 768px |
| Section spacing | 112px; 64px เมื่อ viewport ต่ำกว่า 768px |
| Header height | 72px; 64px บนมือถือ |
| Anchor offset | Header height + 16px |
| Project grid gap | 24px; 16px บนมือถือ |
| Award grid gap | 16px |
| Card inner padding | 24px; 20px บนมือถือ |
| Spacing scale | 4, 8, 12, 16, 20, 24, 32, 48, 64, 96, 112px |

| Viewport | Layout |
|---|---|
| 320–599px | Hero, Recognition, Projects และ Awards ใช้ 1 column; Menu navigation |
| 600–767px | Awards ใช้ 2 columns; ส่วนอื่น 1 column; Menu navigation |
| 768–1023px | Projects และ Awards ใช้ 2 columns; Recognition จัด icon คู่ข้อความ; desktop navigation |
| ≥1024px | Hero ใช้ 2 columns; Projects 2 columns; Awards 3 columns |

Breakpoints ชุดนี้เป็นเป้าหมายสำหรับการปรับ CSS เดิมที่ใช้ 420 / 700 / 900px ให้เป็นชุดเดียวกัน

Buttons และ tags ใช้ radius 8px; cards ใช้ 12px; special recognition ใช้ 16px ขอบปกติ 1px แยกพื้นผิวด้วยสีพื้นและเส้นก่อนเพิ่ม shadow ใช้ shadow สำหรับ dropdown หรือ hover ที่มีการกระทำได้: `0 12px 32px rgba(0, 0, 0, 0.2)`

## 7. Component specifications

### Header และ navigation

- Header ใช้พื้น canvas opacity 0.94 และ border-bottom; blur 12px เป็น enhancement
- Brand ใช้ชื่อหรือ identity ของเจ้าของ Portfolio; ข้อความ brand ปัจจุบันเป็นจุดตั้งต้นจนมีข้อมูลชื่อจริง
- Link ปกติใช้ muted; hover และ focus ใช้ text สีสว่าง
- Say hello เป็น secondary button และไปยัง Contact
- เมนูมือถือมี `aria-expanded`, `aria-controls` และปิดเมื่อเลือก anchor
- จำกัด clipping ไว้เฉพาะ decoration เพื่อให้ sticky header และ focus ring ทำงานได้

### Hero

- Desktop: ชื่อ / intro / CTA ด้านซ้าย และ portrait ด้านขวา; มือถือเรียงข้อความก่อนภาพ
- ใช้ heading เพียงหนึ่ง H1 และ intro สั้น 2–3 ประโยค
- Primary CTA: `Explore my work` → `#projects`; secondary: `About me` → `#about`
- แสดง counts จาก projects และ team awards แยก label ชัดเจน
- Portrait ใช้ frame มุมมนเรียบ ภาพไม่หมุน และมี grid / glow จาง ๆ หลังภาพ
- Technical decoration ใช้ SVG ที่สื่อถึง graph, path หรือ LiDAR ที่เกี่ยวกับผลงานจริง

### Special Recognition

- อยู่ระหว่าง Hero และ Projects และใช้ `#recognition`
- Label: `SPECIAL RECOGNITION`
- Heading: `Outstanding Student Award` และชื่อ `“Diamond KMUTNB”`
- Surface เป็นสีเข้ม ขอบทอง opacity 0.35 และแสงทอง opacity ไม่เกิน 0.08
- ไอคอนเพชรสีทองอยู่ข้างข้อความบน desktop และอยู่เหนือข้อความบนมือถือ
- ตั้งความสูงตามเนื้อหา ให้ชื่อรางวัลขึ้นหลายบรรทัดได้โดยไม่ถูกตัด
- เพิ่มปี ภาพ หรือ evidence เมื่อมีข้อมูลจากเจ้าของ Portfolio

### Section heading

- Eyebrow แบบ mono อยู่เหนือ H2 ด้วยระยะ 16px
- Heading และคำอธิบายรองจัดคู่กันบน desktop; มือถือเรียงบนลงล่าง
- ระยะจาก heading ถึง grid 32px; คำอธิบายรองไม่เกิน 48ch

### Project Card

เรียงเนื้อหาเป็น media → number / category → title → summary → MY CONTRIBUTION → technologies → evidence links

- Surface เข้มเดียวกันทุกหมวด ใช้หมวดเป็นข้อความเพื่อให้สแกนง่าย
- Media ratio 16:10; ภาพถ่ายใช้ `object-fit: cover`; diagram ใช้ `contain`
- Diagram ที่พื้นขาวใช้ inner frame สีสว่างเพื่อคงความอ่านง่าย
- Contribution มีเส้น cyan ด้านซ้ายและพื้น cyan opacity 0.06; body 14–16px
- Technology tags ใช้พื้น raised และข้อความ mono
- Link ใช้ label ที่ระบุปลายทาง เช่น `Source code`, `Demo`, `Architecture`
- กดเปิดลิงก์เฉพาะส่วนที่มี action; การ์ดไม่ใช้ cursor pointer ทั้งใบ
- Hover effect ของพื้นที่กดได้เปลี่ยนขอบ / สี หรือขยับไม่เกิน 2px

### Team Award Card

- แสดง TEAM AWARD → year → event → result ตามลำดับ
- ใช้พื้น surface และขอบปกติ; ชื่อ event เป็น H3
- Result ใช้สีเขียวพร้อมข้อความเต็ม เช่น `1st Place` หรือ `Special Prize`
- แสดงไอคอนเรียบเพื่อช่วยระบุหมวด โดยข้อมูลรางวัลยังอ่านได้จากข้อความ
- การ์ดที่ไม่มี evidence link เป็น static card

### About และ Contact

- About มี bio / education และกลุ่ม skills; typography และ surfaces ใช้ระบบเดียวกับ Project Card
- Contact ใช้ heading สั้น ลิงก์ GitHub / Email / LinkedIn ที่มีจริง และข้อความเชิญติดต่อหนึ่งย่อหน้า
- Mobile ให้ปุ่มขึ้นบรรทัดใหม่ได้และมีพื้นที่กดสูงอย่างน้อย 44px
- ใช้ `<a>` สำหรับการไปยัง URL หรือ email และ `<button>` สำหรับการเปิดปิดเมนู

### Buttons, links และ icons

| Variant / state | Specification |
|---|---|
| Primary | Primary fill + on-primary text; padding 12px 24px; height ≥48px |
| Primary hover | Primary-hover fill; transition 160ms |
| Secondary | Transparent / raised fill + control-border + text; hover เป็น raised |
| Text link | Cyan; underline เมื่อ hover / focus |
| Focus visible | Cyan outline 3px, offset 4px; ต้องไม่ถูก parent ตัด |
| Pressed | ขยับลงไม่เกิน 1px โดยไม่เปลี่ยน layout |
| Icon | 16px ใน link, 20px ใน button, stroke 1.8–2px |

Decorative SVG ใช้ `aria-hidden="true"`; ปุ่มที่มีแต่ไอคอนต้องมี accessible name

## 8. Motion และ imagery

- Transition ปกติ 160ms; reveal ที่เลือกใช้ 240ms, opacity และ translateY ไม่เกิน 12px
- เนื้อหาต้องอ่านได้ทันที แม้ไม่มี animation หรือ IntersectionObserver
- Interest strip ใช้ข้อความคงที่แทน ticker ที่เคลื่อนตลอดเวลา
- ภายใต้ `prefers-reduced-motion: reduce` ให้ reveal, smooth scroll และ decoration animation หยุด
- ใช้ CSS และ native SVG กับ React ปัจจุบันเป็นพื้นฐานของ decoration
- ภาพเจ้าของเว็บใช้ portrait; ภาพ team / robot / project ใช้เพื่อบอกบริบทของผลงาน
- ใช้ภาพจริงที่มีสิทธิ์ใช้งาน รักษาสีในภาพ evidence และเขียน alt text ที่บอกข้อมูลสำคัญ
- Reserve image ratio ก่อนโหลด และ lazy-load ภาพที่อยู่ใต้ Hero

## 9. Accessibility และ contrast

ตั้งเป้า contrast ของข้อความปกติอย่างน้อย 4.5:1 และข้อความขนาดใหญ่อย่างน้อย 3:1 ตาม [WCAG 2.2 — Contrast Minimum](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) ขอบหรือสัญญาณของ control ที่จำเป็นต่อการระบุส่วนกดได้ตั้งเป้าอย่างน้อย 3:1 เทียบกับสีข้างเคียง ตาม [Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)

คำนวณจากสี solid ที่กำหนดในเอกสารนี้ ที่ opacity 100%:

| Pair | Contrast ratio |
|---|---|
| Body text / canvas | 13.57:1 |
| Muted text / surface | 6.08:1 |
| Primary label / primary fill | 7.01:1 |
| Cyan link / surface | 9.53:1 |
| Gold heading / surface | 9.62:1 |
| Control border / raised surface | 3.21:1 |

ค่าเหล่านี้เป็นการตรวจคู่สี ไม่ใช่ผลตรวจ accessibility ของหน้าเว็บที่ปรับเสร็จแล้ว พื้นหลังโปร่งใส รูปภาพ gradient และ glow ต้องตรวจจากสีที่แสดงจริงอีกครั้ง

- สี border ปกติใช้กับเส้นตกแต่ง; secondary button ใช้ control-border
- ใช้ข้อความประกอบสีเพื่อบอกหมวดและประเภทของรางวัล
- เก็บ Skip to content, heading hierarchy, keyboard navigation และ focus visibility
- พื้นที่กดอย่างน้อย 44×44px เป็นข้อกำหนดการใช้งานของโปรเจกต์
- หน้าเว็บต้องอ่านได้เมื่อ zoom 200% และที่ viewport 320px โดยไม่มี horizontal scroll

## 10. CSS tokens สำหรับนำไป implement

ค่าชุดนี้เป็นแหล่งอ้างอิงของระบบ นำไปใส่ใน `src/index.css` เมื่อปรับหน้าเว็บ และให้ component styles อ้างอิง token แทนการเขียนสีซ้ำ

```css
:root {
  color-scheme: dark;
  --color-bg: #11161d;
  --color-surface: #171d26;
  --color-raised: #1d2530;
  --color-text: #dadfe7;
  --color-heading: #f8fafc;
  --color-muted: #909cad;
  --color-primary: #74be37;
  --color-primary-hover: #86ce48;
  --color-on-primary: #132603;
  --color-cyan: #4dd7c3;
  --color-gold: #e5be71;
  --color-border: #2b323b;
  --color-control-border: #667386;

  --font-display: "Space Grotesk", "IBM Plex Sans Thai", system-ui, sans-serif;
  --font-body: "IBM Plex Sans", "IBM Plex Sans Thai", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --text-hero: clamp(2.5rem, 6vw, 5.75rem);
  --text-section: clamp(2rem, 3.5vw, 3rem);
  --text-card: clamp(1.25rem, 2vw, 1.5rem);

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-24: 96px;
  --space-28: 112px;
  --radius-control: 8px;
  --radius-card: 12px;
  --radius-feature: 16px;
  --content-width: 1152px;
  --gutter: 24px;
  --section-space: 112px;
  --header-height: 72px;
  --shadow-overlay: 0 12px 32px rgba(0, 0, 0, 0.2);
  --duration-fast: 160ms;
  --duration-reveal: 240ms;
  --ease-ui: cubic-bezier(0.2, 0.8, 0.2, 1);
}

@media (max-width: 767px) {
  :root {
    --gutter: 20px;
    --section-space: 64px;
    --header-height: 64px;
  }
}

.section-wrap {
  width: min(calc(100% - 2 * var(--gutter)), var(--content-width));
  margin-inline: auto;
}

html {
  scroll-padding-top: calc(var(--header-height) + 16px);
}

:focus-visible {
  outline: 3px solid var(--color-cyan);
  outline-offset: 4px;
}
```

## 11. แผนผังการปรับ React ปัจจุบัน

| File / selector | การปรับตามระบบนี้ |
|---|---|
| `src/index.css` | เพิ่ม tokens, font stacks, dark canvas, focus ring และ reduced-motion rules |
| `src/App.css` — `.site-header`, `.main-nav` | Dark header, secondary CTA, breakpoint 768px |
| `.hero`, `.portrait-frame` | ข้อความและ portrait สองฝั่ง, frame เรียบ, grid / glow จาง ๆ |
| `.hero-sticker`, `.hero__scribble`, `.ticker` | ปรับเป็น label ทางเทคนิคและ static interest strip |
| `.recognition-card` | Dark surface + gold treatment; อยู่ก่อน Projects |
| `.section-heading` | Display font, mono eyebrow, ขนาดและ spacing กลาง |
| `.project-card`, `.project-art`, `.contribution`, `.tag-list` | Surface เดียวกัน, image ratio, cyan contribution, mono tags |
| `.award-card`, `.team-label` | ข้อความ TEAM AWARD ชัดเจน, result สีเขียว, static card |
| `.about-card`, `.contact-card`, `.site-footer` | ใช้ typography, surfaces และ spacing ชุดเดียวกัน |
| `src/App.jsx` | เก็บลำดับ section และ semantic markup; ปรับ presentation ตาม component specs |
| `src/content.js` | แหล่งข้อมูล profile, projects, awards และ specialAward; เติมเฉพาะข้อมูลจริง |

ใช้โครงสร้าง React + CSS ที่มีอยู่เพื่อเริ่มปรับระบบนี้ และเพิ่มไฟล์ฟอนต์ภายใต้ `public/fonts/` เมื่อเลือกไฟล์ที่จะใช้จริง

## 12. เกณฑ์ตรวจหลังนำระบบไปใช้

- [ ] Canvas, card, text, link และ button ใช้ tokens เดียวกัน
- [ ] Diamond KMUTNB อยู่ก่อน Projects และต่างจากรายการ TEAM AWARD อย่างอ่านได้ชัด
- [ ] ทั้ง 4 Project Card อธิบาย personal contribution ตามข้อมูลจริง
- [ ] ชื่อเจ้าของเว็บ ชื่อโปรเจกต์ และชื่อรางวัลไม่ถูกตัดที่ 320 / 390 / 768 / 1280px
- [ ] เมนูมือถือและลิงก์ anchor ใช้งานได้ด้วย keyboard และไม่ถูก header บัง
- [ ] Diagram และภาพ evidence ยังอ่านได้บนธีมเข้ม
- [ ] Reduced motion และ zoom 200% ไม่ทำให้ข้อมูลหาย
- [ ] ไม่มีข้อความ placeholder สำหรับแก้ source code บนเว็บที่จะส่งอาจารย์

การตรวจในงานเอกสารนี้ครอบคลุมเว็บต้นแบบ โครงสร้างโปรเจกต์ และคู่สีที่เสนอ ส่วนเกณฑ์ด้านบนใช้ตรวจหน้าเว็บหลัง implementation
