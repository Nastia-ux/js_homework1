// DZ 1
function isNumber(x) {
  if (typeof x !== 'number' ) {
    return false;
  }
  return true;
}

console.log(isNumber(5)); //  true
console.log(isNumber('abc')); //  false
console.log(isNumber('4534')); //  false


//DZ 2


function checkProbabilityTheory(X) {
  let evenX = 0;
  let oddX = 0;

  for (let i = 0; i < X; i++) {
    let randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
    if (randomNumber % 3 === 0) {
      evenX++;
    } else {
      oddX++;
    }
  }

  let totalGenerated = evenX + oddX ;
  let evenPercentage = (evenX / totalGenerated) * 100;
  let oddPercentage = (oddX  / totalGenerated) * 100;

  console.log("Кількість згенерованих чисел: " + totalGenerated);
  console.log("Парних чисел: " + evenX);
  console.log("Не парних чисел: " + oddX);
  console.log("Відсоток парних до не парних: " + evenPercentage.toFixed(2) + "% : " + oddPercentage.toFixed(2) + "%");
}

checkProbabilityTheory(1000); 