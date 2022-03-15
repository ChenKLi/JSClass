let list = [false, 1, 0, 1, 2, 0, 1, 3, "a"];

function moveZerosToEnd(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      newArray.push(arr[i]);
      arr.splice(i, 1);
    }
  }
  return arr.concat(newArray);
}

let result = moveZerosToEnd(list);
console.log(result); // [false,1,1,2,1,3,"a",0,0]

//用三個等號的方式過濾不是數字或不停資料類型的元素，然後將 0 push到新陣列後splice掉，再用concat新陣列合併就陣列得結果。
