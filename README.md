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

## Menjalankan Dengan Docker

Project ini sudah disiapkan untuk dijalankan dengan Docker dan `docker compose`.

Port default yang dipakai di host adalah `4300`, supaya tidak bentrok dengan aplikasi Angular lain yang mungkin sudah jalan di VPS.

### Build dan Jalankan

```bash
docker compose up -d --build
```

Setelah container jalan, buka:

```text
http://localhost:4300
```

### Ganti Port Kalau Diperlukan

Kalau di VPS port `4300` ternyata sudah terpakai juga, jalankan dengan env variable:

```bash
APP_PORT=4301 docker compose up -d --build
```

Contoh di atas akan menjalankan aplikasi di:

```text
http://localhost:4301
```

### Stop Container

```bash
docker compose down
```

### File Docker

- `Dockerfile` → build Angular lalu serve hasil build pakai Nginx
- `docker-compose.yml` → jalankan container dengan port host non-default
- `nginx/default.conf` → config Nginx untuk Angular SPA routing
- `.dockerignore` → mengurangi file yang ikut ke Docker build context

## Deploy ke VPS Dengan Docker

Requirement deploy yang sudah disiapkan:

- aplikasi jalan lewat Docker
- port host default pakai `4300`, jadi tidak bentrok dengan aplikasi lain yang sudah jalan di `4200`
- siap dipasang di belakang reverse proxy domain `www.mcozy.my.id`
- target VPS: `188.166.206.86`

### 1. Push Project ke Repository

Pastikan file berikut ikut ke repo:

- `Dockerfile`
- `docker-compose.yml`
- `nginx/default.conf`
- `deploy/nginx/our-love-adventure.conf`
- source code project
- `public/`

### 2. Arahkan Domain ke VPS

Di DNS provider Anda, buat record:

- `A` → `@` → `188.166.206.86`
- `A` → `www` → `188.166.206.86`

Kalau hanya ingin pakai `www.mcozy.my.id`, minimal record `www` harus mengarah ke IP VPS di atas.

### 3. Pull Project di VPS

```bash
git clone <repo-anda>
cd our-love-adventure
cp .env.example .env
```

### 4. Jalankan Container App

```bash
docker compose up -d --build
```

App akan jalan di VPS pada:

```text
http://127.0.0.1:4300
```

Atau dari luar server jika firewall mengizinkan:

```text
http://188.166.206.86:4300
```

### 5. Pasang Reverse Proxy Nginx di VPS

Kalau Nginx di VPS sudah ada dan dipakai untuk banyak aplikasi, pakai config ini:

File template sudah saya siapkan di:

```text
deploy/nginx/our-love-adventure.conf
```

Isi pentingnya:

```nginx
server {
  listen 80;
  server_name www.mcozy.my.id mcozy.my.id;

  location / {
    proxy_pass http://127.0.0.1:4300;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}
```

Contoh langkah di Ubuntu/Debian:

```bash
sudo cp deploy/nginx/our-love-adventure.conf /etc/nginx/sites-available/our-love-adventure.conf
sudo ln -s /etc/nginx/sites-available/our-love-adventure.conf /etc/nginx/sites-enabled/our-love-adventure.conf
sudo nginx -t
sudo systemctl reload nginx
```

### 6. Pasang SSL

Kalau domain sudah mengarah ke VPS dan Nginx sudah aktif:

```bash
sudo certbot --nginx -d www.mcozy.my.id -d mcozy.my.id
```

### 7. Update Deploy Berikutnya

Kalau nanti ada update:

```bash
git pull
docker compose up -d --build
```

### Catatan Penting

- jangan publish app ini ke port `4200`, karena di server Anda port itu sudah dipakai
- default project ini sudah aman di `4300`
- kalau `4300` ternyata juga terpakai, ubah `.env`:

```bash
APP_PORT=4301
```

Lalu sesuaikan juga `proxy_pass` di config Nginx VPS jadi:

```nginx
proxy_pass http://127.0.0.1:4301;
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

Deploy Docker juga bisa dijalankan dengan:

```bash
docker compose up -d --build
```
