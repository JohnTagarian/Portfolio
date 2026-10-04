# React-Portfolio — Design System

Version 1.5 · 3 October 2026

เอกสารนี้กำหนดรูปลักษณ์และพฤติกรรม UI สำหรับ Portfolio ส่วนตัวที่ใช้ React/Vite โดยพัฒนาจากการดูเว็บ AGICAFET บน desktop และมือถือ และตรวจ computed styles ของหน้าเว็บจริง ระบบสี ฟอนต์ และ component specifications ด้านล่างนำมาใช้กับหน้า React ปัจจุบันแล้ว

เป้าหมายคือเว็บที่สวย อ่านง่าย และแสดงผลงานด้าน AI, software และ robotics ได้ชัดเจน อาจารย์และผู้ชมทั่วไปเปิดอ่านได้โดยไม่ต้องเข้าสู่ระบบ ข้อความหน้าเว็บใช้ภาษาอังกฤษ

## 1. แนวทางภาพรวม

**Dark engineering portfolio**: พื้นหลังเข้ม เนื้อหาชัด สีเขียวเป็นสีหลักในการกดใช้งาน cyan ใช้เน้นรายละเอียดทางเทคนิค และทองใช้กับรางวัลพิเศษ ภาพเจ้าของ Portfolio และคำอธิบายสั้น ๆ ทำให้หน้าเว็บเข้าถึงง่าย

- ให้ชื่อ ผลงาน และสิ่งที่เจ้าของทำเป็นจุดเด่นของหน้า
- ใช้เส้นกริดบาง ๆ และภาพ graph/path/point cloud เพื่อเชื่อมกับผลงานจริง
- เว้นระยะระหว่างส่วนให้มากพอ แต่จัดรายละเอียดภายในการ์ดให้กระชับ
- ใช้สี accent เฉพาะส่วนที่ต้องการเน้น เช่น CTA, link, heading phrase และรางวัล
- ใช้ภาพจริงและ evidence ของเจ้าของ Portfolio เป็นเนื้อหาหลัก

## 2. สิ่งที่สังเกตจากเว็บต้นแบบ

ตรวจจาก [AGICAFET](https://agicafet.com/) วันที่ 28 September 2026 และภาพ Hero อ้างอิงที่เจ้าของให้วันที่ 3 October 2026 ตัวอย่างค่าสีและขนาดเป็นค่าที่อ่านจาก browser ในขณะตรวจ

| องค์ประกอบที่สังเกต | สิ่งที่นำมาใช้กับ Portfolio |
|---|---|
| พื้นหลังเข้ม ตัวอักษรสว่าง สีเขียวและ cyan | ชุดสีหลักในหัวข้อ 4 |
| Heading ใช้ Space Grotesk; body ใช้ชุด IBM Plex Sans | แยก display, body และ mono ตามหน้าที่ |
| เส้นกริด ภาพเชิงโครงสร้าง และแสงด้านหลัง Hero | กริดจาง ๆ และ SVG ที่เกี่ยวกับผลงานของเรา |
| Label ตัวพิมพ์ใหญ่และตัวเลขแบบ mono | หมวดงาน ลำดับการ์ด ปี และ technology tags |
| Section container สูงสุด 1152px และ desktop section padding 112px | ใช้เป็นจุดตั้งต้นของ layout |
| ปุ่ม primary มุมมน 8px และ padding 12px 24px | รูปแบบปุ่มหลักที่เรียบและกดง่าย |
| มือถือยุบ navigation เป็น Menu และจัด CTA ตามพื้นที่ | เมนูที่เปิดปิดได้; CTA วางคู่เมื่อกว้างพอและเรียงแนวตั้งบนจอแคบ |

Hero ของ Portfolio ใช้ข้อความแนะนำตัวคู่กับภาพเจ้าของเว็บ โดยปรับแสงเขียว–cyan, กริด และชั้นโครงสร้าง SVG ให้สื่อถึงงาน AI / robotics / software ของเรา ส่วนสีทอง รูปแบบการ์ดรางวัล และรายละเอียดของ Project Card เป็นการออกแบบเพิ่มสำหรับเนื้อหาของเรา โลโก้ รูปภาพ ข้อความธุรกิจ และตัวเลขของเว็บต้นแบบไม่ใช่เนื้อหาของ Portfolio

## 3. ลำดับหน้าและเนื้อหา

```text
Header / navigation
Hero — name, introduction, portrait, CTA, portfolio counts
Profile — full name, nickname, GPAX, education, and Outstanding Student Award: “Diamond KMUTNB”
Projects — all four significant projects
Achievements & Team Activities — seven team stories with competition milestones and community work
About — introduction and skills
Contact — GitHub, Facebook, Instagram, LinkedIn, email, phone
Footer
```

Navigation เรียงเป็น Profile → Projects → Achievements → About → Say hello และใช้ anchor: `#profile`, `#projects`, `#awards`, `#about`, `#contact`

ข้อกำหนดของเนื้อหา:

- Diamond KMUTNB ต้องอยู่ก่อน Projects และใช้ชื่อรางวัลตามที่เจ้าของให้มา
- Profile แสดง Kantinan Khongnuam, ชื่อเล่น Pond, GPAX 3.96 และ KMUTNB · College of Industrial Technology · Computer Engineering
- เรื่องราวทีมแข่งขันแสดง label `TEAM ACHIEVEMENT`; กิจกรรมทีมแสดง `TEAM ACTIVITY`; milestone ระบุผลรางวัลหรือการเป็นตัวแทนประเทศไทยตามข้อมูลจริง
- Project Card มีคำอธิบายภาพรวมและ `MY CONTRIBUTION` ที่ระบุเฉพาะส่วนที่เจ้าของทำ
- RealSense Floor Edge Detection อธิบาย ROS1 package ที่ตรวจจับขอบไกลของพื้นจาก point cloud ของ RealSense D435i และส่ง line parameters สำหรับจัดแนวหุ่นยนต์ โดยระบุ contribution ตามส่วนที่เจ้าของทำจริง
- จำนวนผลงานและรางวัลอ่านจากข้อมูลจริงใน `src/content.js`
- ปีรางวัล รูปภาพ ลิงก์ และรายละเอียดที่ยังไม่ได้รับข้อมูลให้เว้นไว้ใน data; ไม่สร้างข้อมูลขึ้นมา
- Contact ใช้ GitHub, Facebook, Instagram, LinkedIn, email และ phone ตามข้อมูลที่เจ้าของให้มา; Footer แสดง Facebook, Instagram, LinkedIn, email และ phone เป็น icon-only links มุมขวาบน

## 4. Colors

สี canvas, text, border และ primary อ้างอิงสีที่ตรวจจากต้นแบบ ส่วน raised surface, hover, control border และ gold กำหนดเพิ่มสำหรับ Portfolio สี cyan กำหนดเป็นค่าคงที่เพื่อใช้งานสม่ำเสมอ

| Token | Value | การใช้ |
|---|---|---|
| `--color-bg` | `#11161D` | พื้นหลังทั้งหน้า |
| `--color-surface` | `#171D26` | Project Card, Team Story Card, gallery |
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

Hero ใช้พื้น `#0D141D`, grid เส้น cyan จางห่างกัน 60px และ glow สีเขียว–cyan อยู่หลังเนื้อหา แสงมีจุดสว่างเฉพาะรอบภาพและเส้นโครง ไม่วางทับใบหน้าหรือข้อความ; ปุ่มหลักใน Hero ใช้เขียวสว่าง `#35E67D` ส่วน section อื่นใช้ tokens เดิม

## 5. Typography

| Role | Font stack | Weight | การใช้ |
|---|---|---|---|
| Display | Space Grotesk, IBM Plex Sans Thai, system sans-serif | 600–700 | H1, H2, project / award titles |
| Body | IBM Plex Sans, IBM Plex Sans Thai, system sans-serif | 400–600 | Paragraph, navigation, buttons |
| Mono | IBM Plex Mono, ui-monospace, monospace | 400–500 | Labels, years, counts, technology tags |

ใช้ `font-display: swap` และโหลดเฉพาะ weight ที่ใช้จริง โปรเจกต์เก็บฟอนต์ Latin ของ Space Grotesk, IBM Plex Sans และ IBM Plex Mono ใน `public/fonts/` พร้อม OFL licenses; ตัวอักษรนอก Latin subset ใช้ fallback ของระบบ

| Style | Size | Line height | Tracking |
|---|---|---|---|
| Hero / H1 | `clamp(3rem, 7vw, 6.25rem)` | 0.98 | -0.055em |
| Section / H2 | `clamp(2rem, 3.5vw, 3rem)` | 1.15 | -0.03em |
| Card / H3 | `clamp(1.25rem, 2vw, 1.5rem)` | 1.3 | -0.02em |
| Hero introduction | 18px; 16px on mobile | 1.65 | normal |
| Body | 16px | 1.65 | normal |
| Supporting text | 14px | 1.6 | normal |
| Navigation / button | 14–15px | 1.4 | normal |
| Eyebrow / metadata | 12px | 1.5 | 0.10em |
| Technology tag | 12px | 1.4 | normal |

Paragraph ยาวไม่เกินประมาณ 64ch ใช้ uppercase กับ label สั้น ๆ และชื่อ Hero เพื่อให้ชื่อเด่นบนฉากกริด ชื่อ Diamond KMUTNB ใช้ display font สีทอง หลีกเลี่ยงการบังคับขึ้นบรรทัดด้วย `<br />` เมื่อความยาวชื่อหรือ viewport เปลี่ยนได้ ใช้ `overflow-wrap: anywhere` กับชื่อหรือลิงก์ที่ยาวจนเกินพื้นที่บนมือถือ

## 6. Layout, spacing และ surfaces

| Setting | Value |
|---|---|
| Content width | สูงสุด 1152px, centered |
| Horizontal gutter | 24px; 20px เมื่อ viewport ต่ำกว่า 768px |
| Section spacing | 112px; 64px เมื่อ viewport ต่ำกว่า 768px |
| Header height | 72px; 64px บนมือถือ |
| Anchor offset | Header height + 16px |
| Project grid gap | 24px; 16px บนมือถือ |
| Team Story grid gap | 24px; 16px บนมือถือ |
| Card inner padding | 24px; 20px บนมือถือ |
| Spacing scale | 4, 8, 12, 16, 20, 24, 32, 48, 64, 96, 112px |

| Viewport | Layout |
|---|---|
| 320–599px | Hero, Profile, Projects และ Team Stories ใช้ 1 column; Menu navigation |
| 600–767px | ทุกส่วนใช้ 1 column; Menu navigation |
| 768–1023px | Projects และ Team Stories ใช้ 2 columns; Profile เรียงการ์ดลงมา; desktop navigation |
| ≥1024px | Hero, Profile, Projects และ Team Stories ใช้ 2 columns |

Breakpoints ชุดนี้เป็นเป้าหมายสำหรับการปรับ CSS เดิมที่ใช้ 420 / 700 / 900px ให้เป็นชุดเดียวกัน

Buttons และ tags ใช้ radius 8px; cards ใช้ 12px; special recognition ใช้ 16px ขอบปกติ 1px แยกพื้นผิวด้วยสีพื้นและเส้นก่อนเพิ่ม shadow ใช้ shadow สำหรับ dropdown หรือ hover ที่มีการกระทำได้: `0 12px 32px rgba(0, 0, 0, 0.2)`

## 7. Component specifications

### Header และ navigation

- Header ใช้พื้น canvas opacity 0.94 และ border-bottom; blur 12px เป็น enhancement
- Brand ใช้ชื่อ `KANTINAN.` พร้อมจุดสีเขียวและคำรอง `PERSONAL PORTFOLIO`; browser title ใช้ชื่อเต็ม Kantinan Khongnuam
- Link ปกติใช้ muted; hover และ focus ใช้ text สีสว่าง
- Say hello เป็น secondary button และไปยัง Contact
- เมนูมือถือมี `aria-expanded`, `aria-controls` และปิดเมื่อเลือก anchor
- จำกัด clipping ไว้เฉพาะ decoration เพื่อให้ sticky header และ focus ring ทำงานได้

### Hero

- Desktop: ชื่อขนาดใหญ่ / intro / CTA ด้านซ้าย และ portrait ในกรอบเรืองแสงด้านขวา; มือถือเรียงข้อความก่อนภาพ
- ใช้ heading เพียงหนึ่ง H1 และ intro สั้น 2–3 ประโยค
- Primary CTA: `Explore my work` → `#projects`; secondary: `About me` → `#about`
- แสดง counts จาก projects และ teamStories ด้วย label `projects` / `team stories`; จำนวนเรื่องราวทีมรวมกิจกรรมและไม่ใช่จำนวนรางวัล
- Hero เต็มความกว้างจอในส่วนพื้นหลัง: กริดละเอียด, grid แนวพื้น, แสงเขียว–cyan และเส้นสแกนแนวนอน; ชั้นโครงเรขาคณิต SVG อยู่ทางซ้ายหลังชื่อและ intro โดยลดความเข้มเพื่อให้ข้อความอ่านชัด
- Portrait ใช้ frame มุมมนเรียบ ขอบ cyan พร้อมแสงเขียวจาง ๆ หลังกรอบ; ภาพและใบหน้าอยู่นิ่ง ไม่ใช้เอฟเฟกต์สแกนทับใบหน้า
- ภาพ Hero จริงอยู่ที่ `public/images/profile-hero.png` ผ่าน `profile.photo`; พื้นที่แสดงภาพเป็นสี่เหลี่ยมจัตุรัสและครอปจากด้านบนเพื่อให้ใบหน้าเด่น โดยไม่ตัดส่วนศีรษะ
- เมื่อไม่มี `profile.photo` ใช้ภาพ technical SVG ที่เชื่อม AI / robotics / software เป็น fallback
- Technical decoration ใช้ SVG ที่สื่อถึง graph, path หรือ LiDAR ที่เกี่ยวกับผลงานจริง

### Profile

- อยู่ระหว่าง Hero และ Projects และใช้ `#profile`; heading หลักเป็น `Profile`
- การ์ดข้อมูลส่วนตัวแสดงชื่อเต็ม, Nickname, GPAX และ Education ในรูปแบบ label/value
- การ์ด Outstanding Student Award แสดง `Diamond KMUTNB` พร้อมขอบและแสงทอง โดยอยู่ข้างการ์ดข้อมูลส่วนตัวบน desktop และเรียงลงมาบนมือถือ
- ไอคอนเพชรสีทองเป็นภาพตกแต่ง; ตั้งความสูงตามเนื้อหา ให้ชื่อรางวัลขึ้นหลายบรรทัดได้โดยไม่ถูกตัด
- เพิ่มปี ภาพ หรือ evidence เมื่อมีข้อมูลจากเจ้าของ Portfolio

### Section heading

- Eyebrow แบบ mono อยู่เหนือ H2 ด้วยระยะ 16px
- Heading และคำอธิบายรองจัดคู่กันบน desktop; มือถือเรียงบนลงล่าง
- ระยะจาก heading ถึง grid 32px; คำอธิบายรองไม่เกิน 48ch

### Project Card

เรียงเนื้อหาเป็น media → number / category → title → summary → MY CONTRIBUTION → technologies → evidence links

- Surface เข้มเดียวกันทุกหมวด ใช้หมวดเป็นข้อความเพื่อให้สแกนง่าย
- Media ratio 16:10; ภาพถ่ายใช้ `object-fit: cover`; diagram ใช้ `contain`
- Agentic GraphRAG Architecture ใช้ภาพประกอบ Knowledge Graph แบบ CSS/SVG โทน green / cyan บน dark canvas พร้อม grid และ nodes ในรูปแบบเดียวกับ artwork ของการ์ด Project อื่น
- Diagram ที่พื้นขาวใช้ inner frame สีสว่างเพื่อคงความอ่านง่าย
- Contribution มีเส้น cyan ด้านซ้ายและพื้น cyan opacity 0.06; body 14–16px
- Technology tags ใช้พื้น raised และข้อความ mono
- Link ใช้ label ที่ระบุปลายทาง เช่น `Source code`, `Demo`, `Architecture`
- ทุก Project Card มีปุ่ม GitHub แบบ secondary อยู่ใต้ technology tags และเปิดแท็บใหม่; ปลายทางอยู่ใน links ของแต่ละ Project ใน src/content.js โดยเริ่มจากบัญชี GitHub ของเจ้าของและเปลี่ยนเป็น repository ของแต่ละงานได้
- ชื่อ Project และ SVG artwork กดเปิด GitHub repository เดียวกับปุ่มได้; แสดงสถานะ hover / keyboard focus และไม่ทำให้ทั้ง Card เป็นลิงก์
- กดเปิดลิงก์เฉพาะส่วนที่มี action; การ์ดไม่ใช้ cursor pointer ทั้งใบ
- Hover effect ของพื้นที่กดได้เปลี่ยนขอบ / สี หรือขยับไม่เกิน 2px

### Achievements & Team Activities

สถานะ: ยืนยัน layout ครบคำถาม 1–5/5; ปรับ Gallery ล่าสุดตามคำขอเป็น slideshow บนการ์ด เลื่อนอัตโนมัติทุก 2 วินาที พร้อมปุ่มเลื่อนเองใน React ปัจจุบันแล้ว

- หมวดนี้ขยายจาก Team Awards เป็น Achievements & Team Activities โดยรวมรางวัล, การเป็นตัวแทนประเทศไทย และกิจกรรมสำคัญที่ทำร่วมกับทีม
- รวมกิจกรรมช่วยเหลือเหตุแผ่นดินไหวกับ iRAP Robot ตามข้อมูลใน Presentation.pdf เป็น Team Activity
- การ์ดใช้ label Team Achievement / Team Activity; milestone มีประเภท award / representation / activity และระบุระดับการแข่งขันเมื่อมีข้อมูล
- Milestone ประเภท award แสดง CSS icon คู่กับผลรางวัล: 1st / 2nd / 3rd Place ใช้เหรียญทอง / เงิน / ทองแดง, Special Prize ใช้ดาว และ Best Autonomous ใช้สัญลักษณ์ทรงหกเหลี่ยม; icon เป็นภาพตกแต่งและไม่ใช้ Emoji
- Robocon ใช้หนึ่ง Team Story ต่อปี: รวม milestone ของการแข่งขันในประเทศและการเป็นตัวแทนประเทศไทย พร้อมชุดภาพของปีนั้น โดยระบุชื่อรายการ / ระดับ / ผลของแต่ละ milestone แยกกัน
- การเป็นตัวแทนประเทศไทยเป็น milestone ของการเข้าร่วมระดับนานาชาติ; ใช้ข้อความผลการแข่งขันเมื่อมีข้อมูลของรางวัลนั้นโดยตรง
- CDG Hackathon, CRU Robot Games, Arduino Education Day / TinyML และกิจกรรมช่วยเหลือเหตุแผ่นดินไหวมี Team Story ของตัวเอง
- Robocon 2026 ที่มีอยู่ในเว็บยังอยู่ในขอบเขต; Presentation.pdf ไม่มีภาพของรายการนี้ เจ้าของ Portfolio จะเติมภาพและข้อมูลที่เกี่ยวข้องเอง
- Outstanding Student Award: Diamond KMUTNB อยู่ใน Profile ก่อน Projects
- เจ้าของ Portfolio จะเติมภาพเอง; layout ต้องรองรับภาพทีม / หุ่นยนต์ / สนามแข่งขัน / เกียรติบัตร โดยใช้ข้อมูลจริงของแต่ละงาน
- Layout ใช้ Gallery cards: หนึ่ง Team Story ต่อการ์ด, desktop ตั้งแต่ 768px แสดง 2 columns และหน้าจอเล็กกว่า 768px แสดง 1 column
- ภายในเรียง slideshow พร้อมปุ่มเลื่อน → caption / ตัวนับภาพ / ปุ่มพัก → ประเภท / ปี → ชื่องาน → milestones ของทีม → summary สั้น → MY ROLE
- ภาพหลักอยู่บนการ์ดและมีสัดส่วน 16:10 ที่จองพื้นที่ไว้ก่อนโหลด; ภาพทีม / หุ่นยนต์ / สนามใช้ cover พร้อมกำหนดจุดโฟกัสของแต่ละภาพได้ และเกียรติบัตรใช้ contain
- Milestones แสดงบนการ์ดพร้อมชื่อรายการและระดับการแข่งขัน เพื่อให้ผู้อ่านเห็นผลสำคัญทันที
- Summary ใช้ 1–2 ประโยค; MY ROLE บันทึกเฉพาะสิ่งที่เจ้าของ Portfolio ทำจริงในงานนั้น
- ใช้ surface เข้ม, radius 12px และ typography ของระบบเดิม; ป้ายรางวัลใช้ green และป้าย International Representation / Team Activity ใช้ cyan พร้อมข้อความระบุประเภท
- ภาพใน Gallery แสดงและเลื่อนบนการ์ดโดยตรง พร้อมปุ่มก่อนหน้า / ถัดไปขนาด 44×44px ที่ด้านซ้ายและขวาของภาพ

#### Gallery interaction

- Gallery เป็น carousel ในพื้นที่ภาพ 16:10 ของการ์ด เริ่มจาก Image1 และเลื่อนภาพตามลำดับใน images array
- เมื่อมีอย่างน้อย 2 ภาพ เลื่อนอัตโนมัติทุก 2000ms ด้วย animation แนวนอน 420ms ใช้ easing ของระบบ และวนกลับจากภาพสุดท้ายสู่ภาพแรกอย่างต่อเนื่อง
- ปุ่มก่อนหน้า / ถัดไปเลื่อนเองได้และวนภาพทั้งสองทิศทาง; keyboard ใช้ ArrowLeft / ArrowRight เมื่อ focus อยู่ใน Gallery
- แสดง caption ของภาพปัจจุบันและตัวนับ เช่น 2 / 4 ใต้ภาพ พร้อมปุ่ม Pause / Resume ขนาด 44×44px
- การเลื่อนอัตโนมัติพักขณะเมาส์อยู่บน Gallery, ขณะ focus อยู่ใน controls, เมื่อ Gallery อยู่นอกหน้าจอ หรือ browser tab ไม่ได้แสดง; กลับมาเลื่อนเมื่อเงื่อนไขเหล่านี้สิ้นสุดและผู้ชมไม่ได้กด Pause
- เมื่อ reduced motion เปิด ให้หยุดการเลื่อนอัตโนมัติและ animation; ปุ่มเลื่อนเองยังเปลี่ยนภาพได้ทันที
- ภาพทั่วไปใช้ cover พร้อม position ต่อภาพ; ภาพที่กำหนด type เป็น certificate ใช้ contain
- แต่ละ Gallery มี accessible name ตามชื่องาน; ซ่อนภาพที่ไม่ได้แสดงจาก accessibility tree และประกาศ caption / ตัวนับเฉพาะเมื่อผู้ชมควบคุมภาพเอง
- เมื่อมีภาพเดียว แสดงภาพนิ่งและ caption; เมื่อยังไม่มีภาพ ใช้ภาพประกอบตามประเภทงาน
- ปุ่มเลื่อนใช้ hover / focus / pressed feedback ของระบบเดิม และ section reveal ตามที่มีอยู่

#### Image content to fill

- แต่ละ Team Story มีชุดภาพของตัวเอง; เจ้าของ Portfolio เติมภาพจริงภายหลังใน public/images และระบุเส้นทางภาพในข้อมูลเนื้อหา
- เตรียม path รูป PNG 4 ภาพต่อ Team Story ไว้แล้วใน `public/images/teams/<story-id>/Image1.png` ถึง `Image4.png`; เจ้าของเลือกเนื้อหาภาพแต่ละช่องได้เอง โดย Image1 เป็น cover และลำดับใน gallery ตาม images array
- ภาพ mock มีป้าย MOCK IMAGE และ alt / caption ระบุว่าเป็นตัวอย่าง ส่วนภาพทีม Robocon 2025 ใช้ภาพจริงที่เจ้าของให้มาใน Image1.png; ประเภทภาพเลือกได้ต่อภาพโดยค่าเริ่มต้นเป็น photo
- เปลี่ยนภาพ mock เป็น PNG ชื่อเดิมได้ทันที พร้อมแก้ alt / caption ให้ตรงกับภาพจริง; ถ้าใช้ชื่อไฟล์หรือนามสกุลใหม่ ให้ปรับ src ของภาพนั้นตามคู่มือ `public/images/README.md`
- ภาพแรกเป็น cover ของการ์ด; แต่ละภาพมี alt text, caption, ประเภท photo / certificate และจุดโฟกัสที่เหมาะกับ cover
- MY ROLE และวันที่ / ปีของกิจกรรมใช้เฉพาะข้อมูลที่เจ้าของให้มา; ข้อมูลที่ยังไม่มียังคงรอเติมและไม่แสดงข้อความสำหรับแก้ source code บนหน้าเว็บ
- จำนวน Team Stories กับจำนวน Team Awards เป็นคนละค่า; ใช้ label ให้ตรงกับข้อมูลที่นับเมื่อปรับคำอธิบายหรือ counts ใน Hero

#### Content structure

ข้อมูลอยู่ใน `teamStories` ของ `src/content.js`: แต่ละงานมี `id`, `title`, `year`, `kind`, `summary`, `milestones`, `role` และ `images` ส่วนกิจกรรมที่ยังไม่มีปีใช้ค่า `year: ''`

เติม `role` ด้วยสิ่งที่เจ้าของทำจริง และเพิ่มภาพใน `images` ของงานนั้น เช่น:

```js
images: [
  {
    src: '/images/teams/robocon-2025/Image1.png',
    alt: 'The team at the Robocon Thailand competition',
    caption: 'Thailand championship — team photo',
    type: 'photo',
    position: '50% 40%',
  },
  {
    src: '/images/teams/robocon-2025/Image2.png',
    alt: 'Competition award certificate',
    caption: 'Award certificate',
    type: 'certificate',
  },
],
```

ตัวอย่างนี้เป็นรูปแบบการเติมข้อมูล ใช้ชื่อไฟล์และ caption ที่ตรงกับภาพจริงของเจ้าของ Portfolio; ภาพแรกแสดงเมื่อเริ่มต้น และ Gallery เลื่อนอัตโนมัติเมื่อมีอย่างน้อย 2 ภาพ คู่มือเพิ่มเติมอยู่ที่ `public/images/README.md`

### About และ Contact

- About มี bio และกลุ่ม skills; ข้อมูลการศึกษาแสดงใน Profile
- Contact ใช้ heading สั้น ลิงก์ GitHub / Facebook / Instagram / LinkedIn / Email / Phone และข้อความเชิญติดต่อหนึ่งย่อหน้า
- Footer วาง brand และคำอธิบายสั้นทางซ้าย; วาง Facebook, Instagram, LinkedIn, email และ phone เป็น SVG icon-only links เรียงแนวนอนทางขวาบน โดยลิงก์แต่ละอันมี accessible name และพื้นที่กดอย่างน้อย 44px
- Footer แสดง copyright และ Back to top เป็นรายละเอียดขนาดเล็กในแถวล่าง
- Mobile จัดกลุ่ม brand และ icon contacts ให้อ่านง่ายและกดสะดวก
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

### Motion direction — Technical & polished

สถานะ: ยืนยันข้อสรุปเดิมครบคำถาม 1–5/5 วันที่ 28 September 2026; ปรับ Hero ตามภาพอ้างอิงใหม่วันที่ 3 October 2026 แล้ว

- Hero ใช้ชั้น wireframe SVG สามระดับทางซ้ายหลังข้อความ แต่ละชั้นมีเพียงกรอบสี่เหลี่ยมด้านนอกและขอบที่แสดงความหนา ไม่มีสี่เหลี่ยมซ้อนด้านใน ชั้นเหล่านี้ลอยขึ้นลงเล็กน้อย แสงพื้นหลังหายใจช้า ๆ และเส้นแสงวิ่งแนวนอน; ชื่อมี glow เปลี่ยนความเข้มอย่างนุ่มนวล
- ภาพบุคคลในกรอบอยู่นิ่งและอ่านชัด; technical SVG เดิมเป็น fallback เมื่อไม่มี `profile.photo`
- เส้นโครงใน Hero เป็นภาพตกแต่ง; ไม่แสดงคำกำกับลำดับ 01 / 02 / 03 ในพื้นหลัง ภาพจริงและ diagram ของ Project ยังคงเป็น Evidence
- Section reveal ทำงานหนึ่งครั้งเมื่อ section เข้าสู่หน้าจอ ใช้ opacity และ translateY ไม่เกิน 12px ภายใน 240ms ตาม motion tokens
- Project Card ใช้ 3D tilt: เอียงตามตำแหน่งเมาส์ไม่เกิน 4 องศาพร้อมแสง Green/Cyan และกลับสู่ตำแหน่งปกติเมื่อเมาส์ออก โดยยังอ่านชื่อผลงานและ personal contribution ได้ชัดเจน
- Tilt เป็น presentation effect ของการ์ด; เปิด Evidence ผ่านลิงก์และภาพที่มีอยู่ตามเดิม
- ใช้ dark canvas, green / cyan accents และ gold สำหรับ Special Recognition ตามระบบเดิม
- มือถือคง Hero animation แต่ลด opacity ของ wireframe หลังข้อความ; การ์ดอยู่นิ่งและปุ่ม / Evidence links มี feedback เมื่อกด
- Tilt และแสงตามเมาส์ทำงานที่ viewport ตั้งแต่ 768px บนอุปกรณ์ที่รองรับ fine pointer และ hover; keyboard focus ยังคงแสดง focus ring และอ่านการ์ดได้ในตำแหน่งปกติ
- เมื่อผู้ชมเลือก reduced motion ให้ Hero เป็นภาพนิ่ง, section แสดงเนื้อหาทันที และหยุด tilt / smooth scroll
- Hero animation หยุดเมื่อ Hero อยู่นอกหน้าจอหรือ browser tab ไม่ได้แสดง เพื่อจำกัดงานที่ทำอยู่เบื้องหลัง
- Gallery ของ Team Story เลื่อนภาพแนวนอนทุก 2 วินาที ภายใน 420ms; ใช้ปุ่มเลื่อนเอง / Pause และหยุด autoplay ภายใต้ reduced motion
- Implement ด้วย React, CSS, native SVG และ browser APIs ในโปรเจกต์เดิม

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
| `.hero`, `.hero-scene`, `.portrait-frame` | ชื่อและ portrait สองฝั่ง, กริดเต็มจอ, wireframe หลังข้อความทางซ้าย, glow เขียว–cyan และกรอบภาพที่อ่านชัด |
| `.hero-sticker`, `.hero__scribble`, `.ticker` | ปรับเป็น label ทางเทคนิคและ static interest strip |
| `.profile-card`, `.profile-award` | ข้อมูลส่วนตัวคู่กับการ์ดรางวัลขอบทอง; อยู่ก่อน Projects |
| `.section-heading` | Display font, mono eyebrow, ขนาดและ spacing กลาง |
| `.project-card`, `.project-art`, `.contribution`, `.tag-list` | Surface เดียวกัน, image ratio, cyan contribution, mono tags |
| `src/TeamStories.jsx`, `src/TeamStories.css` | Gallery cards, milestone labels, image fallback, slideshow 2 วินาที, manual controls, Pause และ reduced motion |
| `.about-card`, `.contact-card`, `.site-footer` | ใช้ typography, surfaces และ spacing ชุดเดียวกัน |
| `src/App.jsx` | เก็บลำดับ section และ semantic markup; ปรับ presentation ตาม component specs |
| `src/motion.js` | Motion preferences, Hero visibility, section reveal และ Project Card tilt |
| `src/content.js` | แหล่งข้อมูล profile, projects, teamStories และ specialAward; เติมเฉพาะข้อมูลจริง |

ใช้โครงสร้าง React + CSS ที่มีอยู่เพื่อเริ่มปรับระบบนี้ และเพิ่มไฟล์ฟอนต์ภายใต้ `public/fonts/` เมื่อเลือกไฟล์ที่จะใช้จริง

## 12. เกณฑ์ตรวจหลังนำระบบไปใช้

- [ ] Canvas, card, text, link และ button ใช้ tokens เดียวกัน
- [ ] Diamond KMUTNB อยู่ก่อน Projects และต่างจากรายการผลงานทีมอย่างอ่านได้ชัด
- [ ] ทั้ง 4 Project Card อธิบาย personal contribution ตามข้อมูลจริง
- [ ] ชื่อเจ้าของเว็บ ชื่อโปรเจกต์ และชื่อรางวัลไม่ถูกตัดที่ 320 / 390 / 768 / 1280px
- [ ] เมนูมือถือและลิงก์ anchor ใช้งานได้ด้วย keyboard และไม่ถูก header บัง
- [ ] Diagram และภาพ evidence ยังอ่านได้บนธีมเข้ม
- [ ] Reduced motion และ zoom 200% ไม่ทำให้ข้อมูลหาย
- [ ] ไม่มีข้อความ placeholder สำหรับแก้ source code บนเว็บที่จะส่งอาจารย์

การตรวจในงานเอกสารนี้ครอบคลุมเว็บต้นแบบ โครงสร้างโปรเจกต์ และคู่สีที่เสนอ ส่วนเกณฑ์ด้านบนใช้ตรวจหน้าเว็บหลัง implementation
