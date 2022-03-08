const list = [19, 42, 2, 77, 5];
for (let p = 0; p < list.length; p++) {
  for (let n = 0; n < list.length; n++) {
    if (list[n] > list[n + 1]) {
      let a = list[n];
      list[n] = list[n + 1];
      list[n + 1] = a;
      console.log(list);
    } else {
      console.log(list);
    }
  }
}
console.log(list[0] + list[1]);

//設置兩層for迴圈確保所有的資料都能過執行條件，用資料置換的方式，將最小的兩個數字不斷往前推送，直到執行完陣列長度的迴圈後，直接將list[0] + list[1]相加，即可得到兩個最小數的值。
