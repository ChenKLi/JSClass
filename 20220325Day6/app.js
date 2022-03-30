// function heroCreator(name, power) {
//   const hero = {
//     name,
//     power,
//     attack: function () {
//       console.log("attack!!")
//     },
//   }
//   return hero
// }

// const h1 = heroCreator("Thor", 100)
// const h2 = heroCreator("Hactor", 300)
// const h3 = heroCreator("Bosh", 200)

// h1.attack()
// h2.attack()
// h3.attack()

// -----------------------------------------------------------------------------------------------------

// h1中沒有function是因為他們是原型鍊(prototype)，透過Object create 繼承了action的原型，在呼叫h1之所以可以呼叫到action 裡面的 function是因為透過隱藏屬性__proto__來尋找原型鍊中有沒有action這個object

// const action = {
//   attack: function () {
//     console.log("attack!!")
//   },
//   eat: function () {
//     console.log("Yummy")
//   },
// }

// function heroCreator(name, power) {
//   const hero = Object.create(action)
//   hero.name = name
//   hero.power = power
//   return hero
// }

// const h1 = heroCreator("Thor", 100)
// const h2 = heroCreator("Hactor", 300)
// const h3 = heroCreator("Bosh", 200)

// h1.attack()
// h2.attack()
// h3.attack()

// console.log(h1)

// -----------------------------------------------------------------------------------------------------

//new會在裡面長出一個prototype的空物件空物件，且this會指向空物件，並再放資料時將空物件回傳，再透過new會將結果傳出來，所以不用return(若寫了return，且回傳是陣列或是物件的話會覆寫掉原本this的return值)
// -----------------------------------------------------------------------------------------------------
//proto 和 prototype的關係 (注意：同屬性可能會被覆寫)
// function heroCreator(name, power) {
//   this.name = name
//   this.power = power
// }

// const actions = {
//   attack: function () {
//     console.log("attack")
//   },
//   eat: function () {
//     console.log("eat")
//   },
// }

// heroCreator.prototype = actions

// const h1 = new heroCreator()
// h1.attack()

// -----------------------------------------------------------------------------------------------------

// 同等

// const action = {
//   attack: function () {
//     console.log("attack!!")
//   },
//   eat: function () {
//     console.log("Yummy")
//   },
// }

// heroCreator.prototype.attack = action.attack

// -----------------------------------------------------------------------------------------------------

// class function 寫法
// class Actions {
//     attack() {
//       console.log("attack")
//     }

//     eat() {
//       console.log("eat")
//     }
//   }

//   class HeroCreator extends Actions {
//     constructor(name, power) {
//       super()
//       this.name = name
//       this.power = power
//     }
//   }

//   const h1 = new HeroCreator("kk", 100)
//   h1.attack()
//   console.log(h1)
// -----------------------------------------------------------------------------------------------------
