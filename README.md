# Our Love Adventure

Angular web app bertema relationship journey interaktif dengan nuansa playful, cute, warm, dan warna utama ungu-peach.

## Requirement

- Node.js 22 LTS atau 24 LTS direkomendasikan
- npm

Catatan:
Project ini saat ini sudah bisa dibuild karena memakai `node_modules` yang ter-link ke workspace Angular lain di mesin yang sama. Kalau ingin benar-benar standalone, jalankan `npm install` langsung di folder project ini agar dependency lokal dibuat sendiri.

## Lokasi Project

```bash
cd /Volumes/martin/martin/IdeaProjects/our-love-adventure
```

## Install Dependency

Kalau ingin setup dependency lokal sendiri:

```bash
npm install
```

## Menjalankan Aplikasi

Untuk mode development:

```bash
npm start
```

Atau:

```bash
npx ng serve
```

Setelah server jalan, buka:

```text
http://localhost:4200
```

## Build Production

```bash
npm run build
```

Hasil build ada di:

```text
dist/our-love-adventure
```

## Routing

App ini sudah punya route berikut:

- `/` → Landing page
- `/story` → Story mode
- `/gallery` → Gallery
- `/quiz` → Fun mode / quiz
- `/secret` → Secret page
- `/ending` → Ending page

## Struktur Penting

```text
src/
  app/
    components/
      random-memory-card/
      site-shell/
    data/
      gallery-items.ts
      quiz-questions.ts
      random-memories.ts
      story-sections.ts
    models/
      content.model.ts
    pages/
      landing-page/
      story-page/
      gallery-page/
      quiz-page/
      secret-page/
      ending-page/
  assets/
    placeholders/
```

## Cara Ganti Konten

- Update cerita di `src/app/data/story-sections.ts`
- Update gallery di `src/app/data/gallery-items.ts`
- Update quiz di `src/app/data/quiz-questions.ts`
- Update random memory di `src/app/data/random-memories.ts`
- Taruh asset asli di `src/assets/`

## Catatan Kustomisasi

- Global theme ada di `src/styles.scss`
- Routing ada di `src/app/app.routes.ts`
- Layout shell ada di `src/app/components/site-shell/`
- Semua page dibuat dengan struktur komponen terpisah agar mudah dikembangkan

## Verifikasi

Build terakhir berhasil dengan:

```bash
npm run build
```
