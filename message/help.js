exports.allmenu = (conn, prefix, pushname) => {
    return `Hi ${pushname ? pushname : 'Kak'}, Berikut list menu yang tersedia di Bot ini!

*Information Bot*
≻ ${prefix}menu
Note : Command Yang Barusan Kamu Gunakan
Contoh : -
≻ ${prefix}donasi
Note : Bantu Donasi Bot Agar Terus Online
Contoh : -
≻ ${prefix}speed
Note : Cek Speed Bot
Contoh : -
≻ ${prefix}runtime
Note : Lama Aktif Bot
Contoh : -

*Converter/Tools*
≻ ${prefix}sticker
Note : Membuat Sticker ( Masih Dalam Beta, Spam Aja Commandnya )
Contoh : Kirim Gambar/Reply Dengan Teks ${prefix}sticker
≻ ${prefix}toimg
Note : Ubah Sticker Menjadi Image
Contoh : Reply Sticker Dengan Teks ${prefix}toimg
≻ ${prefix}tovid
Note : Ubah Stick Gif Menjadi Video
Contoh : Reply Sticker Gif Dengan Teks ${prefix}tovid

*Downloader*
≻ ${prefix}tiktok
Note : Download Tiktok Downloader/Audio/Nowm
Contoh : ${prefix}tiktok [ Link Tiktok ]
≻ ${prefix}ytmp4
Note : Download Video Dari Youtube
Contoh : ${prefix}ytmp4 [ Link YouTube ]
≻ ${prefix}ytmp3
Note : Download Audio Dari Youtube
Contoh : ${prefix}ytmp3 [ Link Youtube ]
≻ ${prefix}instagram
Note : Download Video/Reels/Image Dari Ig
Contoh : ${prefix}igdl [ Link Instagram ]
≻ ${prefix}facebook
Note : Download Video/Image Dari facebook
Contoh : ${prefix}facebook [ Link Facebook ]

*INFO BOT*
Nama Bot : Jojo - Bot
Fitur : 12 ( Update Req Owner )
Nomer Owner : .owner
Pengguna Aktif : 16 ✔️

*INFO OWNER*
Nama Owner : Arasya
Nomer Owner : 0813-1994-4917

*THANKS TO*
- Riyaan
- Arasya

_fitur lainnya masih dalam tahap pengembangan, request fitur chat ${prefix}owner_
    `
}
