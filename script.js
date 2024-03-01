// DZ 1

let myObject = {
  name: 'John',
  age: 30,
  city: 'New York',
  
  getInfo: function() {
    for (let prop in this) {
      if (typeof this[prop] !== 'function') {
        console.log(prop + ': ' + this[prop]);
      }
    }
  }
};

myObject.getInfo();

myObject.job = 'Engineer';

myObject.getInfo();

// DZ 2

var services = {
  "Послуга 1": "50 грн",
  "Послуга 2": "100 грн",
  "Послуга 3": "200 грн"
};

services['Додаткова послуга'] = "500 грн";
function price() {
  let total = 0;
  for (let service in services) {
      total += parseInt(services[service]);
  }
  return total;
}
function minPrice() {
  let min = Infinity;
  for (let service in services) {
      min = Math.min(min, parseInt(services[service]));
  }
  return min;
}
function maxPrice() {
  let max = 0;
  for (let service in services) {
      max = Math.max(max, parseInt(services[service]));
  }
  return max;
}

console.log("Сума за всі послуги: " + price() + " грн");
console.log("Мінімальна сума за послугу: " + minPrice() + " грн");
console.log("Максимальна сума за послугу: " + maxPrice() + " грн");

