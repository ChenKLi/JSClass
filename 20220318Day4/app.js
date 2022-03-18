const API = "https://jsonplaceholder.typicode.com/users";

const req = new XMLHttpRequest();

req.addEventListener("load", () => {
  let resp = JSON.parse(req.responseText);
  const ul = document.createElement("ul");
  resp.forEach((user) => {
    const name = document.createElement("li");
    name.textContent = user.name;
    ul.appendChild(name);
  });
  const body = document.querySelector("body").appendChild(ul);
});

req.open("GET", API);

req.send();
