//1.d code telah dubah dari soal agar sesuai output 1d
var a = 5;
let b = "Kampus merdeka";
let nama = "Budi";
let terdaftar = false;
let lengkap_arr = [a, b, nama, terdaftar];


function perkenalan() {
    let asal = "Indonesia";
    return console.log(
        "Perkenalkan nama saya " +
        nama +
        " nomor urut " +
        a +
        " sekarang sedang mengikuti " +
        b +
        " berasal dari " +
        asal
    );
}

//nomor 1.b mengubah baris kode 22 (blok if)
terdaftar = true;
if (terdaftar == true) {
    console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}

a = b;
nama = b;

// console.log("asal diakses = " + asal);
//nomor 1.a
let ambil = lengkap_arr[2];
console.log("array = " + ambil);
console.log("a adalah = " + a);
console.log("b adalah = " + b);
//nomor 1.c pemanggilan function perkenalan
perkenalan();

//nomor 2.a
// Output tidak tampil karena di line tersebut ada percabangan dimana jika terdaftar true baru masuk kedalam percabangan tersebut, dan jika tidak maka tidak masuk. Di code awal pada line ke 4 tertulis bahwa terdaftar bernilai false, sehingga output tidak tampil.
//nomor 2.b
//Error terjadi karena sudah jelas bahwa variable nama itu typenya constant sehingga value dari nama itu tidak bisa diubah, namun jika nama diubah menjadi let maka tidak akan error.
//nomor 2.c
//Ya dapat dieksekusi, karena pada line 26 yaitu nama = b telah di comment sehingga nama yg seharusnya constant tidak jadi diubah nilainya membuat program menjadi berhasil di eksekusi, output yg dhasilkan pada line 29 adalah Kampus Merdeka.

//nomor 3
const foo = ['budi', 'sita', 'ayu'];
//saya ubah penamaan variable agar tidak bentrok dengan code di nomor 1
const [aa, bb, cc] = foo;
console.log(aa, bb, cc);

//nomor 4
let bdays = ['10-17', '05-19', '20-19'];
let newBdays = bdays.map(x => x.replace('-', '/'))
console.log(newBdays)

//nomor 5
let value = [1, 2, 3, 4, 5, 6];
let mulValue = value.map(x => x * 2);
console.log(mulValue);

//nomor 6
let arr = [1.5, 2.56, 5.1, 12.33];
let ceilArr = arr.map(x => Math.ceil(x))
console.log(ceilArr)