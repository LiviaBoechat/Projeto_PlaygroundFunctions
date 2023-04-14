// Desafio 11
function generatePhoneNumber() {
  //codigo
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (Math.abs(lineA < lineB + lineC && lineA > lineB - lineC && lineB < lineA + lineC && lineB > lineA - lineC && lineC < lineA + lineB && lineC > lineA - lineB)) {
    return true;
  } else {
    return false;
  }
}
console.log(triangleCheck(16, 9, 2));

// Desafio 13
function hydrate(string) {
  let numBebidas = string.replace(/[^0-9]/g, ''); // extraindo numeros da string
  let separaNum = numBebidas.split(''); // separando a os numeros(que ainda são strings)
  let transfNum = []; // transformando numeros(strings) em numeros inteiros
  let soma = 0; // somando os números inteiros
  for (let index in separaNum) {
    transfNum.push(parseInt(separaNum[index])); // transformando numeros(strings) em numeros inteiros dentro da array transfNum
  }
  for (let index = 0; index < transfNum.length; index++) {
   soma += transfNum[index]; // somando os números inteiros
  }
  if (soma === 1) {
    return `${soma} copo de água`;
  } else {
    return `${soma} copos de água`;
  }
}
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
