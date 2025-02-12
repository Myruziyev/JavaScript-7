let Number = [2, 4, 9, 10, 45, 67, 8, 90];
let arrJuft = [];
for (let index = 0; index < 8; index++)
  if (Number[index] % 2 == 0) {
    arrJuft.unshift(Number[index]);
  }
console.log(Number, "boshlanishidagi array");
console.log(arrJuft, "juft sonlarga ajratilgan array");
