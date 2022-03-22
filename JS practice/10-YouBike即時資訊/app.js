// // 程式碼寫這裡
// const API =
//   "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json"

// async function getUsers() {
//   const rawData = await fetch(API)
//   const addresses = await rawData.json()
//   const adr = addresses.filter(function (address) {
//     return address.ar.match(/^八德/g)
//   })
//   console.log(adr)
// }

// getUsers()

// const list = ["John", "Amy", "Tim", "Albert", "Tommy"]

// const result = list.filter(function (x) {
//   return x.length >= 4
// })

// console.log(result)

const list = [1, 2, 3, 4, 5]

const result = list.filter(function (value) {
  return value > 2
})

console.log(result) // [2, 4, 6, 8, 10]
console.log()
