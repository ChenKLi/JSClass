const catsCard = document.querySelectorAll(".card-body")
const buyList = document.querySelector("tbody")

catsCard.forEach((e) => {
  e.addEventListener("click", function (catList) {
    if (catList.target.matches("button") || catList.target.matches("i")) {
      const catDetail = {
        name: catList.currentTarget.children[0].innerHTML,
        price: Number(
          catList.currentTarget.children[1].innerHTML.replace("$", "")
        ),
      }

      let { name, price } = catDetail

      const cat = `<tr>
             <td>${name}</td>
             <td><input type="number" value="1"></td>
             <td>$${price}</td>
             <td>$${price}</td>
             <td><button class="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button></td>
        </tr>`
      buyList.insertAdjacentHTML("beforeend", cat)

      clearBuyItem()
      clearBuyList(catList)
    }
  })
})

function clearBuyList(catList) {
  const delAll = document.querySelector("section > button")
  delAll.addEventListener("click", () => {
    if (
      (catList.target.matches("button") || catList.target.matches("i")) &&
      buyList.innerHTML !== ""
    ) {
      const tr = buyList.querySelector("tr")
      tr.remove()
    }
  })
}
function clearBuyItem() {
  buyList.addEventListener("click", (e) => {
    if (e.target.matches("button")) {
      e.target.parentElement.parentElement.remove()
    } else if (e.target.matches("i")) {
      e.target.parentElement.parentElement.parentElement.remove()
    }
  })
}
