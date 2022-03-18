const API = "https://jsonplaceholder.typicode.com/users";

// const a = fetch(API)
//   .then((resp) => {
//     return resp.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("fail----------" + err);
//   });

async function getUsers() {
  const rawData = await fetch(API);
  const data = await rawData.json();
}
getUsers();
