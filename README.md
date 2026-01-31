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

## Laporan Praktikum - Soal 2

## Hasil dari Praktikum
![Hasil Soal 2](./assets/alter-web-test_3-profile.png)

## Pelajaran
Dalam soal nomor 2 ini mempelajari 3 konsep fundamental dalam pengembangan React dan Next.js
1. Komposisi Komponen (Nesting)
- Komponen bersifat Modular, komponen Gallery sebagai parent yang membungkus beberapa komponen Profile sebagai child
- Named Exports vs Default Export, pada profile.tsx menggunakan export default sedangkan gallery.tsx menggunakan export function Gallery()
- Terlihat rapi dan ringkas, karena hanya memanggil satu line code <*Gallery /*> buat menampilkan profile banyak sekaligus
2. Tampilan 
- Susunan columns-3, akan diatur sebanyak 3 kolom dan karena ada 3 <*Profile /*>, maka masing-masing akan menempati satu kolom
- Posisi Centered karena pada page.tsx terdapat flex min-h-screen items-center justify-center maka seluruh galeri tersebut akan muncul tepat di tengah-tengah layar browser

## Laporan Praktikum - Soal 3

## Hasil dari Praktikum
![Hasil Soal 3](./assets/web-test-add-bio.png)

## Pelajaran
Pada soal 3 menunjukkan error pada bagian elemen "(<*p class="summary"*>)" dan hal ini juga termasuk elemen "(div)",
solusinya adalah yaitu dengan menambahkan Fragment "<>" di awal setelah "return". Adapun artibut yang salah yaitu
kata "class" yang di mana ini reserved word, solusinya yaitu mengubahnya menjadi "className=" sesuai standar DOM.
Kemudian bagian "(<*br br*>) disini juga terdapat error karena tidak ditutup, maka diubah menjadi "(<*br /br*>)"

## Laporan Praktikum - Soal 4

## Hasil dari Praktikum
![Hasil Soal 4](./assets/web-test-todolist.png)
Berdasarkan soal di atas mengatakan terdapat error, error yang teridentifikasi tepat pada bari (<*h1{person}'s Todo</*h1*>)
dikarenakan variabel person didefinisikan sebagai Object JavaScript yang berisi props seperti "name" dan "theme".

Mengapa terjadi eror dikarenakan yang dibaca seharusnya adalah Objek bukan Teks, dikarenakan ({*person*}) disini adalah kumpulan data (nama, id, tema)
Jadi solusinya adalah mengubahnya menjadi (<*h1>{person.name}'s Todos</*h1>)