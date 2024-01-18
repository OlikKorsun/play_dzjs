// Home Work
'use strict';

// 1. Напишіть функцію min(a, b), яка повертає
// меньше з чисел a, b
//Додати перевірку, що функція отримує числа

function min(a, b) {
  if ((typeof a) != 'number' || (typeof b) != 'number') {
    return `${a} або ${b} не є числами`;
      } else {
    return Math.min(a, b);
}
}
console.log(min(5, 5.47));

// 2. Написати ф-цію, яка прибиратиме з масиву всі 
// значення, які перетворюються на false
// undefined, null, false, '', 0, NaN

const array = [
  1,
  0,
  54,
  "doc",
  null,
  "jpg",
  undefined,
  "",
  "png",
  "exe",
  false,
  "mp4",
  NaN,
  "hbs",
];

function checkOnFalse(arr) {
  // console.log(arr.length);
  for (let i = 0; i < arr.length; i++) {
    // console.log(`${i} this is ${arr[i]}`);
    if (arr[i] === 0 || arr[i] === "" ||
      String(arr[i]) === "NaN" || arr[i] === null ||
      arr[i] === undefined || arr[i] === false) {
      arr.splice(i, 1);
      i--;
    }  
  }
  return arr;
}

console.log(checkOnFalse(array));



// 3. Наступна функція повертає true, якщо параметр age більше 18.
// В іншому випадку вона запитує підтвердження через confirm і 
// повертає його результат:

// const age = prompt("Enter your age");

function checkAge(userAge) {
  if (userAge > 18) {
    return true;
  } else {
    let confirmAge = confirm("Вам реально більше 18?");
    return confirmAge;
  }
}

console.log(checkAge(20)); // розкоментувати і вставити age з prompt

// 4. напиши функцію яка сумуватиме сусідні числа і пушити в
// новий масив

const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

function sumNeighborElement(ourArr) {
  const finishArr = [];
  for (let i = 1; i < ourArr.length; i++) {
    finishArr.push(ourArr[i] + ourArr[i-1]);
  }
  return finishArr;
}

console.log(sumNeighborElement(someArr));


//5. Напиши скрипт, який для об'єкту user,
//послідовно:
//1 додасть поле mood зі значенням 'happy'
//2 замінить hobby на 'skydiving'
//3 замінить значення premium на false
//4 виводить зміст об'єкта users у форматі
//ключ:значення використовуя Object.keys() та for...of
const user = {
  name: "John",
  age: 20,
  hobby: "tenis",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;
console.table(user);

const keysUser = Object.keys(user);
for (const key of keysUser) {
  console.log(`${key}: ${user[key]}`);
}

//6. У нас є об'єкт, в якому зберігаються зарплати
//нашої команди
//Напишіть код для додавання усіх зарплат та
//збережіть його результат в змінній sum.
//Якщо об'єкт salaries пустий, то результат має бути 0

const salaries = {
  Mango: 100,
  Poly: 160,
  Ajax: 1470,
};

const keysSalaries = Object.keys(salaries);
let sum = 0;
if (keysSalaries.length === 0) {
  console.log("Працівників немає, немає кому платити ЗП");  
  } else {
  for (const key of keysSalaries) {
    sum += salaries[key];
  }
  console.log(sum);
}

