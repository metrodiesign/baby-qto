# BabyQto เบบี้คิวโตะ — เว็บไซต์

เว็บไซต์สำหรับ **สายรัดข้อมือกันยุงเด็ก BabyQto** (ธรรมชาติ 100% จากตะไคร้หอม) — single-page landing สไตล์ทันสมัย ภาษาไทย

## ✨ คุณสมบัติ

- **Static HTML + Tailwind CSS (Play CDN)** — ไม่ต้อง build ไม่ต้องติดตั้ง dependency
- **Vanilla JS** สำหรับเมนูมือถือ, FAQ accordion, scroll reveal, และตัวเลขอนิเมชัน
- **Responsive 100%** (mobile-first) พร้อมanimation นุ่ม ๆ และรองรับ `prefers-reduced-motion`
- **SEO พร้อม** — meta tags ภาษาไทย, Open Graph, canonical, favicon
- ฟอนต์ไทย: **Kanit** (หัวข้อ) + **Noto Sans Thai** (เนื้อหา)

## 🚀 เปิดใช้งาน

เปิดไฟล์ `index.html` ด้วยเบราว์เซอร์ได้เลย (ดับเบิ้ลคลิก) หรือรัน local server:

```bash
# ด้วย Python
python3 -m http.server 8000
# แล้วเปิด http://localhost:8000

# ด้วย Node (npx)
npx serve
```

## 📁 โครงสร้างไฟล์

```
baby-qto/
├── index.html              # หน้าเว็บหลัก (ทุก section)
├── css/
│   └── styles.css          # design tokens, animations, component classes
├── js/
│   └── main.js             # mobile menu, FAQ, scroll reveal, counter
├── assets/
│   ├── favicon.svg         # favicon + โลโก้
│   └── photo-1.jpg … photo-7.jpg   # ภาพถ่ายสินค้าจริง (ใช้ใน Hero/Gallery/Ingredients ฯลฯ)
├── .gitignore
└── README.md
```

## 🖼️ การแทนที่รูปภาพ (สำคัญ)

เว็บนี้ใช้ **placeholder** ทุกจุด ค้นหาคำว่า `TODO:` ใน `index.html` เพื่อหาตำแหน่งที่ต้องแทนที่

| ตำแหน่ง | ขนาดแนะนำ | ไฟล์ที่จะใส่ |
|---|---|---|
| โลโก้ navbar + footer | 64×64 | `assets/logo.svg` |
| ภาพสินค้าใน Hero | 640×640 (พื้นโปร่ง) | `assets/product-hero.png` |
| ภาพส่วนผสม (ตะไคร้) | 600×600 | `assets/ingredients.png` |
| ภาพ gallery (4 ใบ) | 600×600 | `assets/gallery-1.jpg` ... `gallery-4.jpg` |
| OG image (แชร์ Facebook) | 1200×630 | `assets/og-image.jpg` |

จากนั้นเปลี่ยน `<img src="...">` หรือ meta `og:image` ให้ชี้ไปยังไฟล์จริง

## 🔗 แก้ลิงก์ที่จำเป็น

ใน `index.html` ค้นหาและแก้เป็นของจริง:

- **Shopee:** `https://shopee.co.th/babyqto` → URL ร้านค้าจริง
- **Facebook:** `https://www.facebook.com/babyqto` → URL เพจจริง
- **อีเมล:** `hello@babyqto.com` (ใน footer)
- เพิ่ม **เบอร์โทร** / **LINE ID** ตามต้องการในส่วน footer

## 🎨 ปรับแต่งธีม

สีหลักกำหนดใน 2 ที่:

1. `css/styles.css` — CSS variables `--bq-*` (mint, cream, coral, sky, ink)
2. `index.html` — ใน `tailwind.config` (บล็อก `<script>` ใน `<head>`)

แก้ค่าสีในทั้งสองที่ให้ตรงกันเพื่อเปลี่ยนธีมทั้งเว็บ

## 🌍 Deploy

เป็น static site ฝากได้ทุกที่:

- **Netlify / Vercel / Cloudflare Pages** — ลากโฟลเดอร์เข้าหรือเชื่อม git repo ได้เลย
- **GitHub Pages** — push ขึ้น repo แล้วเปิด Pages ใน Settings
- **cPanel / host ทั่วไป** — อัปโหลดไฟล์ทั้งหมดขึ้น `public_html`

## 📝 เทคโนโลยี

- HTML5, Tailwind CSS (Play CDN), Vanilla JavaScript (ES5-safe)
- ไม่มี dependency, ไม่มี build step

---

© BabyQto เบบี้คิวโตะ
