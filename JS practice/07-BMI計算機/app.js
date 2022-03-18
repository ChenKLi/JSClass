// 程式碼寫在這裡
// 提示：BMI = 體重(kg) / 身高(m) 平方
document.addEventListener("DOMContentLoaded", function () {
  const h = document.querySelector("#bodyHeight")
  const w = document.querySelector("#bodyWeight")
  const result = document.querySelector("#resultText")
  const btn = document.querySelector("button")

  btn.addEventListener("click", function () {
    let height = h.value / 100
    let weight = w.value
    let BMI = Number(weight) / (Number(height) * Number(height))
    result.textContent = String(BMI.toFixed(2))
  })
})
