// ДЗ 1
function drawTriangle(height, symbol) {
    for (let i = 1; i <= height; i++) {
      console.log(symbol.repeat(i));
    }
  }
  drawTriangle(5, '*');

  function drawTriangle(height, symbol) { 
    let i = 1;
    while (i <= height) { 
      console.log(symbol.repeat(i)); 
      i++;
    } 
  } 
  drawTriangle(5, '*'); 

// ДЗ 2

//  let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i % 3) continue;
//     console.log(x = i)
//     sum += i;
// }
// console.log(sum);


// или так 

// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i % 3) continue;
//     sum += i;
// }
// console.log(sum);

// ДЗ 3
function pow(x, y) {
    return Math.pow(x, y);
  }
  
  const base = 2;
  const exponent = 100;
  const result = pow(base, exponent);
  console.log(result);