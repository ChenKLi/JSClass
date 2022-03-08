for (let i = 2; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

let n = "";

for (let o = 0; o < 5; o++) {
  n = n + "*";
  console.log(n);
}

let star = "*";
let space = " ";

for (let m = 0; m < 5; m++) {
  console.log(space.repeat(4 - m) + star.repeat(m + 1) + star.repeat(m));
}

// 0000*
// 000***
// 00*****
// 0*******
// *********
