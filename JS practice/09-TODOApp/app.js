// 程式碼寫這裡
const addBtn = document.querySelector("#addBtn")
const inputText = document.querySelector("#taskInput")
const section = document.querySelector("section")
const todoList = document.createElement("ul")
todoList.classList.add("todo-list")

inputText.addEventListener("keyup", function (e) {
  if (e.which === 13) {
    createItem()
    inputText.value = ""
  }
})

addBtn.addEventListener("click", createItem)

section.appendChild(todoList)

function createItem() {
  const todoItem = document.createElement("li")
  const span = document.createElement("span")
  const delBtn = document.createElement("button")

  todoItem.classList.add("todo-item")
  delBtn.classList.add("closeBtn")
  span.classList.add("item")

  span.textContent = inputText.value
  delBtn.textContent = "X"

  todoItem.appendChild(span)
  todoItem.appendChild(delBtn)

  todoList.appendChild(todoItem)
  todoList.insertAdjacentElement("afterbegin", todoItem)

  delBtn.addEventListener("click", () => {
    todoItem.remove()
  })
  inputText.value = ""
}
