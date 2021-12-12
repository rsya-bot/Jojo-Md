exports.allmenu = (conn, prefix, pushname) => {
    return `Hi ${pushname ? pushname : 'Kak'}, Berikut list menu yang tersedia di Bot ini!

*Owner*
≻ ${prefix}bc
≻ ${prefix}clearall
≻ ${prefix}setbio
≻ ${prefix}setname
≻ ${prefix}setpp

*Information Bot*
≻ ${prefix}menu
≻ ${prefix}donasi
≻ ${prefix}speed
≻ ${prefix}runtime

*Converter/Tools*
≻ ${prefix}sticker
≻ ${prefix}toimg
≻ ${prefix}tovid

*Group*
≻ ${prefix}infogrup
≻ ${prefix}add
≻ ${prefix}kick
≻ ${prefix}promote
≻ ${prefix}demote
≻ ${prefix}linkgc
≻ ${prefix}leave
≻ ${prefix}setdesc
≻ ${prefix}setgrupname
≻ ${prefix}sider
≻ ${prefix}opengrup
≻ ${prefix}closegrup
≻ ${prefix}join
≻ ${prefix}tagall
≻ ${prefix}hidetag

*Fun*
≻ ${prefix}kontak
≻ ${prefix}tagme
≻ ${prefix}ganteng
≻ ${prefix}cantik
≻ ${prefix}jadian
≻ ${prefix}seberapagay
≻ ${prefix}kapankah
≻ ${prefix}apakah
≻ ${prefix}rate
≻ ${prefix}hobby
≻ ${prefix}truth
≻ ${prefix}dare
≻ ${prefix}cekbapak

*Downloader*
≻ ${prefix}tiktok
≻ ${prefix}ytmp4
≻ ${prefix}ytmp3
≻ ${prefix}instagram
≻ ${prefix}facebook

*THANKS TO*
-> Irfan Hariyanto (Riyan)
-> Arasya Rafi (Arasya)

fitur lainnya masih dalam tahap pengembangan, request fitur chat ${prefix}owner
    `
}
