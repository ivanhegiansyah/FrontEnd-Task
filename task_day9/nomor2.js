// //nomor 2
var _ = require("lodash");

function hitungLembah(input) {
    let tinggi = 0;
    let lembah = 0;
    for (let i = 0; i < input.length; i++) {
        if (_.isEqual(input.charAt(i), "U")) {
            tinggi++;
            if (tinggi === 0) {
                lembah++;
            }
        } else {
            tinggi--;
        }
    }
    return lembah;
}

console.log(hitungLembah("DDUUDDUDUUUD"));
console.log(hitungLembah("UDDDUDUU"));
console.log(
    hitungLembah(
        "DUDUUUUUUUUDUDDUUDUUDDDUUDDDDDUUDUUUUDDDUUUUUUUDDUDUDUUUDDDDUUDDDUDDDDUUDDUDDUUUDUUUDUUDUDUDDDDDDDDD"
    )
);
