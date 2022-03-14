let list = [false, 1, 0, 1, 2, 0, 1, 3, "a"];

function moveZerosToEnd(arr) {
  let NewArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      // NewArray.push
      arr.splice(i, 1);
    }
  }
  return arr;
}

let result = moveZerosToEnd(list);
console.log(result); // [false,1,1,2,1,3,"a",0,0]
