require("dotenv").config();

let data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(data);
let array = new Array();
for (let i = 0; i < data.length / 3; i++) {
  let array1 = data.slice(i * 3, i * 3 + 3);
  //   console.log(array1);
  array.push(array1);
}
console.log(array);
