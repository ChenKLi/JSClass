function humanReadableTimer(seconds) {
  let sec = 0;
  let min = 0;
  let hour = 0;

  hour = Math.trunc(seconds / 3600);
  min = Math.trunc(seconds / 60) % 60;
  sec = seconds % 60;

  return (
    String(hour).padStart(2, "0") +
    ":" +
    String(min).padStart(2, "0") +
    ":" +
    String(sec).padStart(2, "0")
  );
}

console.log(humanReadableTimer(0)); // 印出 00:00:00
console.log(humanReadableTimer(34)); // 印出 00:00:59
console.log(humanReadableTimer(60)); // 印出 00:01:00
console.log(humanReadableTimer(90)); // 印出 00:01:30
console.log(humanReadableTimer(3599)); // 印出 00:59:59
console.log(humanReadableTimer(3600)); // 印出 01:00:00
console.log(humanReadableTimer(45296)); // 印出 12:34:56
console.log(humanReadableTimer(86399)); // 印出 23:59:59
console.log(humanReadableTimer(86400)); // 印出 24:00:00
console.log(humanReadableTimer(359999)); // 印出 99:59:59

// 除數來區分hour, min , sec且只保留整數，再運算完後設置各數值顯示若為個位數的狀況時，在前方加入一個字串"0"，可得人類看的懂的時間格式。
