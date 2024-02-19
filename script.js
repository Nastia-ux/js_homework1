var years = prompt("Вкажіть вік: ");
 
if (years < 1 || isNaN(years)) {
    alert("Введено некоректне число. Спробуйте знову.");
} else {
  years % 100; 
    if (years == 1 || (years % 10 == 1 && years != 11)) {
      console.log(years + " рік");
    } else if ((years >= 2 && years <= 4) || (years % 10 >= 2 && years % 10 <= 4 && (years < 10 || years > 20))) {
      console.log(years + " роки");
    } else {
      console.log(years + " років");
    }
}