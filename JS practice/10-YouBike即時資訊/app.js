// 程式碼寫這裡

const siteList = document.querySelector(".siteList")

async function searchData(keywords) {
  const youbikeAPI =
    "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json"
  const rawData = await fetch(youbikeAPI)
  const data = await rawData.json()

  const getFilData = data.filter((filData) => filData.ar.includes(keywords))
  getFilData.forEach((dataProperty) => {
    let { ar: address, sna: location, sbi: num } = dataProperty
    let getDataList = `<li class="list-group-item fs-5">
    <i class="fas fa-bicycle"></i>
     ${location.replace("YouBike2.0_", "")} (${num})<br>
    <small class="text-muted">${address}</small>
    </li>`
    siteList.insertAdjacentHTML("beforeend", getDataList)
  })
}

function siteListReset() {
  siteList.innerHTML = ""
}

function checkInput(keywords) {
  if (keywords === "") {
    alert("輸入關鍵字搜尋路名，例如：八德路")
  } else {
    searchData(keywords)
  }
  siteListReset()
}

document.querySelector("#searchForm").addEventListener("submit", function (e) {
  const input = document.querySelector("#searchKeyword").value
  e.preventDefault()
  checkInput(input)
})
