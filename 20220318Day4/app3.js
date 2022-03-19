const btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  const lastOne = document.querySelector("#list :last-child");
  console.log(lastOne.parentElement);
  console.log(lastOne.parentNode);
});
