//nomor 1
console.log("Nomor 1")
let nilai1 = [1, 2, 3, 4, 5]
let nilai2 = nilai1.reduce((acc, currentValue) => acc + currentValue)
console.log(nilai2)

//nomor 2
console.log("Nomor 2")
var filterValue = [-4, 3, 2, -21, 1]
var filteredValue = filterValue.filter(x => x > 0)
console.log(filteredValue)

//nomor 3
console.log("Nomor 3")
var data = [
    {name: 'daniel', age: 45},
    {name: 'john', age: 30},
    {name: 'robert', age: null},
    {name: 'jen', age: undefined},
    {name: null, age: undefined},
]
let newData = data.reduce(function (acc, currentValue) {
    if (currentValue.name != null && currentValue.age != null && currentValue.age != undefined) {
      acc.push({name: currentValue.name, age: currentValue.age})
    }
    return acc
  }, [])
  console.log(newData)

  //nomor 4
console.log("Nomor 4")
let konfersiMenit = angka => {
    let bagi = angka / 60
    let menit = Math.floor(bagi)
    let detik = angka % 60

    if (detik < 10) {
        detik = "0" + detik
    }
    
    return menit + ":" + detik
}

console.log(konfersiMenit(88))
console.log(konfersiMenit(53))
console.log(konfersiMenit(120))
console.log(konfersiMenit(124))

//nomor 5
console.log("Nomor 5")
function inputHarusGenap(angka) {
    if (angka % 2 !== 0) {
        throw new Error("Invalid");
    }
    return "Valid";
}

try {
    console.log(inputHarusGenap(7));
} catch (e) {
    console.log(e);
}

try {
    console.log(inputHarusGenap(4));
} catch (e) {
    console.log(e);
}

//nomor 6
console.log("Nomor 6")
function perkalianUnik(arr) {
    let result = []
    for(let i = 0; i < arr.length; i++) {
        result[i] = 1
        for (let j = 0; j < arr.length; j++) {
            if (i !== j) {
                result[i] *= arr[j]
            }
        }
    }
    return result
}

console.log(perkalianUnik([2, 4, 6]))
console.log(perkalianUnik([1, 2, 3, 4, 5]))
console.log(perkalianUnik([1, 4, 3, 2, 5]))
console.log(perkalianUnik([1, 3, 3, 1]))
console.log(perkalianUnik([2, 1, 8, 10, 2]))