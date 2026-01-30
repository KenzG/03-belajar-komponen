This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Laporan Praktikum - Soal 1

## Hasil dari Praktikum
![Hasil Soal 1](./assets/alter-web-test.png)

## Pelajaran
1. Komponen React/Next.js, memahami cara memisahkan logic UI ke dalam komponen terpisah ('Profile.tsx') agar mudah untuk dikelola dan rapi
2. Belajar konfigurasi 'tsconfig.json' menggunakan simbol '@' untuk mempermudah pemanggilan file tanpa harus menambahkan path yang panjang


## Error yang ditemukan dan solusi
1. Error pertama yaitu 'Error: Cannot find module '@/'**:
- Di sini penyebabnya pada 'tsconfig.json' belum mengarah ke folder 'src'
- Solusinya yaitu mengubah pada '"@/*": ["./src/*"]' pada bagian 'paths'
2. Kemudian selanjutnya error yang ditemukan adalah 'Error: ENOENT (package.json not found)'
- Yang menyebabkan yaitu terminal berada di luar folder utama, contohnya ketika ingin melakukan npm run dev seharusnya di folder proyek, misal my-app, jadi jalakan di dalam folder my-app
- Solusi yang sederhana sering kali lupa, yaitu melakukan perintah 'cd' + nama folder proyek yang berisi 'package.json'
3. Error yang ditemukan juga yaitu 'Error: Invalid src prop (hostname not configured)'
- Penyebabnya adalah menggunakan domain 'imgur.com' dan domain tersebut belum dikonfigurasi Next.js
- Solusinya adalah yaitu menambahkan 'remotePattern' di dalam 'next-config-ts' untuk konfigurasi