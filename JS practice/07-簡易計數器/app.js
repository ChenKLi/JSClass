// 程式碼寫在這裡
document.addEventListener("DOMContentLoaded", function () {
  const plus = document.querySelector("#plus")
  const minus = document.querySelector("#minus")
  const num = document.querySelector("#counter")

  plus.addEventListener("click", () => {
    num.value++
    num.value = Number(num.value) + 1
  })

  minus.addEventListener("click", () => {
    if (num.value > 0) {
      num.value--
    } else {
      alert("已經沒得扣了哦!")
    }
  })
})
