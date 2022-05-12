# How to contribute ?

Anda dapat [fork repository ini terlebih dahulu](https://github.com/Luxinity-Roleplay/luxinity-roleplay.github.io/fork), kemudian submit pull request anda [melalui menu pull request](https://github.com/Luxinity-Roleplay/docs/pulls).

Jika anda menemukan typo/minor bug anda bisa submit issue melalui [menu issues](https://github.com/Luxinity-Roleplay/docs/issues).

Kepada [semua contributors](https://github.com/Luxinity-Roleplay/luxinity-roleplay.github.io/graphs/contributors), terimakasih telah membantu mengembangkan wiki untuk para pemula.


## Contributor Tips & Tricks

Tips dan Trik kepada Contributor dalam menulis Dokumentasi Wiki Luxinity.

### Markdown Support

Semua file _harus_ ber-ekstensi `.md` (Support `.mdx` jika anda ingin memuat Javascript) dan sudah ber-format Markdown. Untuk info lebih lanjut mengenai Markdown, silahkan cek [guide ini](https://guides.github.com/features/mastering-markdown/).

### Melampirkan link yang sudah ada didalam wiki

Jangan menggunakan link yang absolut. lampirkanlah link relative nya.

- ❌

  ```md
  anda dapat lihat selengkapnya di [rules](https://luxinity-roleplay.github.io/rules)
  ```

- ✔

  ```md
  anda dapat lihat selengkapnya di [rules](../rules)
  ```

`../` berarti "naik satu tingkat directory" jadi, jika anda mengedit file yang berada didalam direktori `howto-guide` dan anda ingin melampirkan link halaman `rules`, anda dapat menggunakan `../` untuk naik satu tingkat ke direktori root dan anda dapat langsung mengarahkan linknya dimana file `rules.md` berada (tanpa extensi `*.md`).

### Gambar

Kami tidak menerima hosting image, dikarenakan next.js tidak mensupport hal tersebut, maka anda harus meng-host image itu pada website lain. Jadi, jika anda ingin menyisipkan gambar kedalam sebuah halaman, gunakan `![]()` dan input alamat gambar anda didalamnya, dan jangan lupa juga melampirkan deskripsi gambar.

Jika anda bingung, anda boleh membaca halaman lainnya yang mencantumkan foto.

### Gunakan `Code` Snippets untuk Petunjuk teknis

Saat menulis paragraf yang berisi nama fungsi, angka, commands ingame, hingga apapun yang tidak ada di KBBI (Kamus Besar Bahasa Indonesia), gunakan \`kutip miring\` seperti itu. Ini dapat memudahkan untuk memisahkan kalimat yang bisa dibaca dengan kalimat/command yang digunakan didalam ingame.

- ❌

  > Command /avehicle hanya dapat digunakan admin level 6+

- ✔

  > Command `/avehicle` hanya dapat digunakan admin level 6+

Dalam contoh diatas, `/aveh` adalah nama command, bukan kata kata berbahasa Inggris/Indonesia, jadi gunakanlah `Code` Snippet agar memudahkan orang yang membacanya.

### Tabel

Jika ada tabel yang memiliki heading/judul, beri heading/judul diatasnya:

- ❌

  ```md
  |         |                                      |
  | ------- | ------------------------------------ |
  | Health  | Engine Status                        |
  | 650     | Undamaged                            |
  | 650-550 | White Smoke                          |
  | 550-390 | Grey Smoke                           |
  | 390-250 | Black Smoke                          |
  | < 250   | On fire (will explode seconds later) |
  ```

- ✔

  ```md
  | Health  | Engine Status                        |
  | ------- | ------------------------------------ |
  | 650     | Undamaged                            |
  | 650-550 | White Smoke                          |
  | 550-390 | Grey Smoke                           |
  | 390-250 | Black Smoke                          |
  | < 250   | On fire (will explode seconds later) |
  ```