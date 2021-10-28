//nomor 1
var _ = require('lodash');

const anggota_kelas = ["budi", "sita", "ayu", "rena", "omen"];
let mengumpulkan_tugas = ["rena", "omen"];

//nomor 1.a
console.log("1.a");
let belum_mengumpulkan_tugas = _.difference(anggota_kelas, mengumpulkan_tugas);
console.log(belum_mengumpulkan_tugas);

//nomor 1.b
console.log("1.b");
let kelompok_dua_orang = _.chunk(anggota_kelas, 2);
console.log(kelompok_dua_orang);

//nomor 1.c
console.log("1.c");
let new_anggota = _.join(anggota_kelas, "-");
console.log(new_anggota);

//nomor 1.d
console.log("1.d");
let tanpa_budi = _.drop(anggota_kelas, 1);
console.log(tanpa_budi);

//nomor 1.e
console.log("1.e");
let reverse_anggota_kelas = _.reverse(anggota_kelas);
console.log(reverse_anggota_kelas);