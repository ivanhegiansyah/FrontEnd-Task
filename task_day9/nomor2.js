// //nomor 2

function hitungLembah(input) {
    let step = 0
    let lembah = 0
    for (let i = 0; i < input.length; i++) {
        if (input[i] === "U") {
            step++
            if (step === 0) {
                lembah++
            }
        }
        else {
            step--
        }
    }
    return lembah
}

console.log(hitungLembah("DDUUDDUDUUUD"))
console.log(hitungLembah("UDDDUDUU"))
console.log(hitungLembah("DUDUUUUUUUUDUDDUUDUUDDDUUDDDDDUUDUUUUDDDUUUUUUUDDUDUDUUUDDDDUUDDDUDDDDUUDDUDDUUUDUUUDUUDUDUDDDDDDDDD"))