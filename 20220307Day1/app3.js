let star = "*";
let space = " ";

for (let n = 0; n < 5; n++) {
  console.log(space.repeat(4 - n) + star.repeat(n + 1) + star.repeat(n));
}

// 0000*
// 000***
// 00*****
// 0*******
// *********
