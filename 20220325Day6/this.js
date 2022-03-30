// 1. 誰呼叫，誰就是this
// const cat = {
//   name: "kitty",
//   age: 1,
//   hello: function () {
//     console.log(this)
//   },
// }

// cat.hello()
// ---------------------------

// 2. 沒人呼叫，this就是指向全域(window)物件
// 範例一
// function hi() {
//   console.log(this)
// }
// hi()

// 範例二
// function hi() {
//   function hey() {
//     console.log(this)
//   }
//   hey()
// }
// hi()

// ---------------------------
// 3. 箭頭函式沒有自己的this和argument

// const b = (a) => {
//   console.log(arguments)
// }
// a("aa", "bb", "cc")

// document.querySelector(".btn").addEventListener("click", function () {
//   this.textContent = "掰掰"
// })

// ---------------------------
// ---------------------------
// ---------------------------

// 4.是否有使用 call/apply/bind  改變this的指向

// const cat = {
//   name: "kitty",
//   age: 1,
// }

// function hello() {
//   this.name = "mitty"
// }
// console.log(cat.name)
// hello.call(cat)
// console.log(cat.name)

// ----------------------------------------

// IIDF

// const aa = function () {
//   console.log(444)
// }

// console.log(aa)
// ;(function (x) {
//   console.log(x)
// })(444)
