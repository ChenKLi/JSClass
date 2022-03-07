for (let i = 2; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

let n = "";

for (let i = 0; i < 5; i++) {
  n = n + "*";
  console.log(n);
}

let star = "*";
let space = " ";

for (let n = 0; n < 6; n++) {
  console.log(space.repeat(5 - n) + star.repeat(n + 1) + star.repeat(n));
}

// 0000*
// 000** *
// 00*** **
// 0**** ***
// ***** ****
